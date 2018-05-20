const definePointName = require('./util/define-point-name');
const getRoute = require('./util/get-route');
const getMarkerDriver = require('./util/get-marker-driver');
const removeElementFromMap = require('./util/remove-element-from-map');
const getPolilinePoints = require('./util/get-poliline-points');
const getLatLng = require('./util/get-lat-lng');
const getMarkerWayPoint = require('./util/get-marker-way-point');
const getClosestPointOnPoliline = require('./util/get-closest-point-on-poliline');
const fromLatLngToPoint = require('./util/from-latLng-to-point');
const fromPointToLatLng = require('./util/from-point-to-latLng');


class DriverMod {
  constructor({ googleMaps, map, userData }) {
    this._googleMaps = googleMaps;
    this._map = map;
    this._userData = userData;

    this._points = {};
    this._waypoints = [];
    this._map.addListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    // если нет какой то из точек или обеих, добавить точку
    if (!this._points.A || !this._points.B) {
      const pointName = definePointName({ points: this._points });

      // создать точку
      this._createPoint({
        pointName,
        coord: e.latLng,
      });
      this._points[pointName].marker.addListener('click', () => {
        this._removePoint.call(this, { pointName });
        if (this._poliline) {
          this._poliline.setMap(null);
          this._poliline = null;
        }
      });

      // если есть обе точки "A" и "B", создать маршрут
      if (this._points.A && this._points.B) {
        this._createRoute({ points: this._points })
          .then(() => {
            this._changePositionOfPoints();
          });
        return;
      }
    }

    // если есть обе точки "A" и "B", добавить wayPoint
    if (this._points.A && this._points.B) {
      if (this._waypoints.length >= 23) {
        return;
      }

      const poliline = this._poliline;

      this._waypoints.push({
        location: e.latLng,
        stopover: false,
      });

      this._createRoute({
        points: this._points,
        waypoints: this._waypoints,
      }).then(() => {
        poliline.setMap(null);
        this._createWayPoint({ coord: e.latLng });
      })
        .catch(() => {

        });
    }
  }


  _createWayPoint({ coord }) {
    const pointCoord = fromLatLngToPoint({
      map: this._map,
      points: [coord],
    });
    const polilineCoord = fromLatLngToPoint({
      map: this._map,
      points: this._polilinePoints,
    });

    const closestPointCoordOnPoliline = getClosestPointOnPoliline({
      point: pointCoord[0],
      poliline: polilineCoord,
    });
    console.log(closestPointCoordOnPoliline);

    const wayPoint = getMarkerWayPoint({
      googleMaps: this._googleMaps,
      map: this._map,
      coord: fromPointToLatLng({
        map: this._map,
        points: [closestPointCoordOnPoliline],
      })[0],
    });

    wayPoint.setMap(this._map);
    wayPoint.addListener('click', () => {
      wayPoint.setMap(null);
    });
  }

  _createRoute({ points, waypoints }) {
    const promise = new Promise((resolve, reject) => {
      getRoute({
        googleMaps: this._googleMaps,
        map: this._map,
        start: points.A.marker.position,
        end: points.B.marker.position,
        waypoints,
      })
        .then((response) => {
          this._createPoliline({ route: response });
          this._route = response;
          resolve(response);
        })
        .catch((status) => {
          console.warn(status);
          reject(status);
        });
    });
    return promise;
  }

  _createPoint({ pointName, coord }) {
    // создать точку
    this._points[pointName] = {};
    this._points[pointName].marker = getMarkerDriver({
      googleMaps: this._googleMaps,
      pointName,
      coord,
      label: pointName,
    });

    // добавить точку на карту
    this._points[pointName].marker.setMap(this._map);
  }

  _createPoliline({ route }) {
    // получить массив точек с координатами для poliline
    this._polilinePoints = getPolilinePoints({
      route,
    });
    // создать poliline
    this._poliline = new this._googleMaps.Polyline({
      path: this._polilinePoints,
      strokeColor: 'blue',
      strokeOpacity: 0.5,
      strokeWeight: 5,
      editable: false,
    });
    // добавить poliline на карту
    this._poliline.setMap(this._map);
  }


  _removePoint({ pointName }) { // лучше удаль элемент отдельно
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

  _changePositionOfPoints() {
    const polilineCoordA = getLatLng(this._polilinePoints[0]);
    const pointCoordA = getLatLng(this._points.A.marker.position);
    // если координата точки A не равна координате первой точки poliline, изменить координаты точки A
    if (polilineCoordA.lat !== pointCoordA.lat) {
      this._points.A.marker.setPosition(polilineCoordA);
    }

    const polilineCoordB = getLatLng(this._polilinePoints[this._polilinePoints.length - 1]);
    const pointCoordB = getLatLng(this._points.B.marker.position);
    // если координата точки B не равна координате последней точки poliline, изменить координаты точки B
    if (polilineCoordB.lat !== pointCoordB.lat) {
      this._points.B.marker.setPosition(polilineCoordB);
    }
  }
}

module.exports = DriverMod;
