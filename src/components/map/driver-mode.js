const getClickCoord = require('./util/get-click-coord');
const getElemCoord = require('./util/get-elem-coord');
const definePointName = require('./util/define-point-name');
const addElementsToMap = require('./util/add-elements-to-map');
const getRoute = require('./util/get-route');
const createMarkerDriver = require('./util/create-marker-driver');
const removePoint = require('./util/remove-point');
const getPolilinePoints = require('./util/get-poliline-points');


class DriverMod {
  constructor({ googleMaps, map, userData }) {
    this._googleMaps = googleMaps;
    this._map = map;

    this._userData = userData;

    this._points = {};

    this._map.addListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    if (this._points.A && this._points.B) return;

    const pointName = definePointName({ points: this._points });

    if (!pointName) return;

    const clickCoord = getClickCoord(e);

    // создать точку
    this._points[pointName] = createMarkerDriver({
      googleMaps: this._googleMaps,
      pointName,
      coord: clickCoord,
      label: pointName,
    });
    // добавить точку на карту
    addElementsToMap({
      map: this._map,
      elements: [
        this._points[pointName].marker,
      ],
    });

    this._points[pointName].marker.addListener('click', removePoint.bind(this, { pointName }));

    // если есть обе точки
    if (this._points.A && this._points.B) {
      // получить расчитанный маршрут
      getRoute({
        googleMaps: this._googleMaps,
        map: this._map,
        start: getElemCoord(this._points.A.marker),
        end: getElemCoord(this._points.B.marker),
      }).then((response) => {
        this._route = response;
        // получить массив точек с координатами для poliline
        this._polilinePoints = getPolilinePoints({
          route: this._route,
        });
        // создать poliline
        this._poliline = new this._googleMaps.Polyline({
          path: this._polilinePoints,
          strokeColor: 'blue',
          strokeOpacity: 0.5,
          strokeWeight: 5,
        });

        removePoint.call(this, { pointName: 'A' });
        removePoint.call(this, { pointName: 'B' });

        // создать точку
        this._points.A = createMarkerDriver({
          googleMaps: this._googleMaps,
          pointName,
          coord: this._polilinePoints[0],
          label: 'A',
        });
        // создать точку
        this._points.B = createMarkerDriver({
          googleMaps: this._googleMaps,
          pointName,
          coord: this._polilinePoints[this._polilinePoints.length - 1],
          label: 'B',
        });
        // добавить точку на карту
        addElementsToMap({
          map: this._map,
          elements: [
            this._points.A.marker,
          ],
        });
        addElementsToMap({
          map: this._map,
          elements: [
            this._points.B.marker,
          ],
        });

        this._poliline.setMap(this._map);

        this._points.A.marker.addListener('click', () => {
          removePoint.call(this, { pointName: 'A' });
          this._poliline.setMap(null);
        });
        this._points.B.marker.addListener('click', () => {
          removePoint.call(this, { pointName: 'B' });
          this._poliline.setMap(null);
        });
      });
    }
  }
}

module.exports = DriverMod;
