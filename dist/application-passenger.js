webpackJsonp([5],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var map = _ref.map,
      points = _ref.points;
  var convertingPoints = [];
  points.forEach(function (point) {
    convertingPoints.push(map.getProjection().fromLatLngToPoint(point));
  });
  return convertingPoints;
};

exports.default = _default;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(__webpack_require__(5));

var _loadGoogleMaps = _interopRequireDefault(__webpack_require__(59));

var _passenger = _interopRequireDefault(__webpack_require__(60));

var _template = _interopRequireDefault(__webpack_require__(70));

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// css
var Map =
/*#__PURE__*/
function () {
  function Map(_ref) {
    var _this = this;

    var el = _ref.el;

    _classCallCheck(this, Map);

    this.el = el;
    this.elements = {};
    this.components = {};
    this.render();
    this.elements.mapContainer = document.querySelector('[data-component="map-container"]');
    (0, _loadGoogleMaps.default)(this.elements.mapContainer).then(function () {
      _this.GoogleMaps = window.google.maps;
      _this.components.map = new window.google.maps.Map(_this.elements.mapContainer, {
        center: {
          lat: 50.448853,
          lng: 30.513346
        },
        zoom: 14
      }); // событие инициализации Проекции. До инициализации не работает конвертация координат

      var promise = new Promise(function (resolve) {
        _this.components.map.addListener('projection_changed', function () {
          resolve();
        });
      });
      return promise;
    }).then(function () {
      // если поменялся routeHash до инициализации карты
      if (_router.default.getRouteHash().match(/^application.*$/)[0] !== 'application') {
        return;
      } // загрузка и инициализация функционала для режима "driver/passenger"


      _this.init();
    }).catch(function (err) {
      console.log(err);
    });
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }, {
    key: "show",
    value: function show() {
      this.el.classList.remove('hidden');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.classList.add('hidden');
    }
  }, {
    key: "init",
    value: function init() {
      this.mapModule = new _passenger.default({
        googleMaps: this.GoogleMaps,
        map: this.components.map
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.mapModule) {
        return;
      }

      this.mapModule.destroy();
      this.mapModule = null;
    }
  }]);

  return Map;
}();

exports.default = Map;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var promise = new Promise(function (resolve) {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA1aqVDTGme-a6qPTdHG3aIqGRbjHHs8MM&callback=initMap';
    document.body.appendChild(script);

    window.initMap = function () {
      resolve();
    };
  });
  return promise;
};

exports.default = _default;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _httpRequest = _interopRequireDefault(__webpack_require__(8));

var _isObjEmpty = _interopRequireDefault(__webpack_require__(61));

var _definePointName = _interopRequireDefault(__webpack_require__(62));

var _fromPointToLatLng = _interopRequireDefault(__webpack_require__(63));

var _getCircleRadiusWorldCoord = _interopRequireDefault(__webpack_require__(64));

var _getStopoverPointElem = _interopRequireDefault(__webpack_require__(66));

var _packagingDataPassenger = _interopRequireDefault(__webpack_require__(67));

var _getMarkerPointElem = _interopRequireDefault(__webpack_require__(68));

