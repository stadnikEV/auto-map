import PubSub from 'pubsub-js';
import httpRequest from '../../../services/http-request';
import packagingDataPassenger from './util/packaging-data-passenger';
import getMarkerPointElem from './util/get-marker-point-elem';
import getCirclePointElem from './util/get-circle-point-elem';
import definePointName from '../util/define-point-name';
import fromPointToLatLng from '../util/from-point-to-latLng';
import getCircleRadiusWorldCoord from '../util/get-circle-radius-world-coord';
import getStopoverPointElem from '../util/get-stopover-point-elem';


export default class PassengerMode {
  constructor({ googleMaps, map, userData }) {
    this._subscribe = {};
    this._googleMaps = googleMaps;
    this._map = map;
    this._userData = userData;

    this._points = {
      A: {},
      B: {},
    };

    this._map.addListener('click', this._onClickMap.bind(this));

    this._subscribe.destroyMap = PubSub.subscribe('destroyMap', this._destroy.bind(this));
    this._subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this._initUserData.bind(this));
    this._subscribe.startSearch = PubSub.subscribe('startSearch', this._startSearch.bind(this, { url: './passenger/start-search' }));
  }


  _onClickMap(e) {
    if (this._radiusСhangesName) {
      this._onCircleChangeEnd({ pointName: this._radiusСhangesName });
      return;
    }

    if (this._points.A.mapElements && this._points.B.mapElements) return;

    const pointName = definePointName({ points: this._points });

    if (!pointName) return;

    this._createPointElem({
      coord: e.latLng,
      pointName,
      radius: 1000,
    });

    // если есть обе точки, упаковать и сохранить данные на сервере
    if (this._points.A.mapElements && this._points.B.mapElements) {
      this._sendToServer({ url: './passenger/save-data' });
    }
  }


  _onClickPoint(pointName) {
    this._removePointElem({ pointName });

    if (!this._points.A.mapElements && !this._points.B.mapElements) {
      this._sendToServer({ url: './passenger/save-data' });
    }
  }


  _onClickCircle(pointName) {
    const markerElem = this._points[pointName].mapElements.markerPointElem;
    const circleElem = this._points[pointName].mapElements.circlePointElem;

    if (this._radiusСhangesName) {
      this._onCircleChangeEnd({ pointName: this._radiusСhangesName });
      return;
    }
    this._radiusСhangesName = pointName;

    if (this._points.A.mapElements) {
      this._points.A.mapElements.markerPointElem.setClickable(false);
    }
    if (this._points.B.mapElements) {
      this._points.B.mapElements.markerPointElem.setClickable(false);
    }

    markerElem.setOpacity(0);
    circleElem.setEditable(true);
    circleElem.setOptions({
      fillOpacity: 0.2,
      strokeColor: 'black',
      strokeWeight: 1,
    });
  }

  /*
  *   создание елемента point, сохранение данных, помещение элемента на карту
  */

  _createPointElem({ pointName, coord, radius }) {
    const point = {
      coord,
      radius,
      mapElements: {},
    };

    const circlePointElem = getCirclePointElem({
      googleMaps: this._googleMaps,
      center: coord,
      radius,
    });

    const markerPointElem = getMarkerPointElem({
      googleMaps: this._googleMaps,
      coord,
      label: pointName,
    });

    point.mapElements.markerPointElem = markerPointElem;
    point.mapElements.circlePointElem = circlePointElem;

    const radiusWorldCoord = getCircleRadiusWorldCoord({
      googleMaps: this._googleMaps,
      map: this._map,
      circleElem: circlePointElem,
    });

    point.radiusWorldCoord = radiusWorldCoord;
    this._points[pointName] = point;

    this._render({
      action: 'add',
      elements: [
        markerPointElem,
        circlePointElem,
      ],
    });

    markerPointElem.addListener('click', this._onClickPoint.bind(this, pointName));
    circlePointElem.addListener('click', this._onClickCircle.bind(this, pointName));

    circlePointElem.addListener('radius_changed', this._onCircleChangeEnd.bind(this, { pointName }));
    circlePointElem.addListener('center_changed', this._onCircleChangeEnd.bind(this, { pointName }));
  }

  _onCircleChangeEnd({ pointName }) {
    this._radiusСhangesName = null;

    const markerElem = this._points[pointName].mapElements.markerPointElem;
    const circleElem = this._points[pointName].mapElements.circlePointElem;

    if (this._points.A.mapElements) {
      this._points.A.mapElements.markerPointElem.setClickable(true);
    }
    if (this._points.B.mapElements) {
      this._points.B.mapElements.markerPointElem.setClickable(true);
    }

    markerElem.setOpacity(1);
    circleElem.setEditable(false);
    circleElem.setOptions({
      fillOpacity: 0.5,
      strokeWeight: 2,
      strokeColor: 'white',
    });

    const circleCenter = circleElem.getCenter();
    const circleRadius = circleElem.getRadius();

    if (circleCenter.lat() !== this._points[pointName].coord.lat()) {
      markerElem.setPosition(circleCenter);
      this._points[pointName].coord = circleCenter;

      this._sendToServer({ url: './passenger/save-data' });
      return;
    }

    if (circleRadius !== this._points[pointName].radius) {
      this._points[pointName].radius = circleRadius;
      const radiusWorldCoord = getCircleRadiusWorldCoord({
        googleMaps: this._googleMaps,
        map: this._map,
        circleElem,
      });
      this._points[pointName].radiusWorldCoord = radiusWorldCoord;

      this._sendToServer({ url: './passenger/save-data' });
    }
  }

  /*
  *   удаление даных о элементе point, удаление элемента с карты
  */

  _removePointElem({ pointName }) {
    this._render({
      action: 'remove',
      elements: [
        this._points[pointName].mapElements.markerPointElem,
        this._points[pointName].mapElements.circlePointElem,
      ],
    });
    this._points[pointName] = {};

    if (this._stopoverPoints) this._removeStopoverPoints();
  }

  /*
  *   создание елементов stopoverPoints, сохранение данных, помещение элемента на карту
  */

  _crateStopoverPoints({ stopoverPoints }) {
    const stopoverPointsName = ['A', 'B'];

    this._stopoverPoints = {
      A: {
        mapElements: {},
      },
      B: {
        mapElements: {},
      },
    };

    stopoverPointsName.forEach((pointName) => {
      const stopoverPointElem = getStopoverPointElem({
        googleMaps: this._googleMaps,
        coord: fromPointToLatLng({
          map: this._map,
          points: [stopoverPoints[pointName].coord],
        })[0],
        color: 'red',
      });

      this._stopoverPoints[pointName].coord = stopoverPoints[pointName].coord;
      this._stopoverPoints[pointName].mapElements.stopoverPointElem = stopoverPointElem;
    });

    this._render({
      action: 'add',
      elements: [
        this._stopoverPoints.A.mapElements.stopoverPointElem,
        this._stopoverPoints.B.mapElements.stopoverPointElem,
      ],
    });
  }

  /*
  *   удаление даных о элементах stopoverPoints, удаление элемента с карты
  */

  _removeStopoverPoints() {
    this._render({
      action: 'remove',
      elements: [
        this._stopoverPoints.A.mapElements.stopoverPointElem,
        this._stopoverPoints.B.mapElements.stopoverPointElem,
      ],
    });
    this._stopoverPoints = null;
  }

  /*
  *   сохранение данных на сервере
  */

  _sendToServer({ url }) {
    const promise = new Promise((resolve) => {
      const userData = packagingDataPassenger({
        userName: this._userData.userName,
        points: this._points,
        map: this._map,
      });

      httpRequest({
        url,
        data: userData,
      })
        .then((response) => {
          console.log('server response:', response);
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
      .then((driverData) => {
        this._inStartSearchProcess = false;
        if (this._isDestroy) return;

        if (driverData === 'matches was not found') return;

        this._crateStopoverPoints({
          stopoverPoints: driverData.stopoverPoints,
        });
      });
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
  *   оработка данных с сервера(сохранение в объекте, рендеринг)
  */

  _initUserData() {
    if (!this._userData.passenger || !this._userData.passenger) {
      return;
    }
    if (this._userData.passenger.points.A.coord && this._userData.passenger.points.B.coord) {
      this._createPointElem({ // сделать проверку наличия данных
        coord: fromPointToLatLng({
          map: this._map,
          points: [this._userData.passenger.points.A.coord],
        })[0],
        pointName: 'A',
        radius: this._userData.passenger.points.A.radius,
      });

      this._createPointElem({
        coord: fromPointToLatLng({
          map: this._map,
          points: [this._userData.passenger.points.B.coord],
        })[0],
        pointName: 'B',
        radius: this._userData.passenger.points.B.radius,
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
    this._googleMaps.event.clearInstanceListeners(this._map);
    PubSub.unsubscribe(this._subscribe.destroyMap);
    PubSub.unsubscribe(this._subscribe.initUserDataMap);
    PubSub.unsubscribe(this._subscribe.startSearch);

    this._isDestroy = true;
  }
}
