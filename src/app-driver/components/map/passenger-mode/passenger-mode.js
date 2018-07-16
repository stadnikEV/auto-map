import PubSub from 'pubsub-js';
import httpRequest from '../../../services/http-request';
import packagingDataPassenger from './util/packaging-data-passenger';
import getMarkerPointElem from './util/get-marker-point-elem';
import getCirclePointElem from './util/get-circle-point-elem';
import definePointName from '../util/define-point-name';
import fromPointToLatLng from '../util/from-point-to-latLng';
import getCircleRadiusWorldCoord from '../util/get-circle-radius-world-coord';
import getStopoverPointElem from '../util/get-stopover-point-elem';
import objIsEmpty from '../util/obj-is-empty';


export default class PassengerMode {
  constructor({ googleMaps, map, userData }) {
    this.subscribe = {};
    this.googleMaps = googleMaps;
    this.map = map;
    this.userData = userData;

    this.points = {
      A: {},
      B: {},
    };

    this.map.addListener('click', this.onClickMap.bind(this));

    this.subscribe.destroyMap = PubSub.subscribe('destroyMap', this.destroy.bind(this));
    this.subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this.initUserData.bind(this));
    this.subscribe.searchStopover = PubSub.subscribe('searchStopover', this.searchStopover.bind(this, { url: './passenger/start-search' }));
  }


  onClickMap(e) {
    if (this.points.A.mapElements && this.points.B.mapElements) return;

    const pointName = definePointName({ points: this.points });

    if (!pointName) return;

    this.points[pointName] = this.createPointStructure({
      coord: e.latLng,
      pointName,
      radius: 1000,
    });

    this.addEvents({
      pointName,
      markerPointElem: this.points[pointName].mapElements.markerPointElem,
      circlePointElem: this.points[pointName].mapElements.circlePointElem,
    });

    this.render({
      action: 'add',
      elements: [
        this.points[pointName].mapElements.markerPointElem,
        this.points[pointName].mapElements.circlePointElem,
      ],
    });


    // если есть обе точки, упаковать и сохранить данные на сервере
    if (this.points.A.mapElements && this.points.B.mapElements) {
      this.sendToServer({ url: './passenger/save-data' });
    }
  }

  addEvents({ markerPointElem, circlePointElem, pointName }) {
    markerPointElem.addListener('click', this.onClickPoint.bind(this, pointName));
    circlePointElem.addListener('click', this.onClickPoint.bind(this, pointName));
  }


  onClickPoint(pointName) {
    this.render({
      action: 'remove',
      elements: [
        this.points[pointName].mapElements.markerPointElem,
        this.points[pointName].mapElements.circlePointElem,
      ],
    });

    this.points[pointName] = {};

    if (this.stopoverPoints) this.removeStopoverStructure();

    if (!this.points.A.mapElements && !this.points.B.mapElements) {
      this.sendToServer({ url: './passenger/save-data' });
    }
  }

  /*
  *   создание елемента point, сохранение данных, помещение элемента на карту
  */

  createPointStructure({ pointName, coord, radius }) {
    const point = {
      coord,
      radius,
      radiusWorldCoord: null,
      mapElements: {},
    };

    const circlePointElem = getCirclePointElem({
      googleMaps: this.googleMaps,
      center: coord,
      radius,
    });

    const markerPointElem = getMarkerPointElem({
      googleMaps: this.googleMaps,
      coord,
      label: pointName,
    });

    point.mapElements.markerPointElem = markerPointElem;
    point.mapElements.circlePointElem = circlePointElem;

    point.radiusWorldCoord = getCircleRadiusWorldCoord({
      googleMaps: this.googleMaps,
      map: this.map,
      circleElem: circlePointElem,
    });

    return point;
  }


  /*
  *   создание елементов stopoverPoints, сохранение данных, помещение элемента на карту
  */

  crateStopoverStructure({ stopoverPoints }) {
    const stopoverPointsName = ['A', 'B'];

    const stopovers = {
      A: {
        coord: null,
        mapElements: {},
      },
      B: {
        coord: null,
        mapElements: {},
      },
    };

    stopoverPointsName.forEach((pointName) => {
      const stopoverPointElem = getStopoverPointElem({
        googleMaps: this.googleMaps,
        coord: fromPointToLatLng({
          map: this.map,
          points: [stopoverPoints[pointName].coord],
        })[0],
        color: 'red',
      });

      stopovers[pointName].coord = stopoverPoints[pointName].coord;
      stopovers[pointName].mapElements.stopoverPointElem = stopoverPointElem;
    });

    return stopovers;
  }

  /*
  *   удаление даных о элементах stopoverPoints, удаление элемента с карты
  */

  removeStopoverStructure() {
    this.render({
      action: 'remove',
      elements: [
        this.stopoverPoints.A.mapElements.stopoverPointElem,
        this.stopoverPoints.B.mapElements.stopoverPointElem,
      ],
    });
    this.stopoverPoints = null;
  }

  /*
  *   сохранение данных на сервере
  */

  sendToServer({ url }) {
    const promise = new Promise((resolve) => {
      const userData = packagingDataPassenger({
        userName: this.userData.userName,
        points: this.points,
        map: this.map,
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

  searchStopover({ url }) {
    if (this.inSearchStopoverProcess) return;
    if (!this.points.A.mapElements || !this.points.B.mapElements) return;

    this.inSearchStopoverProcess = true;

    this.sendToServer({ url })
      .then((driverData) => {
        this.inSearchStopoverProcess = false;
        if (this.isDestroy) return;

        if (driverData === 'matches was not found') return;

        this.stopoverPoints = this.crateStopoverStructure({
          stopoverPoints: driverData.stopoverPoints,
        });

        this.render({
          action: 'add',
          elements: [
            this.stopoverPoints.A.mapElements.stopoverPointElem,
            this.stopoverPoints.B.mapElements.stopoverPointElem,
          ],
        });
      });
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
  *   оработка данных с сервера(сохранение в объекте, рендеринг)
  */

  initUserData() {
    if (!this.userData.passenger || !this.userData.passenger) {
      return;
    }
    if (this.userData.passenger.points.A.coord && this.userData.passenger.points.B.coord) {
      const pointsName = ['A', 'B'];

      pointsName.forEach((pointName) => {
        const pointStructure = this.createPointStructure({ // сделать проверку наличия данных
          coord: fromPointToLatLng({
            map: this.map,
            points: [this.userData.passenger.points[pointName].coord],
          })[0],
          pointName,
          radius: this.userData.passenger.points[pointName].radius,
        });

        this.points[pointName] = pointStructure;

        this.addEvents({
          pointName,
          markerPointElem: pointStructure.mapElements.markerPointElem,
          circlePointElem: pointStructure.mapElements.circlePointElem,
        });

        this.render({
          action: 'add',
          elements: [
            pointStructure.mapElements.markerPointElem,
            pointStructure.mapElements.circlePointElem,
          ],
        });
      });
    }
  }

  /*
  *   удаление элементов с карты, удаление данных, отписка от всех событий
  */

  destroy() {
    const pointsName = Object.keys(this.points);

    pointsName.forEach((pointName) => {
      if (objIsEmpty(this.points[pointName])) return;

      this.render({
        action: 'remove',
        elements: [
          this.points[pointName].mapElements.markerPointElem,
          this.points[pointName].mapElements.circlePointElem,
        ],
      });
      this.points[pointName] = {};
    });

    if (this.stopoverPoints) this.removeStopoverStructure();

    this.googleMaps.event.clearInstanceListeners(this.map);
    PubSub.unsubscribe(this.subscribe.destroyMap);
    PubSub.unsubscribe(this.subscribe.initUserDataMap);
    PubSub.unsubscribe(this.subscribe.searchStopover);

    this.isDestroy = true;
  }
}
