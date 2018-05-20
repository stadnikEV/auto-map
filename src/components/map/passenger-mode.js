const httpRequest = require('../../services/http-request');
const definePointName = require('./util/define-point-name');
const packagingDataPassenger = require('./util/packaging-data-passenger');
const getMarkerPassenger = require('./util/get-marker-passenger');
const getCircle = require('./util/get-circle');
const removeElementFromMap = require('./util/remove-element-from-map');
const getLatLng = require('./util/get-lat-lng');


class PassengerMode {
  constructor({ googleMaps, map, userData }) {
    this._googleMaps = googleMaps;
    this._map = map;
    this._userData = userData;

    this._points = {};
    this._map.addListener('click', this._onClick.bind(this));

    // если с сервера пришли данные о координатах точек, добавить их на карту
    if (this._userData.passenger) {
      this._renderUserData();
    }
  }

  _onClick(e) {
    if (this._points.A && this._points.B) return;

    const pointName = definePointName({ points: this._points });

    if (!pointName) return;

    const clickCoord = getLatLng(e.latLng);

    this._createPoint({
      coord: clickCoord,
      pointName,
    });

    // если есть обе точки, упаковать и сохранить данные на сервере
    if (this._points.A && this._points.B) {
      this._saveData();
    }
  }


  _createPoint({ pointName, coord }) {
    // создать точку
    this._points[pointName] = this._getPoint({
      googleMaps: this._googleMaps,
      pointName,
      coord,
    });
    // добавить точки на карту
    this._points[pointName].circle.setMap(this._map);
    this._points[pointName].marker.setMap(this._map);

    this._points[pointName].circle.addListener('click', this._removePoint.bind(this, { pointName }));
    this._points[pointName].marker.addListener('click', this._removePoint.bind(this, { pointName }));
  }


  _getPoint({ pointName, coord }) {
    const point = {};
    const circle = getCircle({
      googleMaps: this._googleMaps,
      center: coord,
      radius: 1000,
    });

    const marker = getMarkerPassenger({
      googleMaps: this._googleMaps,
      coord,
      label: pointName,
    });

    point.circle = circle;
    point.marker = marker;

    return point;
  }


  _removePoint({ pointName }) {
    const keys = Object.keys(this._points[pointName]);

    for (let i = 0; i < keys.length; i += 1) {
      const element = this._points[pointName][keys[i]];
      removeElementFromMap({
        googleMaps: this._googleMaps,
        element,
      });
    }
    this._points[pointName] = null;
  }


  _saveData() {
    const userData = packagingDataPassenger({
      userName: this._userData.userName,
      points: this._points,
    });

    httpRequest({
      url: './passenger/save-data',
      data: userData,
    })
      .then((response) => {
        console.log('save data:', response);
      });
  }


  _renderUserData() {
    const obj = this._userData.passenger;
    const keys = Object.keys(obj);

    keys.forEach((i) => {
      // создать точку
      this._createPoint({
        pointName: i,
        coord: {
          lat: this._userData.passenger[i].lat,
          lng: this._userData.passenger[i].lng,
        },
      });
    });
  }
}

module.exports = PassengerMode;