var _getCirclePointElem = _interopRequireDefault(__webpack_require__(69));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PassengerMode =
/*#__PURE__*/
function () {
  // constructor({ googleMaps, map, userData }) {
  function PassengerMode() {
    _classCallCheck(this, PassengerMode);

    console.log('passenger init'); // this.subscribe = {};
    // this.googleMaps = googleMaps;
    // this.map = map;
    // this.userData = userData;
    //
    // this.points = {
    //   A: {},
    //   B: {},
    // };
    //
    // this.map.addListener('click', this.onClickMap.bind(this));
    //
    // this.subscribe.destroyMap = PubSub.subscribe('destroyMap', this.destroy.bind(this));
    // this.subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this.initUserData.bind(this));
    // this.subscribe.searchStopover = PubSub.subscribe('searchStopover', this.searchStopover.bind(this, { url: './passenger/start-search' }));
  }

  _createClass(PassengerMode, [{
    key: "onClickMap",
    value: function onClickMap(e) {
      if (this.points.A.mapElements && this.points.B.mapElements) return;
      var pointName = (0, _definePointName.default)({
        points: this.points
      });
      if (!pointName) return;
      this.points[pointName] = this.createPointStructure({
        coord: e.latLng,
        pointName: pointName,
        radius: 1000
      });
      this.addEvents({
        pointName: pointName,
        markerPointElem: this.points[pointName].mapElements.markerPointElem,
        circlePointElem: this.points[pointName].mapElements.circlePointElem
      });
      this.render({
        action: 'add',
        elements: [this.points[pointName].mapElements.markerPointElem, this.points[pointName].mapElements.circlePointElem]
      }); // если есть обе точки, упаковать и сохранить данные на сервере

      if (this.points.A.mapElements && this.points.B.mapElements) {
        this.sendToServer({
          url: './passenger/save-data'
        });
      }
    }
  }, {
    key: "addEvents",
    value: function addEvents(_ref) {
      var markerPointElem = _ref.markerPointElem,
          circlePointElem = _ref.circlePointElem,
          pointName = _ref.pointName;
      markerPointElem.addListener('click', this.onClickPoint.bind(this, pointName));
      circlePointElem.addListener('click', this.onClickPoint.bind(this, pointName));
    }
  }, {
    key: "onClickPoint",
    value: function onClickPoint(pointName) {
      this.render({
        action: 'remove',
        elements: [this.points[pointName].mapElements.markerPointElem, this.points[pointName].mapElements.circlePointElem]
      });
      this.points[pointName] = {};
      if (this.stopoverPoints) this.removeStopoverStructure();

      if (!this.points.A.mapElements && !this.points.B.mapElements) {
        this.sendToServer({
          url: './passenger/save-data'
        });
      }
    }
    /*
    *   создание елемента point, сохранение данных, помещение элемента на карту
    */

  }, {
    key: "createPointStructure",
    value: function createPointStructure(_ref2) {
      var pointName = _ref2.pointName,
          coord = _ref2.coord,
          radius = _ref2.radius;
      var point = {
        coord: coord,
        radius: radius,
        radiusWorldCoord: null,
        mapElements: {}
      };
      var circlePointElem = (0, _getCirclePointElem.default)({
        googleMaps: this.googleMaps,
        center: coord,
        radius: radius
      });
      var markerPointElem = (0, _getMarkerPointElem.default)({
        googleMaps: this.googleMaps,
        coord: coord,
        label: pointName
      });
      point.mapElements.markerPointElem = markerPointElem;
      point.mapElements.circlePointElem = circlePointElem;
      point.radiusWorldCoord = (0, _getCircleRadiusWorldCoord.default)({
        googleMaps: this.googleMaps,
        map: this.map,
        circleElem: circlePointElem
      });
      return point;
    }
    /*
    *   создание елементов stopoverPoints, сохранение данных, помещение элемента на карту
    */

  }, {
    key: "crateStopoverStructure",
    value: function crateStopoverStructure(_ref3) {
      var _this = this;

      var stopoverPoints = _ref3.stopoverPoints;
      var stopoverPointsName = ['A', 'B'];
      var stopovers = {
        A: {
          coord: null,
          mapElements: {}
        },
        B: {
          coord: null,
          mapElements: {}
        }
      };
      stopoverPointsName.forEach(function (pointName) {
        var stopoverPointElem = (0, _getStopoverPointElem.default)({
          googleMaps: _this.googleMaps,
          coord: (0, _fromPointToLatLng.default)({
            map: _this.map,
            points: [stopoverPoints[pointName].coord]
          })[0],
          color: 'red'
        });
        stopovers[pointName].coord = stopoverPoints[pointName].coord;
        stopovers[pointName].mapElements.stopoverPointElem = stopoverPointElem;
      });
      return stopovers;
    }
    /*
    *   удаление даных о элементах stopoverPoints, удаление элемента с карты
    */

  }, {
    key: "removeStopoverStructure",
    value: function removeStopoverStructure() {
      this.render({
        action: 'remove',
        elements: [this.stopoverPoints.A.mapElements.stopoverPointElem, this.stopoverPoints.B.mapElements.stopoverPointElem]
      });
      this.stopoverPoints = null;
    }
    /*
    *   сохранение данных на сервере
    */

  }, {
    key: "sendToServer",
    value: function sendToServer(_ref4) {
      var _this2 = this;

      var url = _ref4.url;
      var promise = new Promise(function (resolve) {
        var userData = (0, _packagingDataPassenger.default)({
          userName: _this2.userData.userName,
          points: _this2.points,
          map: _this2.map
        });
        (0, _httpRequest.default)({
          url: url,
          data: userData
        }).then(function (response) {
          console.log('server response:', response);
          resolve(response);
        });
      });
      return promise;
    }
    /*
    *   сохранение данных на сервере, начать поиск
    */

  }, {
    key: "searchStopover",
    value: function searchStopover(_ref5) {
      var _this3 = this;

      var url = _ref5.url;
      if (this.inSearchStopoverProcess) return;
      if (!this.points.A.mapElements || !this.points.B.mapElements) return;
      this.inSearchStopoverProcess = true;
      this.sendToServer({
        url: url
      }).then(function (driverData) {
        _this3.inSearchStopoverProcess = false;
        if (_this3.isDestroy) return;
        if (driverData === 'matches was not found') return;
        _this3.stopoverPoints = _this3.crateStopoverStructure({
          stopoverPoints: driverData.stopoverPoints
        });

        _this3.render({
          action: 'add',
          elements: [_this3.stopoverPoints.A.mapElements.stopoverPointElem, _this3.stopoverPoints.B.mapElements.stopoverPointElem]
        });
      });
    }
    /*
    *   рендеринг массива элементов. Добавляет или удаляет эдементы с карты
    */

  }, {
    key: "render",
    value: function render(_ref6) {
      var _this4 = this;

      var elements = _ref6.elements,
          action = _ref6.action;
      var actionFunction;

      if (action === 'add') {
        actionFunction = function actionFunction(_ref7) {
          var mapElement = _ref7.mapElement;
          mapElement.setMap(_this4.map);
        };
      }

      if (action === 'remove') {
        actionFunction = function actionFunction(_ref8) {
          var mapElement = _ref8.mapElement;
          mapElement.setMap(null);

          _this4.googleMaps.event.clearInstanceListeners(mapElement);
        };
      }

      if (!actionFunction) return;
      elements.forEach(function (mapElement) {
        actionFunction({
          mapElement: mapElement
        });
      });
    }
    /*
    *   оработка данных с сервера(сохранение в объекте, рендеринг)
    */

  }, {
    key: "initUserData",
    value: function initUserData() {
      var _this5 = this;

      if (!this.userData.passenger || !this.userData.passenger) {
        return;
      }

      if (this.userData.passenger.points.A.coord && this.userData.passenger.points.B.coord) {
        var pointsName = ['A', 'B'];
        pointsName.forEach(function (pointName) {
          var pointStructure = _this5.createPointStructure({
            // сделать проверку наличия данных
            coord: (0, _fromPointToLatLng.default)({
              map: _this5.map,
              points: [_this5.userData.passenger.points[pointName].coord]
            })[0],
            pointName: pointName,
            radius: _this5.userData.passenger.points[pointName].radius
          });

          _this5.points[pointName] = pointStructure;

          _this5.addEvents({
            pointName: pointName,
            markerPointElem: pointStructure.mapElements.markerPointElem,
            circlePointElem: pointStructure.mapElements.circlePointElem
          });

          _this5.render({
            action: 'add',
            elements: [pointStructure.mapElements.markerPointElem, pointStructure.mapElements.circlePointElem]
          });
        });
      }
    }
    /*
    *   удаление элементов с карты, удаление данных, отписка от всех событий
    */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      var pointsName = Object.keys(this.points);
      pointsName.forEach(function (pointName) {
        if ((0, _isObjEmpty.default)(_this6.points[pointName])) return;

        _this6.render({
          action: 'remove',
          elements: [_this6.points[pointName].mapElements.markerPointElem, _this6.points[pointName].mapElements.circlePointElem]
        });

        _this6.points[pointName] = {};
      });
      if (this.stopoverPoints) this.removeStopoverStructure();
      this.googleMaps.event.clearInstanceListeners(this.map);

      _pubsubJs.default.unsubscribe(this.subscribe.destroyMap);

      _pubsubJs.default.unsubscribe(this.subscribe.initUserDataMap);

      _pubsubJs.default.unsubscribe(this.subscribe.searchStopover);

      this.isDestroy = true;
    }
  }]);

  return PassengerMode;
}();

