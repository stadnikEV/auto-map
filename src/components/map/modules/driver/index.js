import PubSub from 'pubsub-js';
import simbiozApi from 'simbioz-api/driver-api';
import isObjEmpty from 'utils/is-obj-empty';
import getDataOfClosestCoordOnPolyline from 'components/__shared/map-modules/get-data-of-closest-coord-on-polyline';
import fromPointToLatLng from 'components/__shared/map-modules/from-point-to-latLng';
import definePointName from 'components/__shared/map-modules/define-point-name';
import fromLatLngToPoint from 'components/__shared/map-modules/from-latLng-to-point';
import getStopoverPointElem from 'components/__shared/map-modules/get-stopover-point-elem';
import getRouteElem from './get-route-elem';
import getMarkerPointElem from './get-marker-point-elem';
import getPolylinePath from './get-polyline-path';
import getMarkerWayPointElem from './get-marker-waypoint-elem';
import cutPolylinePath from './cut-polyline-path';
import getPolylineElem from './get-polyline-elem';
import getId from './get-id';
import getWaypointIndex from './get-waypoint-index';
import packagingUserDataDriver from './packaging-user-data-driver';
import waypointIndexIsBetweenStopover from './waypoint-index-is-between-stopover';
import getIndexOfExtremeStopovers from './get-index-of-extreme-stopovers';


export default class DriverMod {
  constructor({ googleMaps, map }) {
    this.subscribe = {};
    this.googleMaps = googleMaps;
    this.map = map;

    this.points = {
      A: {},
      B: {},
    };
    this.waypoints = {
      coord: [], // массив с координатами waypoints. Номер свойства указывает на порядковый номер waypoint.
      id: [], // номер свойства указывает на порядковый номер(index) waypoint в маршруте. Значение свойства указывает на id waypoint(по id определяется порядковый номер(index) waypoint)
      mapElements: {}, // имя свойства соответствует id waypoint. значение свойства - mapElement
    };
    this.polyline = {};
    this.routeElem = null;

    this.init();

    // this.subscribe.destroyMap = PubSub.subscribe('destroyMap', this.destroy.bind(this));
    // this.subscribe.initMapDataMap = PubSub.subscribe('initMapDataMap', this.initMapData.bind(this));
    // this.subscribe.startSearch = PubSub.subscribe('startSearch', this.startSearch.bind(this, { url: './driver/start-search' }));
  }

  init() {
    this.map.addListener('click', this.onClickMap.bind(this));
    this.initMapData();
  }


  onClickMap(e) {
    const pointName = definePointName({ points: this.points });
    // если нет точки А или точки В
    if (pointName) {
      this.createPointElem({
        coord: e.latLng,
        pointName,
      });
      if (this.points.A.mapElements && this.points.B.mapElements) {
        this.createRouteElem()
          .then(() => {
            this.adjustCoordOfPoints();
            this.saveMapData();
          })
          .catch((err) => {
            console.log(err);
          });
        return;
      }
      return;
    }
    // если есть точка A и точка B
    this.initWaypoint({ coord: e.latLng })
      .then(() => {
        this.saveMapData();
      })
      .catch((err) => {
        console.warn(err);
      });
  }


  onClickPoint(pointName) {
    this.removePointElem({ pointName });
    // если polyline не создана
    if (!this.polyline.mapElements) {
      this.saveMapData();
      return;
    }

    this.render({
      action: 'remove',
      elements: [
        this.polyline.mapElements.polylineElem,
      ],
    });

    // если waypoints не созданы
    if (isObjEmpty(this.waypoints.mapElements)) {
      this.polyline = {};
      return;
    }

    // если нет точек А и B
    if (!this.points.A.mapElements && !this.points.B.mapElements) {
      // удалить все waypoint
      this.removeWaypointElements();
      this.polyline = {};
      this.saveMapData();
      return;
    }

    // если есть одна из точек и waypoint, отрезать участок от точки до waypoint
    this.cutPolyline({ pointName });
  }


