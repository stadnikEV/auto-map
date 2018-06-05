import PubSub from 'pubsub-js';
import httpRequest from '../../../services/http-request';
import getRouteElem from './util/get-route-elem';
import getMarkerPointElem from './util/get-marker-point-elem';
import getPolylinePath from './util/get-polyline-path';
import getMarkerWayPointElem from './util/get-marker-waypoint-elem';
import getDataOfClosestCoordOnPolyline from '../util/get-data-of-closest-coord-on-polyline';
import cutPolylinePath from './util/cut-polyline-path';
import getPolylineElem from './util/get-polyline-elem';
import getId from './util/get-id';
import getwaypointIndex from './util/get-index-waypoint';
import objIsEmpty from '../util/obj-is-empty';
import packagingUserDataDriver from './util/packaging-user-data-driver';
import fromPointToLatLng from '../util/from-point-to-latLng';
import definePointName from '../util/define-point-name';
import fromLatLngToPoint from '../util/from-latLng-to-point';
import getStopoverPointElem from '../util/get-stopover-point-elem';


export default class DriverMod {
  constructor({ googleMaps, map, userData }) {
    this._subscribe = {};
    this._googleMaps = googleMaps;
    this._map = map;
    this._userData = userData;

    this._points = {
      A: {},
      B: {},
    };
    this._waypoints = {
      coord: [], // массив с координатами waypoints. Номер свойства указывает на порядковый номер waypoint.
      id: [], // номер свойства указывает на порядковый номер waypoint.Значение свойства указывает на id waypoint(по id определяется порядковый номер waypoint)
      mapElements: {}, // имя свойства соответствует id waypoint. значение свойства - mapElement
    };
    this._polyline = {};
    this._routeElem = null;

    this._map.addListener('click', this._onClickMap.bind(this));

    this._subscribe.destroyMap = PubSub.subscribe('destroyMap', this._destroy.bind(this));
    this._subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this._initUserData.bind(this));
    this._subscribe.startSearch = PubSub.subscribe('startSearch', this._startSearch.bind(this, { url: './driver/start-search' }));
  }


  _onClickMap(e) {
    const pointName = definePointName({ points: this._points });

    // если нет точки А или точки В
    if (pointName) {
      this._createPointElem({
        coord: e.latLng,
        pointName,
      });

      if (this._points.A.mapElements && this._points.B.mapElements) {
        this._createRoute()
          .then(() => {
            this._adjustCoordOfPoints();
            this._sendToServer({ url: './driver/save-data' });
          });
        return;
      }
      return;
    }

    // если есть точка A и точка B
    this._createWaypoint({ coord: e.latLng })
      .then(() => {
        this._sendToServer({ url: './driver/save-data' });
      });
  }


  _onClickPoint(pointName) {
    this._removePointElem({ pointName });

    // если polyline не создана
    if (!this._polyline.mapElements) {
      this._sendToServer({ url: './driver/save-data' });
      return;
    }

    this._render({
      action: 'remove',
      elements: [
        this._polyline.mapElements.polylineElem,
      ],
    });

    // если waypoints не созданы
    if (objIsEmpty(this._waypoints.mapElements)) {
      this._polyline = {};
      return;
    }

    // если нет точек А и B
    if (!this._points.A.mapElements && !this._points.B.mapElements) {
      // удалить все waypoint
      this._removeWaypointElements();
      this._polyline = {};
      this._sendToServer({ url: './driver/save-data' });
      return;
    }

    // если есть одна из точек и waypoint, отрезать участок от точки до waypoint
    this._cutPolyline({ pointName });
  }


  _onClickWaypoint(waypointId) {
    if (!this._points.A.mapElements || !this._points.B.mapElements) return;

    this._removeWaypointElements(waypointId);
    this._createRoute()
      .then(() => {
        this._sendToServer({ url: './driver/save-data' });
      });
  }


  /*
  *   создание елемента point, сохранение данных, помещение элемента на карту
  */


  _createPointElem({ pointName, coord }) {
    const point = {
      coord,
      mapElements: {},
    };

    const markerPointElem = getMarkerPointElem({
      googleMaps: this._googleMaps,
      coord,
      label: pointName,
    });

    point.mapElements.markerPointElem = markerPointElem;
    this._points[pointName] = point;

    this._lastCreatedElem = { pointName };

    this._render({
      action: 'add',
      elements: [
        markerPointElem,
      ],
    });

    markerPointElem.addListener('click', this._onClickPoint.bind(this, pointName));
  }


  /*
  *   удаление даных о элементе point, удаление элемента с карты
  */


  _removePointElem({ pointName }) {
    this._render({
      action: 'remove',
      elements: [
        this._points[pointName].mapElements.markerPointElem,
      ],
    });
    this._points[pointName] = {};
  }

  /*
  *   создание елемента polyline, сохранение данных, помещение элемента на карту
  */

  _createPolylineElem({ polylinePath }) {
    const polyline = {
      path: [],
      mapElements: {},
    };

    polyline.path = polylinePath;

    // получить элемент polylineElem
    const polylineElem = getPolylineElem({
      googleMaps: this._googleMaps,
      path: polylinePath,
    });

    polyline.mapElements.polylineElem = polylineElem;
    this._polyline = polyline;

    this._render({
      action: 'add',
      elements: [
        polylineElem,
      ],
    });
  }


  /*
  *   удаление даных о элементе polyline, удаление элемента с карты
  */


  _removePolylineElem() {
    this._render({
      action: 'remove',
      elements: [
        this._polyline.mapElements.polylineElem,
      ],
    });

    this._polyline.path = [];
  }

  /*
  *   комплексный метод, содержащий в себе создание waypoint, перерасчет маршрута, создание полилинии, рендеринг элементов...
  */

  _createWaypoint({ coord }) {
    const promise = new Promise((resolve) => {
      if (this._waypoints.coord.length >= 23) return;

      // сгенерировать waypointId
      const waypointId = getId({ elements: this._waypoints.id });

      // получить порядковый номер waypoint
      const waypointIndex = getwaypointIndex({
        map: this._map,
        pointACoord: this._points.A.coord,
        pointBCoord: this._points.B.coord,
        waypoints: this._waypoints.coord,
        clickCoord: coord,
      });
      const waypointElem = this._createWaypointElem({
        id: waypointId,
        index: waypointIndex,
        coord,
      });


      // необходимо если getRoute вернул "ZERO_RESULTS".
      this._lastCreatedElem = { waypointId };

      this._createRoute()
        .then(() => {
          // получить координату на созданной полилиинии (ближайшее расстояние от координаты waypoint до полилинии)
          const waypointWorldCoord = getDataOfClosestCoordOnPolyline({
            point: fromLatLngToPoint({
              map: this._map,
              points: [coord],
            })[0],
            polyline: fromLatLngToPoint({
              map: this._map,
              points: this._polyline.path,
            }),
          })
            .coord;

          // заменить данные о waypoint в объекте this._waypoints
          this._replaceWaypointPosition({
            waypointElem,
            coord: fromPointToLatLng({
              map: this._map,
              points: [waypointWorldCoord],
            })[0],
            index: waypointIndex,
            id: waypointId,
          });

          resolve();
        });
    });
    return promise;
  }

  /*
  *   создание елемента waypoints, сохранение данных, помещение элемента на карту
  */

  _createWaypointElem({
    id,
    index,
    coord,
    stopover = false,
    color,
    label,
  }) {
    // создать mapElement
    let waypointElem;

    if (!stopover) {
      waypointElem = getMarkerWayPointElem({
        googleMaps: this._googleMaps,
        map: this._map,
        coord,
      });
    }

    if (stopover) {
      waypointElem = getStopoverPointElem({
        googleMaps: this._googleMaps,
        coord,
        color,
        label,
      });
    }

    // добавить данные о waypoint в объект this._waypoints
    this._addtWaypointData({
      coord,
      id,
      index,
      waypointElem,
      stopover,
    });

    this._render({
      action: 'add',
      elements: [
        waypointElem,
      ],
    });

    if (!stopover) {
      waypointElem.addListener('click', this._onClickWaypoint.bind(this, id));
    }

    return waypointElem;
  }

  /*
  *   удаление даных о элементах waypoints, удаление элементов с карты
  */

  _removeWaypointElements(waypointId) {
    let waypointElements;

    // удалить waypoint c заданным id
    if (typeof waypointId === 'number') {
      // определить позицию waypoint
      let waypointIndex;
      this._waypoints.id.forEach((id, index) => {
        if (id === waypointId) {
          waypointIndex = index;
        }
      });
      // удалить данные о waypoint
      waypointElements = this._removeWaypointData({
        id: waypointId,
        index: waypointIndex,
      });
    }

    // удалить все waypoints
    if (waypointId === undefined) {
      waypointElements = this._removeWaypointData();
    }

    this._render({
      action: 'remove',
      elements: waypointElements,
    });
  }

  /*
  *   добавить данные о waypoint в объект this._waypoints
  */

  _addtWaypointData({
    waypointElem,
    coord,
    id,
    index,
    stopover,
  }) {
    // сохранить waypointId, в позиции waypointIndex
    this._waypoints.id.splice(index, 0, id);
    // сохранить waypointСoord, в позиции waypointIndex
    this._waypoints.coord.splice(index, 0, {
      location: coord,
      stopover,
    });

    // сохранить mapElement
    this._waypoints.mapElements[id] = waypointElem;
  }

  /*
  *   заменить данные о waypoint в объекте this._waypoints
  */

  _replaceWaypointPosition({
    coord,
    index,
    id,
    waypointElem,
  }) {
    this._waypoints.coord[index].location = coord;
    this._waypoints.mapElements[id] = waypointElem;
    waypointElem.setPosition(coord);
  }

  /*
  *   удалить данные о waypoints в объекте this._waypoints
  */

  _removeWaypointData({ id, index } = {}) {
    const mapElements = [];

    // удалить данные указанного waypoint
    if (typeof id === 'number'
    && typeof index === 'number') {
      this._waypoints.id.splice(index, 1);
      this._waypoints.coord.splice(index, 1);

      mapElements.push(this._waypoints.mapElements[id]);
      delete this._waypoints.mapElements[id];
    }
    // удалить все данные
    if (id === undefined
    && index === undefined) {
      this._waypoints.id.forEach((waypointId) => {
        mapElements.push(this._waypoints.mapElements[waypointId]);
      });
      this._waypoints.mapElements = {};
      this._waypoints.id = [];
      this._waypoints.coord = [];
    }

    return mapElements;
  }

  /*
  *   комплексный метод, содержащий в себе расчет маршрута, удаление полилинии, создание новой полилинии, рендеринг ролилинии...
  */

  _createRoute() {
    const promise = new Promise((resolve) => {
      getRouteElem({
        googleMaps: this._googleMaps,
        start: this._points.A.coord,
        end: this._points.B.coord,
        waypoints: this._waypoints.coord,
      })
        .then((response) => {
          this._routeElem = response;
          // при удачном получении данных, сбросить this._lastCreatedElem
          this._lastCreatedElem = {};
          // удалить с карты предыдущий polyline если он был
          if (this._polyline.mapElements) {
            this._removePolylineElem();
          }
          // получить массив точек с координатами polyline
          const polylinePath = getPolylinePath({
            routeElem: response,
          });
          this._createPolylineElem({ polylinePath });
          resolve();
        })
        .catch((status) => {
          console.warn(status);
          this._hendlerZeroResults();
        });
    });

    return promise;
  }

  /*
  *   укорачивание polyline от выбранной point(A или B) до ближайшего waypoint
  */

  _cutPolyline({ pointName }) {
    // берем первый или последний waypoint
    const waypointCoord = (pointName === 'A')
      ? this._waypoints.coord[0].location
      : this._waypoints.coord[this._waypoints.coord.length - 1].location;

    const cutMethod = (pointName === 'A')
      ? 'end'
      : 'beginning';

    this._polyline.path = cutPolylinePath({
      map: this._map,
      cutPointCoord: waypointCoord,
      polylinePath: this._polyline.path,
      cutMethod,
    });

    this._createPolylineElem({ polylinePath: this._polyline.path });
  }

  /*
  *   рендеринг массива элементов. Добавляет или удаляет эдементы с карты
  */

  _render({ elements, action }) {
    let actionFunction;

    if (action === 'add') {
      actionFunction = ({ mapElement }) => {
        mapElement.setMap(this._map);
      };
    }
    if (action === 'remove') {
      actionFunction = ({ mapElement }) => {
        mapElement.setMap(null);
        this._googleMaps.event.clearInstanceListeners(mapElement);
      };
    }

    if (!actionFunction) return;

    elements.forEach((mapElement) => {
      actionFunction({ mapElement });
    });
  }


  /*
  *   рендеринг массива элементов. Добавляет или удаляет эдементы с карты
  */


  _adjustCoordOfPoints() {
    const polylineCoordA = this._polyline.path[0];
    this._points.A.mapElements.markerPointElem.setPosition(polylineCoordA);
    this._points.A.coord = polylineCoordA;

    const polylineCoordB = this._polyline.path[this._polyline.path.length - 1];
    this._points.B.mapElements.markerPointElem.setPosition(polylineCoordB);
    this._points.B.coord = polylineCoordB;
  }

  /*
  *   создание елементов stopoverPoints, сохранение данных, помещение элемента на карту
  */

  _crateStopoverPoints({ stopoverPoints, passengerIndex }) {
    const stopoverPointsName = ['A', 'B'];
    const colors = [
      'red',
      'green',
      'blue',
    ];

    stopoverPointsName.forEach((pointName) => {
      const stopoverPointCoord = fromPointToLatLng({
        map: this._map,
        points: [stopoverPoints[pointName].coord],
      })[0];

      // сгенерировать waypointId
      const stopoverPointsId = getId({ elements: this._waypoints.id });

      // получить порядковый номер waypoint
      const stopoverPointsIndex = getwaypointIndex({
        map: this._map,
        pointACoord: this._points.A.coord,
        pointBCoord: this._points.B.coord,
        waypoints: this._waypoints.coord,
        clickCoord: stopoverPointCoord,
      });

      this._createWaypointElem({
        id: stopoverPointsId,
        index: stopoverPointsIndex,
        coord: stopoverPointCoord,
        stopover: true,
        color: colors[passengerIndex],
        label: pointName,
      });
    });
  }

  /*
  *   обработка нулевого ответа от google. Удаляет последний элемент с которым не удалось посчитать маршрут
  */


  _hendlerZeroResults() {
    // если последний элемент был waypoint
    if (typeof this._lastCreatedElem.waypointId === 'number') {
      this._removeWaypointElements(this._lastCreatedElem.waypointId);

      return;
    }
    // если последний элемент был point
    if (this._lastCreatedElem.pointName) {
      this._removePointElem({ pointName: this._lastCreatedElem.pointName });
    }
  }

  /*
  *   сохранение данных на сервере
  */

  _sendToServer({ url }) {
    const promise = new Promise((resolve) => {
      const userData = packagingUserDataDriver({
        userName: this._userData.userName,
        points: this._points,
        polyline: this._polyline,
        routeElem: this._routeElem,
        waypoints: this._waypoints,
        map: this._map,
      });

      httpRequest({
        url,
        data: userData,
      })
        .then((response) => {
          console.log('save data status:', response);
          resolve(response);
        });
    });

    return promise;
  }

  /*
  *   сохранение данных на сервере, начать поиск
  */

  _startSearch({ url }) {
    if (this._inStartSearchProcess) return;
    if (!this._points.A.mapElements || !this._points.B.mapElements) return;

    this._inStartSearchProcess = true;

    this._sendToServer({ url })
      .then((passengersData) => {
        this._inStartSearchProcess = false;
        if (this._isDestroy) return;
        if (passengersData === 'matches was not found') return;

        passengersData.forEach((passengerData, i) => {
          this._crateStopoverPoints({
            stopoverPoints: passengerData.stopoverPoints,
            passengerIndex: i,
          });
        });
      });
  }

  /*
  *   оработка данных с сервера(сохранение в объекте, рендеринг)
  */

  _initUserData() {
    if (!this._userData.driver || !this._userData.driver) {
      return;
    }

    if (this._userData.driver.points.A.coord && this._userData.driver.points.B.coord) {
      this._createPointElem({
        pointName: 'A',
        coord: fromPointToLatLng({
          map: this._map,
          points: [this._userData.driver.points.A.coord],
        })[0],
      });
      this._createPointElem({
        pointName: 'B',
        coord: fromPointToLatLng({
          map: this._map,
          points: [this._userData.driver.points.B.coord],
        })[0],
      });
    }

    if (this._userData.driver.polyline.path) {
      this._createPolylineElem({
        polylinePath: fromPointToLatLng({
          map: this._map,
          points: this._userData.driver.polyline.path,
        }),
      });
    }

    if (this._userData.driver.waypoints.coord.length !== 0) {
      const waypointsCoord = this._userData.driver.waypoints.coord;

      waypointsCoord.forEach((waypointCoord, index) => {
        const coord = fromPointToLatLng({
          map: this._map,
          points: [waypointCoord.location],
        })[0];
        this._createWaypointElem({
          id: this._userData.driver.waypoints.id[index],
          index,
          coord,
          stopover: waypointCoord.stopover,
        });
      });
    }
  }

  /*
  *   удаление элементов с карты, удаление данных, отписка от всех событий
  */

  _destroy() {
    if (this._points.A.mapElements) {
      this._removePointElem({ pointName: 'A' });
    }
    if (this._points.B.mapElements) {
      this._removePointElem({ pointName: 'B' });
    }
    if (this._polyline.mapElements) {
      this._removePolylineElem();
    }
    if (!objIsEmpty(this._waypoints.mapElements)) {
      this._removeWaypointElements();
    }
    this._googleMaps.event.clearInstanceListeners(this._map);
    PubSub.unsubscribe(this._subscribe.destroyMap);
    PubSub.unsubscribe(this._subscribe.initUserDataMap);
    PubSub.unsubscribe(this._subscribe.startSearch);
  }
}