exports.default = PassengerMode;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(obj) {
  var arr = Object.keys(obj);
  if (arr.length === 0) return true;
  return false;
};

exports.default = _default;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var points = _ref.points;

  if (!points.A.mapElements) {
    return 'A';
  }

  if (points.A.mapElements && !points.B.mapElements) {
    return 'B';
  }

  return null;
};

exports.default = _default;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var map = _ref.map,
      points = _ref.points;
  var convertingPoints = [];
  points.forEach(function (point) {
    convertingPoints.push(map.getProjection().fromPointToLatLng(point));
  });
  return convertingPoints;
};

exports.default = _default;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDistanceBetweenPoints = _interopRequireDefault(__webpack_require__(65));

var _fromLatLngToPoint = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      map = _ref.map,
      circleElem = _ref.circleElem;
  var centerLatLng = circleElem.getCenter();
  var boundsLatLng = circleElem.getBounds();
  var pointOnCircleLat = boundsLatLng.f.f - (boundsLatLng.f.f - boundsLatLng.f.b) / 2;
  var pointOnCircleLng = boundsLatLng.b.b;
  var pointOnCircleWorldCoord = (0, _fromLatLngToPoint.default)({
    map: map,
    points: [new googleMaps.LatLng(pointOnCircleLat, pointOnCircleLng)]
  })[0];
  var centerWorldCoord = (0, _fromLatLngToPoint.default)({
    map: map,
    points: [centerLatLng]
  })[0];
  return (0, _getDistanceBetweenPoints.default)({
    point1: pointOnCircleWorldCoord,
    point2: centerWorldCoord
  });
};

