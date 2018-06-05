webpackJsonp([1],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

const PubSub = __webpack_require__(1);
const httpRequest = __webpack_require__(0);
const packagingDataPassenger = __webpack_require__(26);
const getMarkerPointElem = __webpack_require__(27);
const getCirclePointElem = __webpack_require__(28);
// const removeElementFromMap = require('../util/remove-element-from-map');
// const getLatLng = require('../util/get-lat-lng');
const definePointName = __webpack_require__(23);
const fromPointToLatLng = __webpack_require__(22);


class PassengerMode {
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
  }

  _onClickMap(e) {
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
      this._saveUserData();
    }
  }


  _createPointElem({ pointName, coord, radius }) {
    const point = {
      coord,
      radius,
      mapElements: {},
    };

    const markerPointElem = getMarkerPointElem({
      googleMaps: this._googleMaps,
      coord,
      label: pointName,
    });

    const circlePointElem = getCirclePointElem({
      googleMaps: this._googleMaps,
      center: coord,
      radius,
    });

    point.mapElements.markerPointElem = markerPointElem;
    point.mapElements.circlePointElem = circlePointElem;
    this._points[pointName] = point;

    this._render({
      action: 'add',
      elements: [
        markerPointElem,
        circlePointElem,
      ],
    });

    markerPointElem.addListener('click', this._onClickPoint.bind(this, pointName));
    circlePointElem.addListener('click', this._onClickPoint.bind(this, pointName));
  }


  _onClickPoint(pointName) {
    this._removePointElem({ pointName });

    if (!this._points.A.mapElements && !this._points.B.mapElements) {
      this._saveUserData();
    }
  }

  _removePointElem({ pointName }) {
    this._render({
      action: 'remove',
      elements: [
        this._points[pointName].mapElements.markerPointElem,
        this._points[pointName].mapElements.circlePointElem,
      ],
    });
    this._points[pointName] = {};
  }


  _saveUserData() {
    const userData = packagingDataPassenger({
      userName: this._userData.userName,
      points: this._points,
      map: this._map,
    });

    httpRequest({
      url: './passenger/save-data',
      data: userData,
    })
      .then((response) => {
        console.log('save data status:', response);
      });
  }


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
  }
}

module.exports = PassengerMode;


/***/ }),

/***/ 21:
/***/ (function(module, exports) {


const fromLatLngToPoint = ({ map, points }) => {
  const convertingPoints = [];
  points.forEach((point) => {
    convertingPoints.push(map.getProjection().fromLatLngToPoint(point));
  });
  return convertingPoints;
};

module.exports = fromLatLngToPoint;


/***/ }),

/***/ 22:
/***/ (function(module, exports) {


const fromPointToLatLng = ({ map, points }) => {
  const convertingPoints = [];
  points.forEach((point) => {
    convertingPoints.push(map.getProjection().fromPointToLatLng(point));
  });
  return convertingPoints;
};

module.exports = fromPointToLatLng;


/***/ }),

/***/ 23:
/***/ (function(module, exports) {


const definePoint = ({ points }) => {
  if (!points.A.mapElements) {
    return 'A';
  }
  if (points.A.mapElements && !points.B.mapElements) {
    return 'B';
  }
  return null;
};

module.exports = definePoint;


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

const fromLatLngToPoint = __webpack_require__(21);

const packagingDataPassenger = ({ userName, points, map }) => {
  const data = {};
  data.userName = userName;
  data.passenger = {
    points: {
      A: {},
      B: {},
    },
  };

  if (points.A.coord && points.B.coord) {
    [data.passenger.points.A.coord] = fromLatLngToPoint({
      map,
      points: [points.A.coord],
    });
    [data.passenger.points.B.coord] = fromLatLngToPoint({
      map,
      points: [points.B.coord],
    });
    data.passenger.points.A.radius = points.A.radius;
    data.passenger.points.B.radius = points.B.radius;
  }

  return data;
};

module.exports = packagingDataPassenger;


/***/ }),