  onClickWaypoint(waypointId) {
    if (!this.points.A.mapElements || !this.points.B.mapElements) return;

    this.removeWaypointElements(waypointId);
    this.createRouteElem()
      .then(() => {
        this.saveMapData();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  /*
  *   создание елемента point, сохранение данных, помещение элемента на карту
  */

  createPointElem({ pointName, coord }) {
    const point = {
      coord,
      mapElements: {},
    };
    const markerPointElem = getMarkerPointElem({
      googleMaps: this.googleMaps,
      coord,
      label: pointName,
    });
    point.mapElements.markerPointElem = markerPointElem;
    this.points[pointName] = point;
    // при неудачном ответе google при расчете маршрута, этот элемент будет удален.
    this.lastCreatedElem = { pointName };

    this.render({
      action: 'add',
      elements: [
        markerPointElem,
      ],
    });

    markerPointElem.addListener('click', this.onClickPoint.bind(this, pointName));
  }

  /*
  *   удаление даных о элементе point, удаление элемента с карты
  */

  removePointElem({ pointName }) {
    this.render({
      action: 'remove',
      elements: [
        this.points[pointName].mapElements.markerPointElem,
      ],
    });
    this.points[pointName] = {};
  }

  /*
  *   создание елемента polyline, сохранение данных, помещение элемента на карту
  */

  createPolylineElem({ polylinePath }) {
    const polyline = {
      path: polylinePath,
      mapElements: {},
    };
    // получить элемент polylineElem
    const polylineElem = getPolylineElem({
      googleMaps: this.googleMaps,
      path: polylinePath,
    });
    polyline.mapElements.polylineElem = polylineElem;
    this.polyline = polyline;

    this.render({
      action: 'add',
      elements: [
        polylineElem,
      ],
    });
  }

  /*
  *   удаление даных о элементе polyline, удаление элемента с карты
  */

  removePolylineElem() {
    this.render({
      action: 'remove',
      elements: [
        this.polyline.mapElements.polylineElem,
      ],
    });
    this.polyline.path = [];
  }

  /*
  *   комплексный метод, содержащий в себе создание waypoint, перерасчет маршрута, создание полилинии, рендеринг элементов...
  */

  initWaypoint({ coord }) {
    const promise = new Promise((resolve, reject) => {
      if (this.waypoints.coord.length >= 23) return;
      // сгенерировать waypointId
      const waypointId = getId({ elements: this.waypoints.id });
      // получить порядковый номер waypoint
      const waypointIndex = getWaypointIndex({
        map: this.map,
        pointACoord: this.points.A.coord,
        pointBCoord: this.points.B.coord,
        waypoints: this.waypoints.coord,
        clickCoord: coord,
      });
      // если waypoint между stopover, не создавать waypoint
      const stopoversIndex = getIndexOfExtremeStopovers({ waypoints: this.waypoints.coord });
      if (waypointIndexIsBetweenStopover({ waypointIndex, stopoversIndex })) {
        return;
      }
      const waypointElem = this.createWaypointElem({
        id: waypointId,
        index: waypointIndex,
        coord,
      });
      // необходимо если getRoute вернул "ZERORESULTS".
      this.lastCreatedElem = { waypointId };

      this.createRouteElem()
        .then(() => {
          // получить координату на созданной полилиинии (ближайшее расстояние от координаты waypoint до полилинии)
          const waypointWorldCoord = getDataOfClosestCoordOnPolyline({
            point: fromLatLngToPoint({
              map: this.map,
              points: [coord],
            })[0],
            polyline: fromLatLngToPoint({
              map: this.map,
              points: this.polyline.path,
            }),
          })
            .coord;
          // заменить данные о waypoint в объекте this.waypoints
          this.adjustCoordOfWaypoint({
            waypointElem,
            coord: fromPointToLatLng({
              map: this.map,
              points: [waypointWorldCoord],
            })[0],
            index: waypointIndex,
          });

          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  /*
  *   создание елемента waypoints, сохранение данных, помещение элемента на карту
  */

  createWaypointElem({
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
        googleMaps: this.googleMaps,
        map: this.map,
        coord,
      });
    }
    if (stopover) {
      waypointElem = getStopoverPointElem({
        googleMaps: this.googleMaps,
        coord,
        color,
        label,
      });
    }
    // добавить данные о waypoint в объект this.waypoints
    this.addtWaypointData({
      coord,
      id,
      index,
      waypointElem,
      stopover,
    });
    this.render({
      action: 'add',
      elements: [
        waypointElem,
      ],
    });
    if (!stopover) {
      waypointElem.addListener('click', this.onClickWaypoint.bind(this, id));
    }
    return waypointElem;
  }

  /*
  *   удаление даных о элементах waypoints, удаление элементов с карты. Если id не задан, удалить все waypoints
  */

  removeWaypointElements(waypointId) {
    let waypointElements;

    // удалить waypoint c заданным id
    if (typeof waypointId === 'number') {
      // определить позицию waypoint
      let waypointIndex;
      this.waypoints.id.forEach((id, index) => {
        if (id === waypointId) {
          waypointIndex = index;
        }
      });
      // удалить данные о waypoint
      waypointElements = this.removeWaypointData({
        id: waypointId,
        index: waypointIndex,
      });
    }

    // удалить все waypoints
    if (waypointId === undefined) {
      waypointElements = this.removeWaypointData();
    }

    this.render({
      action: 'remove',
      elements: waypointElements,
    });
  }

  /*
  *   добавить данные о waypoint в объект this.waypoints
  */

  addtWaypointData({
    waypointElem,
    coord,
    id,
    index,
    stopover,
  }) {
    // вставить в массив this.waypoints.id значение id в позицию index.
    this.waypoints.id.splice(index, 0, id);
    // // вставить в массив waypointСoord значение coord в позицию index.
    this.waypoints.coord.splice(index, 0, {
      location: coord,
      stopover,
    });
    // сохранить mapElement
    this.waypoints.mapElements[id] = waypointElem;
  }

  /*
  *   заменить данные о waypoint в объекте this.waypoints
  */

  adjustCoordOfWaypoint({
    coord,
    index,
    waypointElem,
  }) {
    this.waypoints.coord[index].location = coord;
    waypointElem.setPosition(coord);
  }

  /*
  *   удалить данные о waypoints в объекте this.waypoints
  */

  removeWaypointData({ id, index } = {}) {
    const mapElements = [];

    // удалить данные указанного waypoint
    if (typeof id === 'number'
    && typeof index === 'number') {
      this.waypoints.id.splice(index, 1);
      this.waypoints.coord.splice(index, 1);

      mapElements.push(this.waypoints.mapElements[id]);
      delete this.waypoints.mapElements[id];
    }
    // удалить все данные
    if (id === undefined
    && index === undefined) {
      this.waypoints.id.forEach((waypointId) => {
        mapElements.push(this.waypoints.mapElements[waypointId]);
      });
      this.waypoints.mapElements = {};
      this.waypoints.id = [];
      this.waypoints.coord = [];
    }

    return mapElements;
  }

  /*
  *   комплексный метод, содержащий в себе расчет маршрута, удаление полилинии, создание новой полилинии, рендеринг ролилинии...
  */

  createRouteElem() {
    const promise = new Promise((resolve, reject) => {
      getRouteElem({ // запрос к google
        googleMaps: this.googleMaps,
        start: this.points.A.coord,
        end: this.points.B.coord,
        waypoints: this.waypoints.coord,
      })
        .then((response) => {
          this.routeElem = response;
          // при удачном получении данных, сбросить this.lastCreatedElem
          this.lastCreatedElem = {};
          // удалить с карты предыдущий polyline если он был
          if (this.polyline.mapElements) {
            this.removePolylineElem();
          }
          // получить массив точек с координатами polyline
          const polylinePath = getPolylinePath({
            routeElem: this.routeElem,
          });
          this.createPolylineElem({ polylinePath });
          resolve();
        })
        .catch((status) => {
          this.hendlerZeroResults();
          reject(status);
        });
    });

    return promise;
  }

  /*
  *   укорачивание polyline от выбранной point(A или B) до ближайшего waypoint
  */

  cutPolyline({ pointName }) {
    // берем первый или последний waypoint
    const waypointCoord = (pointName === 'A')
      ? this.waypoints.coord[0].location
      : this.waypoints.coord[this.waypoints.coord.length - 1].location;

    const cutMethod = (pointName === 'A')
      ? 'end'
      : 'beginning';

    this.polyline.path = cutPolylinePath({
      map: this.map,
      cutPointCoord: waypointCoord,
      polylinePath: this.polyline.path,
      cutMethod,
    });

    this.createPolylineElem({ polylinePath: this.polyline.path });
  }

  /*
  *   рендеринг массива элементов. Добавляет или удаляет эдементы с карты
  */

  render({ elements, action }) {
    let actionFunction;

    if (action === 'add') {
      actionFunction = ({ mapElement }) => {
        mapElement.setMap(this.map);
      };
    }
    if (action === 'remove') {
      actionFunction = ({ mapElement }) => {
        mapElement.setMap(null);
        this.googleMaps.event.clearInstanceListeners(mapElement);
      };
    }

    if (!actionFunction) return;

    elements.forEach((mapElement) => {
      actionFunction({ mapElement });
    });
  }

  /*
  *   скорректировать положение А и В. Установить точки в начало и конец соданного маршрута
  */

  adjustCoordOfPoints() {
    const polylineCoordA = this.polyline.path[0];
    this.points.A.mapElements.markerPointElem.setPosition(polylineCoordA);
    this.points.A.coord = polylineCoordA;

    const polylineCoordB = this.polyline.path[this.polyline.path.length - 1];
    this.points.B.mapElements.markerPointElem.setPosition(polylineCoordB);
    this.points.B.coord = polylineCoordB;
  }

  /*
  *   спрятаять waypoints которых находятся между двух крайних stopoverPoints
  */

  hideWaypointsBeetwenStopover() {
    const stopoversIndex = getIndexOfExtremeStopovers({ waypoints: this.waypoints.coord });

    this.waypoints.coord.forEach((waypoint, i) => {
      if (waypoint.stopover === true) return;

      if (waypointIndexIsBetweenStopover({
        waypointIndex: i,
        stopoversIndex,
      })) {
        const mapElementId = this.waypoints.id[i];
        this.waypoints.mapElements[mapElementId].setClickable(false);
        this.waypoints.mapElements[mapElementId].setOpacity(0);
      }
    });
  }

  /*
  *   создание елементов stopoverPoints, сохранение данных, помещение элемента на карту
  */

  crateStopoverPoints({ stopoverPoints, passengerIndex }) {
    const stopoverPointsName = ['A', 'B'];
    const colors = [
      'red',
      'green',
      'blue',
    ];

    stopoverPointsName.forEach((pointName) => {
      const stopoverPointCoord = fromPointToLatLng({
        map: this.map,
        points: [stopoverPoints[pointName].coord],
      })[0];

      // сгенерировать waypointId
      const stopoverPointsId = getId({ elements: this.waypoints.id });

      // получить порядковый номер waypoint
      const stopoverPointsIndex = getWaypointIndex({
        map: this.map,
        pointACoord: this.points.A.coord,
        pointBCoord: this.points.B.coord,
        waypoints: this.waypoints.coord,
        clickCoord: stopoverPointCoord,
      });

      this.createWaypointElem({
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


  hendlerZeroResults() {
    // если последний элемент был waypoint
    if (typeof this.lastCreatedElem.waypointId === 'number') {
      this.removeWaypointElements(this.lastCreatedElem.waypointId);
      return;
    }
    // если последний элемент был point
    if (this.lastCreatedElem.pointName) {
      this.removePointElem({ pointName: this.lastCreatedElem.pointName });
    }
  }

  /*
  *   сохранение данных на сервере
  */

  saveMapData() {
    const promise = new Promise((resolve) => {
      const userData = packagingUserDataDriver({
        // userName: this.userData.userName,
        points: this.points,
        polyline: this.polyline,
        routeElem: this.routeElem,
        waypoints: this.waypoints,
        map: this.map,
      });
      simbiozApi.putMapData({
        data: userData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          console.warn(err);
        });
    });

    return promise;
  }

  /*
  *   сохранение данных на сервере, начать поиск
  */

  startSearch() {
    if (this.inStartSearchProcess) return;
    if (!this.points.A.mapElements || !this.points.B.mapElements) return;

    this.inStartSearchProcess = true;

    this.saveMapData()
      .then((passengersData) => {
        this.inStartSearchProcess = false;
        if (this.isDestroy) return;
        if (passengersData === 'matches was not found') return;

        passengersData.forEach((passengerData, i) => {
          this.crateStopoverPoints({
            stopoverPoints: passengerData.stopoverPoints,
            passengerIndex: i,
          });
        });
        this.hideWaypointsBeetwenStopover();
      });
  }

  /*
  *   оработка данных с сервера(сохранение в объекте, рендеринг)
  */

  initMapData() {
    simbiozApi.getMapData()
      .then((data) => {
        if (!data.points.A.coord || !data.points.B.coord || data.polyline.path.length === 0) {
          return;
        }
        this.points.A.coord = data.points.A.coord;
        this.points.B.coord = data.points.B.coord;
        this.polyline.path = data.polyline.path;

        this.createPointElem({
          pointName: 'A',
          coord: fromPointToLatLng({
            map: this.map,
            points: [this.points.A.coord],
          })[0],
        });
        this.createPointElem({
          pointName: 'B',
          coord: fromPointToLatLng({
            map: this.map,
            points: [this.points.B.coord],
          })[0],
        });

        this.createPolylineElem({
          polylinePath: fromPointToLatLng({
            map: this.map,
            points: this.polyline.path,
          }),
        });

        if (data.waypoints.coord.length === 0) {
          return;
        }

        data.waypoints.coord.forEach((waypointCoord, index) => {
          const coord = fromPointToLatLng({
            map: this.map,
            points: [waypointCoord.location],
          })[0];
          this.createWaypointElem({
            id: data.waypoints.id[index],
            index,
            coord,
            stopover: data.waypoints.coord.stopover,
          });
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  /*
  *   удаление элементов с карты, удаление данных, отписка от всех событий
  */

  destroy() {
    if (this.points.A.mapElements) {
      this.removePointElem({ pointName: 'A' });
    }
    if (this.points.B.mapElements) {
      this.removePointElem({ pointName: 'B' });
    }
    if (this.polyline.mapElements) {
      this.removePolylineElem();
    }
    if (!isObjEmpty(this.waypoints.mapElements)) {
      this.removeWaypointElements();
    }
    this.googleMaps.event.clearInstanceListeners(this.map);
    PubSub.unsubscribe(this.subscribe.destroyMap);
    PubSub.unsubscribe(this.subscribe.initMapDataMap);
    PubSub.unsubscribe(this.subscribe.startSearch);
  }
}
