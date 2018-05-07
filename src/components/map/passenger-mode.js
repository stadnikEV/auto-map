const getClickCoord = require('./util/get-click-coord');
const definePointName = require('./util/define-point-name');
const addElementsToMap = require('./util/add-elements-to-map');
const packagingDataPassenger = require('./util/packaging-data-passenger');
const createPoint = require('./util/create-point');
const removePoint = require('./util/remove-point');
const httpRequest = require('../../services/http-request');


class MapPassenger {
  constructor({ googleMaps, map, userData }) {
    this._googleMaps = googleMaps;
    this._map = map;
    this._userData = userData;

    this._points = {};
    this._map.addListener('click', this._onClick.bind(this));

    // если с сервера пришли данные о координатах точек, добавить их на карту

    if (this._userData.passenger) {
      const obj = this._userData.passenger;
      const keys = Object.keys(obj);

      keys.forEach((i) => {
        // создать точку
        this._points[i] = createPoint.call(this, {
          pointName: i,
          coord: {
            lat: this._userData.passenger[i].lat,
            lng: this._userData.passenger[i].lng,
          },
        });
        // добавить точку на карту
        addElementsToMap.call(this, {
          elements: [
            this._points[i].circle,
            this._points[i].marker,
          ],
        });
        this._points[i].circle.addListener('click', removePoint.bind(this, { pointName: i }));
      });
    }
  }

  _onClick(e) {
    if (this._points.A && this._points.B) return;

    const pointName = definePointName({ points: this._points });

    if (!pointName) return;

    const clickCoord = getClickCoord(e);
    // создать точку
    this._points[pointName] = createPoint.call(this, {
      pointName,
      coord: clickCoord,
    });
    // добавить точку на карту
    addElementsToMap.call(this, {
      elements: [
        this._points[pointName].circle,
        this._points[pointName].marker,
      ],
    });

    this._points[pointName].circle.addListener('click', removePoint.bind(this, { pointName }));

    // если есть обе точки, отправить данные на сервер
    if (this._points.A && this._points.B) {
      const userData = packagingDataPassenger({
        userName: this._userData.userName,
        points: this._points,
      });
      this._searchStart(userData);
    }
  }


  _searchStart(data) {
    httpRequest({
      url: './passenger',
      data,
    })
      .then((response) => {
        console.log(response);
      });
    this.a = null;
  }
}

module.exports = MapPassenger;
