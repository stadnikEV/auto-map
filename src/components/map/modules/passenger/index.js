import PubSub from 'pubsub-js';
import simbiozApi from 'simbioz-api/driver-api';
import isObjEmpty from 'utils/is-obj-empty';
import definePointName from 'components/__shared/map-modules/define-point-name';
import fromPointToLatLng from 'components/__shared/map-modules/from-point-to-latLng';
import getCircleRadiusWorldCoord from 'components/__shared/map-modules/get-circle-radius-world-coord';
import getStopoverPointElem from 'components/__shared/map-modules/get-stopover-point-elem';
import packagingDataPassenger from './packaging-data-passenger';
import getMarkerPointElem from './get-marker-point-elem';
import getCirclePointElem from './get-circle-point-elem';


export default class PassengerMode {
  // constructor({ googleMaps, map, userData }) {
  constructor({ googleMaps, map }) {
    this.subscribe = {};
    this.googleMaps = googleMaps;
    this.map = map;

    this.points = {
      A: {},
      B: {},
    };

    this.init();

    // this.subscribe.destroyMap = PubSub.subscribe('destroyMap', this.destroy.bind(this));
    // this.subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this.initUserData.bind(this));
    // this.subscribe.searchStopover = PubSub.subscribe('searchStopover', this.searchStopover.bind(this, { url: './passenger/start-search' }));
  }

  init() {
    this.map.addListener('click', this.onClickMap.bind(this));
    this.initMapData();
  }


  onClickMap(e) {
    if (this.changedRadiusElem) {
      this.resetCircleEdit();
    }
    if (this.points.A.mapElements && this.points.B.mapElements) return;

    const pointName = definePointName({ points: this.points });

    if (!pointName) return;

    this.points[pointName] = this.createPointStructure({
      coord: e.latLng,
      pointName,
      radius: 1000,
    });

    const { circlePointElem } = this.points[pointName].mapElements;
    circlePointElem.setEditable(true);
    this.changedRadiusElem = circlePointElem;

    // если есть обе точки, упаковать и сохранить данные на сервере
    if (this.points.A.mapElements && this.points.B.mapElements) {
      this.saveMapData();
    }
  }

  onClickMarker() {
    if (!this.changedRadiusElem) {
      return;
    }
    this.resetCircleEdit();
  }

  onClickCircle({ circlePointElem }) {
    if (this.changedRadiusElem) {
      this.resetCircleEdit();
      return;
    }
    circlePointElem.setEditable(true);
    this.changedRadiusElem = circlePointElem;
  }

  onBblclickMarker(pointName) {
    this.removePointStructure({ pointName });

    if (this.stopoverPoints) this.removeStopoverStructure();

    if (!this.points.A.mapElements && !this.points.B.mapElements) {
      this.saveMapData();
    }
  }

  onDragStart(pointName) {
    this.points[pointName].mapElements.circlePointElem.setVisible(false);
  }

  onDragEnd(pointName) {
    const marker = this.points[pointName].mapElements.markerPointElem;
    const circle = this.points[pointName].mapElements.circlePointElem;
    const position = marker.getPosition();
    circle.setVisible(true);
    circle.setCenter(position);
    if (this.changedRadiusElem) {
      this.resetCircleEdit();
    }
    if (this.points.A.coord
    && this.points.B.coord) {
      this.saveMapData();
    }
  }

  onRadiusChanged(pointName) {
    this.resetCircleEdit();
    const circleElem = this.points[pointName].mapElements.circlePointElem;

    this.points[pointName].radius = circleElem.getRadius();
    this.points[pointName].radiusWorldCoord = getCircleRadiusWorldCoord({
      googleMaps: this.googleMaps,
      map: this.map,
      circleElem,
    });

    if (this.points.A.coord
    && this.points.B.coord) {
      this.saveMapData();
    }
  }

  resetCircleEdit() {
    this.changedRadiusElem.setEditable(false);
    this.changedRadiusElem = null;
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

    this.render({
      action: 'add',
      elements: [
        markerPointElem,
        circlePointElem,
      ],
    });

    markerPointElem.addListener('dblclick', this.onBblclickMarker.bind(this, pointName));
    markerPointElem.addListener('click', this.onClickMarker.bind(this));
    markerPointElem.addListener('dragstart', this.onDragStart.bind(this, pointName));
    markerPointElem.addListener('dragend', this.onDragEnd.bind(this, pointName));
    circlePointElem.addListener('radius_changed', this.onRadiusChanged.bind(this, pointName));
    circlePointElem.addListener('click', this.onClickCircle.bind(this, { circlePointElem }));

    return point;
  }

  removePointStructure({ pointName }) {
    if (this.changedRadiusElem) {
      this.resetCircleEdit();
      return;
    }
    this.render({
      action: 'remove',
      elements: [
        this.points[pointName].mapElements.markerPointElem,
        this.points[pointName].mapElements.circlePointElem,
      ],
    });

    this.points[pointName] = {};
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

  saveMapData() {
    const promise = new Promise((resolve) => {
      const userData = packagingDataPassenger({
        points: this.points,
        map: this.map,
      });
      console.log(userData);
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

  searchStopover() {
    if (this.inSearchStopoverProcess) return;
    if (!this.points.A.mapElements || !this.points.B.mapElements) return;

    this.inSearchStopoverProcess = true;

    this.saveMapData()
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

  initMapData() {
    simbiozApi.getMapData()
      .then((data) => {
        if (isObjEmpty(data.points.A.coord) || isObjEmpty(data.points.B.coord)) {
          return;
        }
        const pointsName = ['A', 'B'];

        pointsName.forEach((pointName) => {
          console.log(data);
          this.points[pointName] = this.createPointStructure({ // сделать проверку наличия данных
            coord: fromPointToLatLng({
              map: this.map,
              points: [data.points[pointName].coord],
            })[0],
            pointName,
            radius: data.points[pointName].radius,
          });
        });
      });
  }

  /*
  *   удаление элементов с карты, удаление данных, отписка от всех событий
  */

  destroy() {
    const pointsName = Object.keys(this.points);

    pointsName.forEach((pointName) => {
      if (isObjEmpty(this.points[pointName])) return;

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
  }
}