exports.default = _default;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var point1 = _ref.point1,
      point2 = _ref.point2;
  var vector = {};
  vector.x = point2.x - point1.x;
  vector.y = point2.y - point1.y;
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
};

exports.default = _default;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      coord = _ref.coord,
      label = _ref.label,
      color = _ref.color;
  var marker = new googleMaps.Marker({
    position: coord,
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: color,
      strokeWeight: 2,
      fillColor: 'white',
      fillOpacity: 0.8,
      scale: 8
    },
    label: label,
    clickable: false
  });
  marker.setZIndex(100);
  return marker;
};

exports.default = _default;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromLatLngToPoint5 = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var userName = _ref.userName,
      points = _ref.points,
      map = _ref.map;
  var data = {};
  data.userName = userName;
  data.passenger = {
    points: {
      A: {},
      B: {}
    }
  };

  if (points.A.coord && points.B.coord) {
    var _fromLatLngToPoint = (0, _fromLatLngToPoint5.default)({
      map: map,
      points: [points.A.coord]
    });

    var _fromLatLngToPoint2 = _slicedToArray(_fromLatLngToPoint, 1);

    data.passenger.points.A.coord = _fromLatLngToPoint2[0];

    var _fromLatLngToPoint3 = (0, _fromLatLngToPoint5.default)({
      map: map,
      points: [points.B.coord]
    });

    var _fromLatLngToPoint4 = _slicedToArray(_fromLatLngToPoint3, 1);

    data.passenger.points.B.coord = _fromLatLngToPoint4[0];
    data.passenger.points.A.radius = points.A.radius;
    data.passenger.points.B.radius = points.B.radius;
    data.passenger.points.A.radiusWorldCoord = points.A.radiusWorldCoord;
    data.passenger.points.B.radiusWorldCoord = points.B.radiusWorldCoord;
  }

  return data;
};

exports.default = _default;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      map = _ref.map,
      coord = _ref.coord,
      label = _ref.label;
  var marker = new googleMaps.Marker({
    position: coord,
    map: map,
    label: {
      fontSize: '20px',
      color: '#00AAFF',
      text: label
    },
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: 'white',
      strokeWeight: 1,
      fillColor: 'white',
      fillOpacity: 0.9,
      scale: 15
    }
  });
  return marker;
};

exports.default = _default;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      center = _ref.center,
      radius = _ref.radius;
  var circleOptions = {
    center: center,
    radius: radius,
    fillColor: '#00AAFF',
    fillOpacity: 0.5,
    strokeColor: 'white',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: true
  };
  var circle = new googleMaps.Circle(circleOptions);
  return circle;
};

exports.default = _default;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-component=\"map-container\"\n     class=\"map-container\">\n</div>\n";
},"useData":true});

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(72);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".map-container {\n  height: 100%; }\n", ""]);

// exports


/***/ })

});