/***/ 27:
/***/ (function(module, exports) {


const getMarkerPointElem = ({
  googleMaps,
  map,
  coord,
  label,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    map,
    label: {
      fontSize: '20px',
      color: '#00AAFF',
      text: label,
    },
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: 'white',
      strokeWeight: 1,
      fillColor: 'white',
      fillOpacity: 0.9,
      scale: 15,
    },
  });

  return marker;
};

module.exports = getMarkerPointElem;


/***/ }),

/***/ 28:
/***/ (function(module, exports) {


const getCirclePointElem = ({
  googleMaps,
  center,
  radius,
}) => {
  const circleOptions = {
    center,
    radius,
    fillColor: '#00AAFF',
    fillOpacity: 0.5,
    strokeColor: 'white',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: true,
  };
  const circle = new googleMaps.Circle(circleOptions);

  return circle;
};

module.exports = getCirclePointElem;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvcGFzc2VuZ2VyLW1vZGUvcGFzc2VuZ2VyLW1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZnJvbS1sYXRMbmctdG8tcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZnJvbS1wb2ludC10by1sYXRMbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZGVmaW5lLXBvaW50LW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3Bhc3Nlbmdlci1tb2RlL3V0aWwvcGFja2FnaW5nLWRhdGEtcGFzc2VuZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC9wYXNzZW5nZXItbW9kZS91dGlsL2dldC1tYXJrZXItcG9pbnQtZWxlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvcGFzc2VuZ2VyLW1vZGUvdXRpbC9nZXQtY2lyY2xlLXBvaW50LWVsZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHViU3ViID0gcmVxdWlyZSgncHVic3ViLWpzJyk7XG5jb25zdCBodHRwUmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NlcnZpY2VzL2h0dHAtcmVxdWVzdCcpO1xuY29uc3QgcGFja2FnaW5nRGF0YVBhc3NlbmdlciA9IHJlcXVpcmUoJy4vdXRpbC9wYWNrYWdpbmctZGF0YS1wYXNzZW5nZXInKTtcbmNvbnN0IGdldE1hcmtlclBvaW50RWxlbSA9IHJlcXVpcmUoJy4vdXRpbC9nZXQtbWFya2VyLXBvaW50LWVsZW0nKTtcbmNvbnN0IGdldENpcmNsZVBvaW50RWxlbSA9IHJlcXVpcmUoJy4vdXRpbC9nZXQtY2lyY2xlLXBvaW50LWVsZW0nKTtcbi8vIGNvbnN0IHJlbW92ZUVsZW1lbnRGcm9tTWFwID0gcmVxdWlyZSgnLi4vdXRpbC9yZW1vdmUtZWxlbWVudC1mcm9tLW1hcCcpO1xuLy8gY29uc3QgZ2V0TGF0TG5nID0gcmVxdWlyZSgnLi4vdXRpbC9nZXQtbGF0LWxuZycpO1xuY29uc3QgZGVmaW5lUG9pbnROYW1lID0gcmVxdWlyZSgnLi4vdXRpbC9kZWZpbmUtcG9pbnQtbmFtZScpO1xuY29uc3QgZnJvbVBvaW50VG9MYXRMbmcgPSByZXF1aXJlKCcuLi91dGlsL2Zyb20tcG9pbnQtdG8tbGF0TG5nJyk7XG5cblxuY2xhc3MgUGFzc2VuZ2VyTW9kZSB7XG4gIGNvbnN0cnVjdG9yKHsgZ29vZ2xlTWFwcywgbWFwLCB1c2VyRGF0YSB9KSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlID0ge307XG4gICAgdGhpcy5fZ29vZ2xlTWFwcyA9IGdvb2dsZU1hcHM7XG4gICAgdGhpcy5fbWFwID0gbWFwO1xuICAgIHRoaXMuX3VzZXJEYXRhID0gdXNlckRhdGE7XG5cbiAgICB0aGlzLl9wb2ludHMgPSB7XG4gICAgICBBOiB7fSxcbiAgICAgIEI6IHt9LFxuICAgIH07XG5cbiAgICB0aGlzLl9tYXAuYWRkTGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGlja01hcC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuX3N1YnNjcmliZS5kZXN0cm95TWFwID0gUHViU3ViLnN1YnNjcmliZSgnZGVzdHJveU1hcCcsIHRoaXMuX2Rlc3Ryb3kuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fc3Vic2NyaWJlLmluaXRVc2VyRGF0YU1hcCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2luaXRVc2VyRGF0YU1hcCcsIHRoaXMuX2luaXRVc2VyRGF0YS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9vbkNsaWNrTWFwKGUpIHtcbiAgICBpZiAodGhpcy5fcG9pbnRzLkEubWFwRWxlbWVudHMgJiYgdGhpcy5fcG9pbnRzLkIubWFwRWxlbWVudHMpIHJldHVybjtcblxuICAgIGNvbnN0IHBvaW50TmFtZSA9IGRlZmluZVBvaW50TmFtZSh7IHBvaW50czogdGhpcy5fcG9pbnRzIH0pO1xuXG4gICAgaWYgKCFwb2ludE5hbWUpIHJldHVybjtcblxuICAgIHRoaXMuX2NyZWF0ZVBvaW50RWxlbSh7XG4gICAgICBjb29yZDogZS5sYXRMbmcsXG4gICAgICBwb2ludE5hbWUsXG4gICAgICByYWRpdXM6IDEwMDAsXG4gICAgfSk7XG5cbiAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQvtCx0LUg0YLQvtGH0LrQuCwg0YPQv9Cw0LrQvtCy0LDRgtGMINC4INGB0L7RhdGA0LDQvdC40YLRjCDQtNCw0L3QvdGL0LUg0L3QsCDRgdC10YDQstC10YDQtVxuICAgIGlmICh0aGlzLl9wb2ludHMuQS5tYXBFbGVtZW50cyAmJiB0aGlzLl9wb2ludHMuQi5tYXBFbGVtZW50cykge1xuICAgICAgdGhpcy5fc2F2ZVVzZXJEYXRhKCk7XG4gICAgfVxuICB9XG5cblxuICBfY3JlYXRlUG9pbnRFbGVtKHsgcG9pbnROYW1lLCBjb29yZCwgcmFkaXVzIH0pIHtcbiAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgIGNvb3JkLFxuICAgICAgcmFkaXVzLFxuICAgICAgbWFwRWxlbWVudHM6IHt9LFxuICAgIH07XG5cbiAgICBjb25zdCBtYXJrZXJQb2ludEVsZW0gPSBnZXRNYXJrZXJQb2ludEVsZW0oe1xuICAgICAgZ29vZ2xlTWFwczogdGhpcy5fZ29vZ2xlTWFwcyxcbiAgICAgIGNvb3JkLFxuICAgICAgbGFiZWw6IHBvaW50TmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNpcmNsZVBvaW50RWxlbSA9IGdldENpcmNsZVBvaW50RWxlbSh7XG4gICAgICBnb29nbGVNYXBzOiB0aGlzLl9nb29nbGVNYXBzLFxuICAgICAgY2VudGVyOiBjb29yZCxcbiAgICAgIHJhZGl1cyxcbiAgICB9KTtcblxuICAgIHBvaW50Lm1hcEVsZW1lbnRzLm1hcmtlclBvaW50RWxlbSA9IG1hcmtlclBvaW50RWxlbTtcbiAgICBwb2ludC5tYXBFbGVtZW50cy5jaXJjbGVQb2ludEVsZW0gPSBjaXJjbGVQb2ludEVsZW07XG4gICAgdGhpcy5fcG9pbnRzW3BvaW50TmFtZV0gPSBwb2ludDtcblxuICAgIHRoaXMuX3JlbmRlcih7XG4gICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgbWFya2VyUG9pbnRFbGVtLFxuICAgICAgICBjaXJjbGVQb2ludEVsZW0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgbWFya2VyUG9pbnRFbGVtLmFkZExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2tQb2ludC5iaW5kKHRoaXMsIHBvaW50TmFtZSkpO1xuICAgIGNpcmNsZVBvaW50RWxlbS5hZGRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrUG9pbnQuYmluZCh0aGlzLCBwb2ludE5hbWUpKTtcbiAgfVxuXG5cbiAgX29uQ2xpY2tQb2ludChwb2ludE5hbWUpIHtcbiAgICB0aGlzLl9yZW1vdmVQb2ludEVsZW0oeyBwb2ludE5hbWUgfSk7XG5cbiAgICBpZiAoIXRoaXMuX3BvaW50cy5BLm1hcEVsZW1lbnRzICYmICF0aGlzLl9wb2ludHMuQi5tYXBFbGVtZW50cykge1xuICAgICAgdGhpcy5fc2F2ZVVzZXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgX3JlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZSB9KSB7XG4gICAgdGhpcy5fcmVuZGVyKHtcbiAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgICBlbGVtZW50czogW1xuICAgICAgICB0aGlzLl9wb2ludHNbcG9pbnROYW1lXS5tYXBFbGVtZW50cy5tYXJrZXJQb2ludEVsZW0sXG4gICAgICAgIHRoaXMuX3BvaW50c1twb2ludE5hbWVdLm1hcEVsZW1lbnRzLmNpcmNsZVBvaW50RWxlbSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgdGhpcy5fcG9pbnRzW3BvaW50TmFtZV0gPSB7fTtcbiAgfVxuXG5cbiAgX3NhdmVVc2VyRGF0YSgpIHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHBhY2thZ2luZ0RhdGFQYXNzZW5nZXIoe1xuICAgICAgdXNlck5hbWU6IHRoaXMuX3VzZXJEYXRhLnVzZXJOYW1lLFxuICAgICAgcG9pbnRzOiB0aGlzLl9wb2ludHMsXG4gICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICB9KTtcblxuICAgIGh0dHBSZXF1ZXN0KHtcbiAgICAgIHVybDogJy4vcGFzc2VuZ2VyL3NhdmUtZGF0YScsXG4gICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIGRhdGEgc3RhdHVzOicsIHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBfcmVuZGVyKHsgZWxlbWVudHMsIGFjdGlvbiB9KSB7XG4gICAgbGV0IGFjdGlvbkZ1bmN0aW9uO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgIGFjdGlvbkZ1bmN0aW9uID0gKHsgbWFwRWxlbWVudCB9KSA9PiB7XG4gICAgICAgIG1hcEVsZW1lbnQuc2V0TWFwKHRoaXMuX21hcCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgYWN0aW9uRnVuY3Rpb24gPSAoeyBtYXBFbGVtZW50IH0pID0+IHtcbiAgICAgICAgbWFwRWxlbWVudC5zZXRNYXAobnVsbCk7XG4gICAgICAgIHRoaXMuX2dvb2dsZU1hcHMuZXZlbnQuY2xlYXJJbnN0YW5jZUxpc3RlbmVycyhtYXBFbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFhY3Rpb25GdW5jdGlvbikgcmV0dXJuO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgobWFwRWxlbWVudCkgPT4ge1xuICAgICAgYWN0aW9uRnVuY3Rpb24oeyBtYXBFbGVtZW50IH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBfaW5pdFVzZXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5fdXNlckRhdGEucGFzc2VuZ2VyIHx8ICF0aGlzLl91c2VyRGF0YS5wYXNzZW5nZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJEYXRhLnBhc3Nlbmdlci5wb2ludHMuQS5jb29yZCAmJiB0aGlzLl91c2VyRGF0YS5wYXNzZW5nZXIucG9pbnRzLkIuY29vcmQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBvaW50RWxlbSh7IC8vINGB0LTQtdC70LDRgtGMINC/0YDQvtCy0LXRgNC60YMg0L3QsNC70LjRh9C40Y8g0LTQsNC90L3Ri9GFXG4gICAgICAgIGNvb3JkOiBmcm9tUG9pbnRUb0xhdExuZyh7XG4gICAgICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgICAgICAgcG9pbnRzOiBbdGhpcy5fdXNlckRhdGEucGFzc2VuZ2VyLnBvaW50cy5BLmNvb3JkXSxcbiAgICAgICAgfSlbMF0sXG4gICAgICAgIHBvaW50TmFtZTogJ0EnLFxuICAgICAgICByYWRpdXM6IHRoaXMuX3VzZXJEYXRhLnBhc3Nlbmdlci5wb2ludHMuQS5yYWRpdXMsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fY3JlYXRlUG9pbnRFbGVtKHtcbiAgICAgICAgY29vcmQ6IGZyb21Qb2ludFRvTGF0TG5nKHtcbiAgICAgICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICAgICAgICBwb2ludHM6IFt0aGlzLl91c2VyRGF0YS5wYXNzZW5nZXIucG9pbnRzLkIuY29vcmRdLFxuICAgICAgICB9KVswXSxcbiAgICAgICAgcG9pbnROYW1lOiAnQicsXG4gICAgICAgIHJhZGl1czogdGhpcy5fdXNlckRhdGEucGFzc2VuZ2VyLnBvaW50cy5CLnJhZGl1cyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgX2Rlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3BvaW50cy5BLm1hcEVsZW1lbnRzKSB7XG4gICAgICB0aGlzLl9yZW1vdmVQb2ludEVsZW0oeyBwb2ludE5hbWU6ICdBJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvaW50cy5CLm1hcEVsZW1lbnRzKSB7XG4gICAgICB0aGlzLl9yZW1vdmVQb2ludEVsZW0oeyBwb2ludE5hbWU6ICdCJyB9KTtcbiAgICB9XG4gICAgdGhpcy5fZ29vZ2xlTWFwcy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKHRoaXMuX21hcCk7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMuX3N1YnNjcmliZS5kZXN0cm95TWFwKTtcbiAgICBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy5fc3Vic2NyaWJlLmluaXRVc2VyRGF0YU1hcCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzZW5nZXJNb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvcGFzc2VuZ2VyLW1vZGUvcGFzc2VuZ2VyLW1vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuY29uc3QgZnJvbUxhdExuZ1RvUG9pbnQgPSAoeyBtYXAsIHBvaW50cyB9KSA9PiB7XG4gIGNvbnN0IGNvbnZlcnRpbmdQb2ludHMgPSBbXTtcbiAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgY29udmVydGluZ1BvaW50cy5wdXNoKG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvUG9pbnQocG9pbnQpKTtcbiAgfSk7XG4gIHJldHVybiBjb252ZXJ0aW5nUG9pbnRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tTGF0TG5nVG9Qb2ludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZnJvbS1sYXRMbmctdG8tcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5jb25zdCBmcm9tUG9pbnRUb0xhdExuZyA9ICh7IG1hcCwgcG9pbnRzIH0pID0+IHtcbiAgY29uc3QgY29udmVydGluZ1BvaW50cyA9IFtdO1xuICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICBjb252ZXJ0aW5nUG9pbnRzLnB1c2gobWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhwb2ludCkpO1xuICB9KTtcbiAgcmV0dXJuIGNvbnZlcnRpbmdQb2ludHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyb21Qb2ludFRvTGF0TG5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9mcm9tLXBvaW50LXRvLWxhdExuZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmNvbnN0IGRlZmluZVBvaW50ID0gKHsgcG9pbnRzIH0pID0+IHtcbiAgaWYgKCFwb2ludHMuQS5tYXBFbGVtZW50cykge1xuICAgIHJldHVybiAnQSc7XG4gIH1cbiAgaWYgKHBvaW50cy5BLm1hcEVsZW1lbnRzICYmICFwb2ludHMuQi5tYXBFbGVtZW50cykge1xuICAgIHJldHVybiAnQic7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVBvaW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9kZWZpbmUtcG9pbnQtbmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBmcm9tTGF0TG5nVG9Qb2ludCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZnJvbS1sYXRMbmctdG8tcG9pbnQnKTtcblxuY29uc3QgcGFja2FnaW5nRGF0YVBhc3NlbmdlciA9ICh7IHVzZXJOYW1lLCBwb2ludHMsIG1hcCB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgZGF0YS51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICBkYXRhLnBhc3NlbmdlciA9IHtcbiAgICBwb2ludHM6IHtcbiAgICAgIEE6IHt9LFxuICAgICAgQjoge30sXG4gICAgfSxcbiAgfTtcblxuICBpZiAocG9pbnRzLkEuY29vcmQgJiYgcG9pbnRzLkIuY29vcmQpIHtcbiAgICBbZGF0YS5wYXNzZW5nZXIucG9pbnRzLkEuY29vcmRdID0gZnJvbUxhdExuZ1RvUG9pbnQoe1xuICAgICAgbWFwLFxuICAgICAgcG9pbnRzOiBbcG9pbnRzLkEuY29vcmRdLFxuICAgIH0pO1xuICAgIFtkYXRhLnBhc3Nlbmdlci5wb2ludHMuQi5jb29yZF0gPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgICBtYXAsXG4gICAgICBwb2ludHM6IFtwb2ludHMuQi5jb29yZF0sXG4gICAgfSk7XG4gICAgZGF0YS5wYXNzZW5nZXIucG9pbnRzLkEucmFkaXVzID0gcG9pbnRzLkEucmFkaXVzO1xuICAgIGRhdGEucGFzc2VuZ2VyLnBvaW50cy5CLnJhZGl1cyA9IHBvaW50cy5CLnJhZGl1cztcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYWNrYWdpbmdEYXRhUGFzc2VuZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvcGFzc2VuZ2VyLW1vZGUvdXRpbC9wYWNrYWdpbmctZGF0YS1wYXNzZW5nZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuY29uc3QgZ2V0TWFya2VyUG9pbnRFbGVtID0gKHtcbiAgZ29vZ2xlTWFwcyxcbiAgbWFwLFxuICBjb29yZCxcbiAgbGFiZWwsXG59KSA9PiB7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGVNYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3JkLFxuICAgIG1hcCxcbiAgICBsYWJlbDoge1xuICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgIGNvbG9yOiAnIzAwQUFGRicsXG4gICAgICB0ZXh0OiBsYWJlbCxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHBhdGg6IGdvb2dsZU1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXG4gICAgICBzdHJva2VDb2xvcjogJ3doaXRlJyxcbiAgICAgIHN0cm9rZVdlaWdodDogMSxcbiAgICAgIGZpbGxDb2xvcjogJ3doaXRlJyxcbiAgICAgIGZpbGxPcGFjaXR5OiAwLjksXG4gICAgICBzY2FsZTogMTUsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFya2VyUG9pbnRFbGVtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvcGFzc2VuZ2VyLW1vZGUvdXRpbC9nZXQtbWFya2VyLXBvaW50LWVsZW0uanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuY29uc3QgZ2V0Q2lyY2xlUG9pbnRFbGVtID0gKHtcbiAgZ29vZ2xlTWFwcyxcbiAgY2VudGVyLFxuICByYWRpdXMsXG59KSA9PiB7XG4gIGNvbnN0IGNpcmNsZU9wdGlvbnMgPSB7XG4gICAgY2VudGVyLFxuICAgIHJhZGl1cyxcbiAgICBmaWxsQ29sb3I6ICcjMDBBQUZGJyxcbiAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgIHN0cm9rZUNvbG9yOiAnd2hpdGUnLFxuICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICBzdHJva2VXZWlnaHQ6IDIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9O1xuICBjb25zdCBjaXJjbGUgPSBuZXcgZ29vZ2xlTWFwcy5DaXJjbGUoY2lyY2xlT3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNpcmNsZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Q2lyY2xlUG9pbnRFbGVtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvcGFzc2VuZ2VyLW1vZGUvdXRpbC9nZXQtY2lyY2xlLXBvaW50LWVsZW0uanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=