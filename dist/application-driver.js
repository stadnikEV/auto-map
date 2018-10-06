webpackJsonp([6],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDataOfMinDistanceToSegment = _interopRequireDefault(__webpack_require__(12));

var _getClosestPointNumberOnPolyline = _interopRequireDefault(__webpack_require__(65));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var point = _ref.point,
      polyline = _ref.polyline;
  // определение порядкового номера ближайшей точки полилинии.
  var closestPointNumber = (0, _getClosestPointNumberOnPolyline.default)({
    point: point,
    polyline: polyline
  });
  /*
  *   опредеоение ближайшей координаты на полилинии
  *   данная координата расположена на отрезке прилежащем к точке с номером closestPointNumber
  *   это может быть отрезок до или после точки с номером closestPointNumber
  *   для сравнения берем оба эти отрезка
  */
  // определение отрезков для сравнения

  var firstPointOfPolyline = 0;
  var lastPointOfPolyline = polyline.length - 1; // определение отрезков которые нужно проверить

  var segmentsForCheck = [];

  if (firstPointOfPolyline !== closestPointNumber && lastPointOfPolyline !== closestPointNumber) {
    segmentsForCheck[0] = [closestPointNumber - 1, closestPointNumber];
    segmentsForCheck[1] = [closestPointNumber, closestPointNumber + 1];
  }

  if (firstPointOfPolyline === closestPointNumber) {
    segmentsForCheck[0] = [0, 1];
  }

  if (lastPointOfPolyline === closestPointNumber) {
    segmentsForCheck[0] = [lastPointOfPolyline - 1, lastPointOfPolyline];
  } // опредеоение ближайшей координаты на полилинии


  var closestPointDist = 256;
  var closestPointCoord;
  var closestSegment = [];
  segmentsForCheck.forEach(function (segment) {
    var result = (0, _getDataOfMinDistanceToSegment.default)({
      point: point,
      pointSeg1: polyline[segment[0]],
      pointSeg2: polyline[segment[1]]
    });

    if (result.dist < closestPointDist) {
      closestPointDist = result.dist;
      closestPointCoord = result.coord;

      var _segment = _slicedToArray(segment, 2);

      closestSegment[0] = _segment[0];
      closestSegment[1] = _segment[1];
    }
  });
  return {
    coord: closestPointCoord,
    segment: closestSegment,
    dist: closestPointDist
  };
};

exports.default = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var point = _ref.point,
      pointSeg1 = _ref.pointSeg1,
      pointSeg2 = _ref.pointSeg2;

  var getVector = function getVector(point1, point2) {
    var vector = [];
    vector.x = point2.x - point1.x;
    vector.y = point2.y - point1.y;
    return vector;
  };

  var vectorProduct = function vectorProduct(vectorA, vectorB) {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  };

  var dist = function dist(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  };

  var vector1 = getVector(pointSeg1, point);
  var vectorSeg = getVector(pointSeg1, pointSeg2);
  var c1 = vectorProduct(vector1, vectorSeg);

  if (c1 <= 0) {
    return {
      dist: dist(vector1),
      coord: pointSeg1
    };
  }

  var c2 = vectorProduct(vectorSeg, vectorSeg);

  if (c2 <= c1) {
    var vector2 = getVector(point, pointSeg2);
    return {
      dist: dist(vector2),
      coord: pointSeg2
    };
  }

  var b = c1 / c2;
  var pointPerpendicular = {};
  pointPerpendicular.x = pointSeg1.x + vectorSeg.x * b;
  pointPerpendicular.y = pointSeg1.y + vectorSeg.y * b;
  var vectorPerpendicular = getVector(point, pointPerpendicular);
  return {
    dist: dist(vectorPerpendicular),
    coord: pointPerpendicular
  };
};

exports.default = _default;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(__webpack_require__(5));

var _loadGoogleMaps = _interopRequireDefault(__webpack_require__(62));

var _driver = _interopRequireDefault(__webpack_require__(63));

var _template = _interopRequireDefault(__webpack_require__(81));

__webpack_require__(82);

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
      this.mapModule = new _driver.default({
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _driverApi = _interopRequireDefault(__webpack_require__(9));

var _isObjEmpty = _interopRequireDefault(__webpack_require__(64));

var _getDataOfClosestCoordOnPolyline = _interopRequireDefault(__webpack_require__(11));

var _fromPointToLatLng = _interopRequireDefault(__webpack_require__(67));

var _definePointName = _interopRequireDefault(__webpack_require__(68));

var _fromLatLngToPoint = _interopRequireDefault(__webpack_require__(8));

var _getStopoverPointElem = _interopRequireDefault(__webpack_require__(69));

var _getRouteElem = _interopRequireDefault(__webpack_require__(70));

var _getMarkerPointElem = _interopRequireDefault(__webpack_require__(71));

var _getPolylinePath = _interopRequireDefault(__webpack_require__(72));

var _getMarkerWaypointElem = _interopRequireDefault(__webpack_require__(73));

var _cutPolylinePath = _interopRequireDefault(__webpack_require__(74));

var _getPolylineElem = _interopRequireDefault(__webpack_require__(75));

var _getId = _interopRequireDefault(__webpack_require__(76));

var _getWaypointIndex = _interopRequireDefault(__webpack_require__(77));

var _packagingUserDataDriver = _interopRequireDefault(__webpack_require__(78));

var _waypointIndexIsBetweenStopover = _interopRequireDefault(__webpack_require__(79));

var _getIndexOfExtremeStopovers = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DriverMod =
/*#__PURE__*/
function () {
  function DriverMod(_ref) {
    var googleMaps = _ref.googleMaps,
        map = _ref.map;

    _classCallCheck(this, DriverMod);

    this.subscribe = {};
    this.googleMaps = googleMaps;
    this.map = map; // this.userData = userData;

    this.points = {
      A: {},
      B: {}
    };
    this.waypoints = {
      coord: [],
      // массив с координатами waypoints. Номер свойства указывает на порядковый номер waypoint.
      id: [],
      // номер свойства указывает на порядковый номер waypoint.Значение свойства указывает на id waypoint(по id определяется порядковый номер waypoint)
      mapElements: {} // имя свойства соответствует id waypoint. значение свойства - mapElement

    };
    this.polyline = {};
    this.routeElem = null;
    this.map.addListener('click', this.onClickMap.bind(this));
    this.subscribe.destroyMap = _pubsubJs.default.subscribe('destroyMap', this.destroy.bind(this)); // this.subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this.initUserData.bind(this));
    // this.subscribe.startSearch = PubSub.subscribe('startSearch', this.startSearch.bind(this, { url: './driver/start-search' }));
  }

  _createClass(DriverMod, [{
    key: "onClickMap",
    value: function onClickMap(e) {
      var _this = this;

      var pointName = (0, _definePointName.default)({
        points: this.points
      }); // если нет точки А или точки В

      if (pointName) {
        this.createPointElem({
          coord: e.latLng,
          pointName: pointName
        });

        if (this.points.A.mapElements && this.points.B.mapElements) {
          this.createRoute().then(function () {
            _this.adjustCoordOfPoints();

            _this.sendToServer({
              url: './driver/save-data'
            });
          });
          return;
        }

        return;
      } // если есть точка A и точка B


      this.createWaypoint({
        coord: e.latLng
      }).then(function () {
        _this.sendToServer({
          url: './driver/save-data'
        });
      });
    }
  }, {
    key: "onClickPoint",
    value: function onClickPoint(pointName) {
      this.removePointElem({
        pointName: pointName
      }); // если polyline не создана

      if (!this.polyline.mapElements) {
        this.sendToServer({
          url: './driver/save-data'
        });
        return;
      }

      this.render({
        action: 'remove',
        elements: [this.polyline.mapElements.polylineElem]
      }); // если waypoints не созданы

      if ((0, _isObjEmpty.default)(this.waypoints.mapElements)) {
        this.polyline = {};
        return;
      } // если нет точек А и B


      if (!this.points.A.mapElements && !this.points.B.mapElements) {
        // удалить все waypoint
        this.removeWaypointElements();
        this.polyline = {};
        this.sendToServer({
          url: './driver/save-data'
        });
        return;
      } // если есть одна из точек и waypoint, отрезать участок от точки до waypoint


      this.cutPolyline({
        pointName: pointName
      });
    }
  }, {
    key: "onClickWaypoint",
    value: function onClickWaypoint(waypointId) {
      var _this2 = this;

      if (!this.points.A.mapElements || !this.points.B.mapElements) return;
      this.removeWaypointElements(waypointId);
      this.createRoute().then(function () {
        _this2.sendToServer({
          url: './driver/save-data'
        });
      });
    }
    /*
    *   создание елемента point, сохранение данных, помещение элемента на карту
    */

  }, {
    key: "createPointElem",
    value: function createPointElem(_ref2) {
      var pointName = _ref2.pointName,
          coord = _ref2.coord;
      var point = {
        coord: coord,
        mapElements: {}
      };
      var markerPointElem = (0, _getMarkerPointElem.default)({
        googleMaps: this.googleMaps,
        coord: coord,
        label: pointName
      });
      point.mapElements.markerPointElem = markerPointElem;
      this.points[pointName] = point;
      this.lastCreatedElem = {
        pointName: pointName
      };
      this.render({
        action: 'add',
        elements: [markerPointElem]
      });
      markerPointElem.addListener('click', this.onClickPoint.bind(this, pointName));
    }
    /*
    *   удаление даных о элементе point, удаление элемента с карты
    */

  }, {
    key: "removePointElem",
    value: function removePointElem(_ref3) {
      var pointName = _ref3.pointName;
      this.render({
        action: 'remove',
        elements: [this.points[pointName].mapElements.markerPointElem]
      });
      this.points[pointName] = {};
    }
    /*
    *   создание елемента polyline, сохранение данных, помещение элемента на карту
    */

  }, {
    key: "createPolylineElem",
    value: function createPolylineElem(_ref4) {
      var polylinePath = _ref4.polylinePath;
      var polyline = {
        path: [],
        mapElements: {}
      };
      polyline.path = polylinePath; // получить элемент polylineElem

      var polylineElem = (0, _getPolylineElem.default)({
        googleMaps: this.googleMaps,
        path: polylinePath
      });
      polyline.mapElements.polylineElem = polylineElem;
      this.polyline = polyline;
      this.render({
        action: 'add',
        elements: [polylineElem]
      });
    }
    /*
    *   удаление даных о элементе polyline, удаление элемента с карты
    */

  }, {
    key: "removePolylineElem",
    value: function removePolylineElem() {
      this.render({
        action: 'remove',
        elements: [this.polyline.mapElements.polylineElem]
      });
      this.polyline.path = [];
    }
    /*
    *   комплексный метод, содержащий в себе создание waypoint, перерасчет маршрута, создание полилинии, рендеринг элементов...
    */

  }, {
    key: "createWaypoint",
    value: function createWaypoint(_ref5) {
      var _this3 = this;

      var coord = _ref5.coord;
      var promise = new Promise(function (resolve) {
        if (_this3.waypoints.coord.length >= 23) return; // сгенерировать waypointId

        var waypointId = (0, _getId.default)({
          elements: _this3.waypoints.id
        }); // получить порядковый номер waypoint

        var waypointIndex = (0, _getWaypointIndex.default)({
          map: _this3.map,
          pointACoord: _this3.points.A.coord,
          pointBCoord: _this3.points.B.coord,
          waypoints: _this3.waypoints.coord,
          clickCoord: coord
        }); // если waypoint между stopover, не создавать waypoint

        var stopoversIndex = (0, _getIndexOfExtremeStopovers.default)({
          waypoints: _this3.waypoints.coord
        });

        if ((0, _waypointIndexIsBetweenStopover.default)({
          waypointIndex: waypointIndex,
          stopoversIndex: stopoversIndex
        })) {
          return;
        }

        var waypointElem = _this3.createWaypointElem({
          id: waypointId,
          index: waypointIndex,
          coord: coord
        }); // необходимо если getRoute вернул "ZERORESULTS".


        _this3.lastCreatedElem = {
          waypointId: waypointId
        };

        _this3.createRoute().then(function () {
          // получить координату на созданной полилиинии (ближайшее расстояние от координаты waypoint до полилинии)
          var waypointWorldCoord = (0, _getDataOfClosestCoordOnPolyline.default)({
            point: (0, _fromLatLngToPoint.default)({
              map: _this3.map,
              points: [coord]
            })[0],
            polyline: (0, _fromLatLngToPoint.default)({
              map: _this3.map,
              points: _this3.polyline.path
            })
          }).coord; // заменить данные о waypoint в объекте this.waypoints

          _this3.replaceWaypointPosition({
            waypointElem: waypointElem,
            coord: (0, _fromPointToLatLng.default)({
              map: _this3.map,
              points: [waypointWorldCoord]
            })[0],
            index: waypointIndex,
            id: waypointId
          });

          resolve();
        });
      });
      return promise;
    }
    /*
    *   создание елемента waypoints, сохранение данных, помещение элемента на карту
    */

  }, {
    key: "createWaypointElem",
    value: function createWaypointElem(_ref6) {
      var id = _ref6.id,
          index = _ref6.index,
          coord = _ref6.coord,
          _ref6$stopover = _ref6.stopover,
          stopover = _ref6$stopover === void 0 ? false : _ref6$stopover,
          color = _ref6.color,
          label = _ref6.label;
      // создать mapElement
      var waypointElem;

      if (!stopover) {
        waypointElem = (0, _getMarkerWaypointElem.default)({
          googleMaps: this.googleMaps,
          map: this.map,
          coord: coord
        });
      }

      if (stopover) {
        waypointElem = (0, _getStopoverPointElem.default)({
          googleMaps: this.googleMaps,
          coord: coord,
          color: color,
          label: label
        });
      } // добавить данные о waypoint в объект this.waypoints


      this.addtWaypointData({
        coord: coord,
        id: id,
        index: index,
        waypointElem: waypointElem,
        stopover: stopover
      });
      this.render({
        action: 'add',
        elements: [waypointElem]
      });

      if (!stopover) {
        waypointElem.addListener('click', this.onClickWaypoint.bind(this, id));
      }

      return waypointElem;
    }
    /*
    *   удаление даных о элементах waypoints, удаление элементов с карты
    */

  }, {
    key: "removeWaypointElements",
    value: function removeWaypointElements(waypointId) {
      var waypointElements; // удалить waypoint c заданным id

      if (typeof waypointId === 'number') {
        // определить позицию waypoint
        var waypointIndex;
        this.waypoints.id.forEach(function (id, index) {
          if (id === waypointId) {
            waypointIndex = index;
          }
        }); // удалить данные о waypoint

        waypointElements = this.removeWaypointData({
          id: waypointId,
          index: waypointIndex
        });
      } // удалить все waypoints


      if (waypointId === undefined) {
        waypointElements = this.removeWaypointData();
      }

      this.render({
        action: 'remove',
        elements: waypointElements
      });
    }
    /*
    *   добавить данные о waypoint в объект this.waypoints
    */

  }, {
    key: "addtWaypointData",
    value: function addtWaypointData(_ref7) {
      var waypointElem = _ref7.waypointElem,
          coord = _ref7.coord,
          id = _ref7.id,
          index = _ref7.index,
          stopover = _ref7.stopover;
      // сохранить waypointId, в позиции waypointIndex
      this.waypoints.id.splice(index, 0, id); // сохранить waypointСoord, в позиции waypointIndex

      this.waypoints.coord.splice(index, 0, {
        location: coord,
        stopover: stopover
      }); // сохранить mapElement

      this.waypoints.mapElements[id] = waypointElem;
    }
    /*
    *   заменить данные о waypoint в объекте this.waypoints
    */

  }, {
    key: "replaceWaypointPosition",
    value: function replaceWaypointPosition(_ref8) {
      var coord = _ref8.coord,
          index = _ref8.index,
          id = _ref8.id,
          waypointElem = _ref8.waypointElem;
      this.waypoints.coord[index].location = coord;
      this.waypoints.mapElements[id] = waypointElem;
      waypointElem.setPosition(coord);
    }
    /*
    *   удалить данные о waypoints в объекте this.waypoints
    */

  }, {
    key: "removeWaypointData",
    value: function removeWaypointData() {
      var _this4 = this;

      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          id = _ref9.id,
          index = _ref9.index;

      var mapElements = []; // удалить данные указанного waypoint

      if (typeof id === 'number' && typeof index === 'number') {
        this.waypoints.id.splice(index, 1);
        this.waypoints.coord.splice(index, 1);
        mapElements.push(this.waypoints.mapElements[id]);
        delete this.waypoints.mapElements[id];
      } // удалить все данные


      if (id === undefined && index === undefined) {
        this.waypoints.id.forEach(function (waypointId) {
          mapElements.push(_this4.waypoints.mapElements[waypointId]);
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

  }, {
    key: "createRoute",
    value: function createRoute() {
      var _this5 = this;

      var promise = new Promise(function (resolve) {
        (0, _getRouteElem.default)({
          googleMaps: _this5.googleMaps,
          start: _this5.points.A.coord,
          end: _this5.points.B.coord,
          waypoints: _this5.waypoints.coord
        }).then(function (response) {
          _this5.routeElem = response; // при удачном получении данных, сбросить this.lastCreatedElem

          _this5.lastCreatedElem = {}; // удалить с карты предыдущий polyline если он был

          if (_this5.polyline.mapElements) {
            _this5.removePolylineElem();
          } // получить массив точек с координатами polyline


          var polylinePath = (0, _getPolylinePath.default)({
            routeElem: response
          });

          _this5.createPolylineElem({
            polylinePath: polylinePath
          });

          resolve();
        }).catch(function (status) {
          console.warn(status);

          _this5.hendlerZeroResults();
        });
      });
      return promise;
    }
    /*
    *   укорачивание polyline от выбранной point(A или B) до ближайшего waypoint
    */

  }, {
    key: "cutPolyline",
    value: function cutPolyline(_ref10) {
      var pointName = _ref10.pointName;
      // берем первый или последний waypoint
      var waypointCoord = pointName === 'A' ? this.waypoints.coord[0].location : this.waypoints.coord[this.waypoints.coord.length - 1].location;
      var cutMethod = pointName === 'A' ? 'end' : 'beginning';
      this.polyline.path = (0, _cutPolylinePath.default)({
        map: this.map,
        cutPointCoord: waypointCoord,
        polylinePath: this.polyline.path,
        cutMethod: cutMethod
      });
      this.createPolylineElem({
        polylinePath: this.polyline.path
      });
    }
    /*
    *   рендеринг массива элементов. Добавляет или удаляет эдементы с карты
    */

  }, {
    key: "render",
    value: function render(_ref11) {
      var _this6 = this;

      var elements = _ref11.elements,
          action = _ref11.action;
      var actionFunction;

      if (action === 'add') {
        actionFunction = function actionFunction(_ref12) {
          var mapElement = _ref12.mapElement;
          mapElement.setMap(_this6.map);
        };
      }

      if (action === 'remove') {
        actionFunction = function actionFunction(_ref13) {
          var mapElement = _ref13.mapElement;
          mapElement.setMap(null);

          _this6.googleMaps.event.clearInstanceListeners(mapElement);
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
    *   рендеринг массива элементов. Добавляет или удаляет эдементы с карты
    */

  }, {
    key: "adjustCoordOfPoints",
    value: function adjustCoordOfPoints() {
      var polylineCoordA = this.polyline.path[0];
      this.points.A.mapElements.markerPointElem.setPosition(polylineCoordA);
      this.points.A.coord = polylineCoordA;
      var polylineCoordB = this.polyline.path[this.polyline.path.length - 1];
      this.points.B.mapElements.markerPointElem.setPosition(polylineCoordB);
      this.points.B.coord = polylineCoordB;
    }
    /*
    *   спрятаять waypoints которых находятся между двух крайних stopoverPoints
    */

  }, {
    key: "hideWaypointsBeetwenStopover",
    value: function hideWaypointsBeetwenStopover() {
      var _this7 = this;

      var stopoversIndex = (0, _getIndexOfExtremeStopovers.default)({
        waypoints: this.waypoints.coord
      });
      this.waypoints.coord.forEach(function (waypoint, i) {
        if (waypoint.stopover === true) return;

        if ((0, _waypointIndexIsBetweenStopover.default)({
          waypointIndex: i,
          stopoversIndex: stopoversIndex
        })) {
          var mapElementId = _this7.waypoints.id[i];

          _this7.waypoints.mapElements[mapElementId].setClickable(false);

          _this7.waypoints.mapElements[mapElementId].setOpacity(0);
        }
      });
    }
    /*
    *   создание елементов stopoverPoints, сохранение данных, помещение элемента на карту
    */

  }, {
    key: "crateStopoverPoints",
    value: function crateStopoverPoints(_ref14) {
      var _this8 = this;

      var stopoverPoints = _ref14.stopoverPoints,
          passengerIndex = _ref14.passengerIndex;
      var stopoverPointsName = ['A', 'B'];
      var colors = ['red', 'green', 'blue'];
      stopoverPointsName.forEach(function (pointName) {
        var stopoverPointCoord = (0, _fromPointToLatLng.default)({
          map: _this8.map,
          points: [stopoverPoints[pointName].coord]
        })[0]; // сгенерировать waypointId

        var stopoverPointsId = (0, _getId.default)({
          elements: _this8.waypoints.id
        }); // получить порядковый номер waypoint

        var stopoverPointsIndex = (0, _getWaypointIndex.default)({
          map: _this8.map,
          pointACoord: _this8.points.A.coord,
          pointBCoord: _this8.points.B.coord,
          waypoints: _this8.waypoints.coord,
          clickCoord: stopoverPointCoord
        });

        _this8.createWaypointElem({
          id: stopoverPointsId,
          index: stopoverPointsIndex,
          coord: stopoverPointCoord,
          stopover: true,
          color: colors[passengerIndex],
          label: pointName
        });
      });
    }
    /*
    *   обработка нулевого ответа от google. Удаляет последний элемент с которым не удалось посчитать маршрут
    */

  }, {
    key: "hendlerZeroResults",
    value: function hendlerZeroResults() {
      // если последний элемент был waypoint
      if (typeof this.lastCreatedElem.waypointId === 'number') {
        this.removeWaypointElements(this.lastCreatedElem.waypointId);
        return;
      } // если последний элемент был point


      if (this.lastCreatedElem.pointName) {
        this.removePointElem({
          pointName: this.lastCreatedElem.pointName
        });
      }
    }
    /*
    *   сохранение данных на сервере
    */

  }, {
    key: "sendToServer",
    value: function sendToServer() {
      var _this9 = this;

      var promise = new Promise(function (resolve) {
        var userData = (0, _packagingUserDataDriver.default)({
          // userName: this.userData.userName,
          points: _this9.points,
          polyline: _this9.polyline,
          routeElem: _this9.routeElem,
          waypoints: _this9.waypoints,
          map: _this9.map
        });
        console.log(JSON.stringify(userData));

        _driverApi.default.putMapData({
          data: userData
        }).then(function (response) {
          console.log('save data status:', response);
          resolve(response);
        });
      });
      return promise;
    }
    /*
    *   сохранение данных на сервере, начать поиск
    */

  }, {
    key: "startSearch",
    value: function startSearch(_ref15) {
      var _this10 = this;

      var url = _ref15.url;
      if (this.inStartSearchProcess) return;
      if (!this.points.A.mapElements || !this.points.B.mapElements) return;
      this.inStartSearchProcess = true;
      this.sendToServer({
        url: url
      }).then(function (passengersData) {
        _this10.inStartSearchProcess = false;
        if (_this10.isDestroy) return;
        if (passengersData === 'matches was not found') return;
        passengersData.forEach(function (passengerData, i) {
          _this10.crateStopoverPoints({
            stopoverPoints: passengerData.stopoverPoints,
            passengerIndex: i
          });
        });

        _this10.hideWaypointsBeetwenStopover();
      });
    }
    /*
    *   оработка данных с сервера(сохранение в объекте, рендеринг)
    */

  }, {
    key: "initUserData",
    value: function initUserData() {
      var _this11 = this;

      if (!this.userData.driver || !this.userData.driver) {
        return;
      }

      if (this.userData.driver.points.A.coord && this.userData.driver.points.B.coord) {
        this.createPointElem({
          pointName: 'A',
          coord: (0, _fromPointToLatLng.default)({
            map: this.map,
            points: [this.userData.driver.points.A.coord]
          })[0]
        });
        this.createPointElem({
          pointName: 'B',
          coord: (0, _fromPointToLatLng.default)({
            map: this.map,
            points: [this.userData.driver.points.B.coord]
          })[0]
        });
      }

      if (this.userData.driver.polyline.path) {
        this.createPolylineElem({
          polylinePath: (0, _fromPointToLatLng.default)({
            map: this.map,
            points: this.userData.driver.polyline.path
          })
        });
      }

      if (this.userData.driver.waypoints.coord.length !== 0) {
        var waypointsCoord = this.userData.driver.waypoints.coord;
        waypointsCoord.forEach(function (waypointCoord, index) {
          var coord = (0, _fromPointToLatLng.default)({
            map: _this11.map,
            points: [waypointCoord.location]
          })[0];

          _this11.createWaypointElem({
            id: _this11.userData.driver.waypoints.id[index],
            index: index,
            coord: coord,
            stopover: waypointCoord.stopover
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
      if (this.points.A.mapElements) {
        this.removePointElem({
          pointName: 'A'
        });
      }

      if (this.points.B.mapElements) {
        this.removePointElem({
          pointName: 'B'
        });
      }

      if (this.polyline.mapElements) {
        this.removePolylineElem();
      }

      if (!(0, _isObjEmpty.default)(this.waypoints.mapElements)) {
        this.removeWaypointElements();
      }

      this.googleMaps.event.clearInstanceListeners(this.map);

      _pubsubJs.default.unsubscribe(this.subscribe.destroyMap);

      _pubsubJs.default.unsubscribe(this.subscribe.initUserDataMap);

      _pubsubJs.default.unsubscribe(this.subscribe.startSearch);
    }
  }]);

  return DriverMod;
}();

exports.default = DriverMod;

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDistanceBetweenPoints = _interopRequireDefault(__webpack_require__(66));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// определение порядкового номера ближайшей точки полилинии
var _default = function _default(_ref) {
  var point = _ref.point,
      polyline = _ref.polyline;
  var minDistanceToPolylinePoint = 256;
  var closestPointNumber = 0;
  polyline.forEach(function (polylinePointCoord, pointNumber) {
    var distance = (0, _getDistanceBetweenPoints.default)({
      point1: point,
      point2: polylinePointCoord
    });

    if (distance < minDistanceToPolylinePoint) {
      minDistanceToPolylinePoint = distance;
      closestPointNumber = pointNumber;
    }
  });
  return closestPointNumber;
};

exports.default = _default;

/***/ }),
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      waypoints = _ref.waypoints,
      start = _ref.start,
      end = _ref.end;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
    waypoints: waypoints
  };
  var directionsService = new googleMaps.DirectionsService();
  var promise = new Promise(function (resolve, reject) {
    directionsService.route(request, function (response, status) {
      if (status === 'OK') {
        resolve(response);
        return;
      }

      reject(status);
    });
  });
  return promise;
};

exports.default = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      coord = _ref.coord,
      label = _ref.label;
  var marker = new googleMaps.Marker({
    position: coord,
    label: {
      text: label,
      color: 'white'
    }
  });
  return marker;
};

exports.default = _default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var routeElem = _ref.routeElem;
  var myRoute = routeElem.routes[0].legs;
  var points = [];

  for (var k = 0; k < myRoute.length; k += 1) {
    for (var i = 0; i < myRoute[k].steps.length; i += 1) {
      for (var j = 0; j < myRoute[k].steps[i].lat_lngs.length; j += 1) {
        points.push(myRoute[k].steps[i].lat_lngs[j]);
      }
    }
  }

  return points;
};

exports.default = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      map = _ref.map,
      coord = _ref.coord;
  var marker = new googleMaps.Marker({
    position: coord,
    map: map,
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: 'blue',
      strokeWeight: 1,
      fillColor: 'white',
      fillOpacity: 0.9,
      scale: 5
    }
  });
  return marker;
};

exports.default = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDataOfClosestCoordOnPolyline = _interopRequireDefault(__webpack_require__(11));

var _fromLatLngToPoint = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var map = _ref.map,
      cutPointCoord = _ref.cutPointCoord,
      cutMethod = _ref.cutMethod,
      polylinePath = _ref.polylinePath;
  var polylineSegment = (0, _getDataOfClosestCoordOnPolyline.default)({
    map: map,
    point: (0, _fromLatLngToPoint.default)({
      map: map,
      points: [cutPointCoord]
    })[0],
    polyline: (0, _fromLatLngToPoint.default)({
      map: map,
      points: polylinePath
    })
  }).segment[0];
  var cutPointNumber = polylineSegment + 1;
  polylinePath.splice(cutPointNumber, 0, cutPointCoord); // берем начало или конец массива

  var arr = [];

  if (cutMethod === 'beginning') {
    arr = polylinePath.slice(0, cutPointNumber + 1);
  }

  if (cutMethod === 'end') {
    arr = polylinePath.slice(cutPointNumber);
  }

  return arr;
};

exports.default = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var googleMaps = _ref.googleMaps,
      path = _ref.path;
  var polylineElem = new googleMaps.Polyline({
    path: path,
    strokeColor: 'blue',
    strokeOpacity: 0.5,
    strokeWeight: 5,
    editable: false,
    clickable: false
  });
  return polylineElem;
};

exports.default = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var elements = _ref.elements;
  if (elements.length === 0) return 0;
  var arrId = [];
  elements.forEach(function (id) {
    arrId[id] = true;
  });
  var i;

  for (i = 0; i < arrId.length; i += 1) {
    if (arrId[i] !== true) {
      return i;
    }
  }

  return i;
};

exports.default = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDataOfMinDistanceToSegment = _interopRequireDefault(__webpack_require__(12));

var _fromLatLngToPoint = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var map = _ref.map,
      pointACoord = _ref.pointACoord,
      pointBCoord = _ref.pointBCoord,
      waypoints = _ref.waypoints,
      clickCoord = _ref.clickCoord;
  var waypointsCoord = []; // сохранение координат waypoint

  waypoints.forEach(function (coord) {
    waypointsCoord.push(coord.location);
  }); // создание массива с координатами включающими точки A и B

  var segmentPointsCoord = [pointACoord];
  segmentPointsCoord = segmentPointsCoord.concat(waypointsCoord, pointBCoord); // конвертация координат

  var clickCoordWorld = (0, _fromLatLngToPoint.default)({
    map: map,
    points: [clickCoord]
  })[0];
  var segmentPointsCoordWorld = (0, _fromLatLngToPoint.default)({
    map: map,
    points: segmentPointsCoord
  }); // получение масива сегментов c координатами

  var segmetsCoordWorld = [];

  for (var i = 0; i < segmentPointsCoordWorld.length - 1; i += 1) {
    var segment = [];
    segment[0] = segmentPointsCoordWorld[i];
    segment[1] = segmentPointsCoordWorld[i + 1];
    segmetsCoordWorld[i] = segment;
  } // определение номера ближайшего сегмента


  var closestDist = 256;
  var closestSegmentIndex = 0;
  segmetsCoordWorld.forEach(function (segmentCoord, segmentIndex) {
    var result = (0, _getDataOfMinDistanceToSegment.default)({
      point: clickCoordWorld,
      pointSeg1: segmentCoord[0],
      pointSeg2: segmentCoord[1]
    });

    if (result.dist < closestDist) {
      closestDist = result.dist;
      closestSegmentIndex = segmentIndex;
    }
  });
  return closestSegmentIndex;
};

exports.default = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fromLatLngToPoint5 = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var points = _ref.points,
      polyline = _ref.polyline,
      waypoints = _ref.waypoints,
      map = _ref.map;
  var data = {
    points: {
      A: {},
      B: {}
    },
    polyline: {},
    waypoints: {
      coord: [],
      id: []
    }
  }; // упаковка points

  if (points.A.coord && points.B.coord) {
    var _fromLatLngToPoint = (0, _fromLatLngToPoint5.default)({
      map: map,
      points: [points.A.coord]
    });

    var _fromLatLngToPoint2 = _slicedToArray(_fromLatLngToPoint, 1);

    data.points.A.coord = _fromLatLngToPoint2[0];

    var _fromLatLngToPoint3 = (0, _fromLatLngToPoint5.default)({
      map: map,
      points: [points.B.coord]
    });

    var _fromLatLngToPoint4 = _slicedToArray(_fromLatLngToPoint3, 1);

    data.points.B.coord = _fromLatLngToPoint4[0];
  } // упаковка polyline


  if (polyline.path) {
    data.polyline.path = (0, _fromLatLngToPoint5.default)({
      map: map,
      points: polyline.path
    });
  } // упаковка waypoints


  if (waypoints.id.length !== 0) {
    for (var i = 0; i < waypoints.id.length; i += 1) {
      var coord = waypoints.coord[i];
      var id = waypoints.id[i]; // если не stopover данные waypoint будут отправлены на сервер

      if (!coord.stopover) {
        data.waypoints.coord.push({
          location: (0, _fromLatLngToPoint5.default)({
            map: map,
            points: [coord.location]
          })[0],
          stopover: coord.stopover
        });
        data.waypoints.id.push(id);
      }
    }
  }

  return data;
};

exports.default = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var waypointIndex = _ref.waypointIndex,
      stopoversIndex = _ref.stopoversIndex;

  if (waypointIndex > stopoversIndex[0] && waypointIndex <= stopoversIndex[1]) {
    return true;
  }

  return false;
};

exports.default = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var waypoints = _ref.waypoints;
  var firstStopoverIndex;
  var lastStopoverIndex;
  waypoints.forEach(function (waypoint, i) {
    if (firstStopoverIndex === undefined) {
      if (waypoint.stopover === true) {
        firstStopoverIndex = i;
      }

      return;
    }

    if (waypoint.stopover === true) {
      lastStopoverIndex = i;
    }
  });
  return [firstStopoverIndex, lastStopoverIndex];
};

exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-component=\"map-container\"\n     class=\"map-container\">\n</div>\n";
},"useData":true});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(83);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".map-container {\n  height: 100%; }\n", ""]);

// exports


/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tZHJpdmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2Zyb20tbGF0TG5nLXRvLXBvaW50LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9nZXQtZGF0YS1vZi1jbG9zZXN0LWNvb3JkLW9uLXBvbHlsaW5lLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9nZXQtZGF0YS1vZi1taW4tZGlzdGFuY2UtdG8tc2VnbWVudC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbG9hZC1nb29nbGUtbWFwcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFwL21vZHVsZXMvZHJpdmVyL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvdXRpbHMvaXMtb2JqLWVtcHR5LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9nZXQtY2xvc2VzdC1wb2ludC1udW1iZXItb24tcG9seWxpbmUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2dldC1kaXN0YW5jZS1iZXR3ZWVuLXBvaW50cy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZnJvbS1wb2ludC10by1sYXRMbmcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2RlZmluZS1wb2ludC1uYW1lLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9nZXQtc3RvcG92ZXItcG9pbnQtZWxlbS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFwL21vZHVsZXMvZHJpdmVyL2dldC1yb3V0ZS1lbGVtLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LW1hcmtlci1wb2ludC1lbGVtLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LXBvbHlsaW5lLXBhdGguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9nZXQtbWFya2VyLXdheXBvaW50LWVsZW0uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9jdXQtcG9seWxpbmUtcGF0aC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWFwL21vZHVsZXMvZHJpdmVyL2dldC1wb2x5bGluZS1lbGVtLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LWlkLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LXdheXBvaW50LWluZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvcGFja2FnaW5nLXVzZXItZGF0YS1kcml2ZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci93YXlwb2ludC1pbmRleC1pcy1iZXR3ZWVuLXN0b3BvdmVyLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LWluZGV4LW9mLWV4dHJlbWUtc3RvcG92ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC90ZW1wbGF0ZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3N0eWxlLnNjc3M/NWVlNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvc3R5bGUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBtYXAsIHBvaW50cyB9KSA9PiB7XG4gIGNvbnN0IGNvbnZlcnRpbmdQb2ludHMgPSBbXTtcbiAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgY29udmVydGluZ1BvaW50cy5wdXNoKG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvUG9pbnQocG9pbnQpKTtcbiAgfSk7XG4gIHJldHVybiBjb252ZXJ0aW5nUG9pbnRzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9mcm9tLWxhdExuZy10by1wb2ludC5qcyIsImltcG9ydCBnZXREYXRhT2ZNaW5EaXN0YW5jZVRvU2VnbWVudCBmcm9tICcuL2dldC1kYXRhLW9mLW1pbi1kaXN0YW5jZS10by1zZWdtZW50JztcbmltcG9ydCBnZXRDbG9zZXN0UG9pbnROdW1iZXJPblBvbHlsaW5lIGZyb20gJy4vZ2V0LWNsb3Nlc3QtcG9pbnQtbnVtYmVyLW9uLXBvbHlsaW5lJztcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBwb2ludCwgcG9seWxpbmUgfSkgPT4ge1xuICAvLyDQvtC/0YDQtdC00LXQu9C10L3QuNC1INC/0L7RgNGP0LTQutC+0LLQvtCz0L4g0L3QvtC80LXRgNCwINCx0LvQuNC20LDQudGI0LXQuSDRgtC+0YfQutC4INC/0L7Qu9C40LvQuNC90LjQuC5cbiAgY29uc3QgY2xvc2VzdFBvaW50TnVtYmVyID0gZ2V0Q2xvc2VzdFBvaW50TnVtYmVyT25Qb2x5bGluZSh7XG4gICAgcG9pbnQsXG4gICAgcG9seWxpbmUsXG4gIH0pO1xuXG4gIC8qXG4gICogICDQvtC/0YDQtdC00LXQvtC10L3QuNC1INCx0LvQuNC20LDQudGI0LXQuSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC/0L7Qu9C40LvQuNC90LjQuFxuICAqICAg0LTQsNC90L3QsNGPINC60L7QvtGA0LTQuNC90LDRgtCwINGA0LDRgdC/0L7Qu9C+0LbQtdC90LAg0L3QsCDQvtGC0YDQtdC30LrQtSDQv9GA0LjQu9C10LbQsNGJ0LXQvCDQuiDRgtC+0YfQutC1INGBINC90L7QvNC10YDQvtC8IGNsb3Nlc3RQb2ludE51bWJlclxuICAqICAg0Y3RgtC+INC80L7QttC10YIg0LHRi9GC0Ywg0L7RgtGA0LXQt9C+0Log0LTQviDQuNC70Lgg0L/QvtGB0LvQtSDRgtC+0YfQutC4INGBINC90L7QvNC10YDQvtC8IGNsb3Nlc3RQb2ludE51bWJlclxuICAqICAg0LTQu9GPINGB0YDQsNCy0L3QtdC90LjRjyDQsdC10YDQtdC8INC+0LHQsCDRjdGC0Lgg0L7RgtGA0LXQt9C60LBcbiAgKi9cblxuICAvLyDQvtC/0YDQtdC00LXQu9C10L3QuNC1INC+0YLRgNC10LfQutC+0LIg0LTQu9GPINGB0YDQsNCy0L3QtdC90LjRj1xuICBjb25zdCBmaXJzdFBvaW50T2ZQb2x5bGluZSA9IDA7XG4gIGNvbnN0IGxhc3RQb2ludE9mUG9seWxpbmUgPSBwb2x5bGluZS5sZW5ndGggLSAxO1xuICAvLyDQvtC/0YDQtdC00LXQu9C10L3QuNC1INC+0YLRgNC10LfQutC+0LIg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQv9GA0L7QstC10YDQuNGC0YxcbiAgY29uc3Qgc2VnbWVudHNGb3JDaGVjayA9IFtdO1xuICBpZiAoZmlyc3RQb2ludE9mUG9seWxpbmUgIT09IGNsb3Nlc3RQb2ludE51bWJlciAmJiBsYXN0UG9pbnRPZlBvbHlsaW5lICE9PSBjbG9zZXN0UG9pbnROdW1iZXIpIHtcbiAgICBzZWdtZW50c0ZvckNoZWNrWzBdID0gW2Nsb3Nlc3RQb2ludE51bWJlciAtIDEsIGNsb3Nlc3RQb2ludE51bWJlcl07XG4gICAgc2VnbWVudHNGb3JDaGVja1sxXSA9IFtjbG9zZXN0UG9pbnROdW1iZXIsIGNsb3Nlc3RQb2ludE51bWJlciArIDFdO1xuICB9XG4gIGlmIChmaXJzdFBvaW50T2ZQb2x5bGluZSA9PT0gY2xvc2VzdFBvaW50TnVtYmVyKSB7XG4gICAgc2VnbWVudHNGb3JDaGVja1swXSA9IFswLCAxXTtcbiAgfVxuICBpZiAobGFzdFBvaW50T2ZQb2x5bGluZSA9PT0gY2xvc2VzdFBvaW50TnVtYmVyKSB7XG4gICAgc2VnbWVudHNGb3JDaGVja1swXSA9IFtsYXN0UG9pbnRPZlBvbHlsaW5lIC0gMSwgbGFzdFBvaW50T2ZQb2x5bGluZV07XG4gIH1cbiAgLy8g0L7Qv9GA0LXQtNC10L7QtdC90LjQtSDQsdC70LjQttCw0LnRiNC10Lkg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsCDQv9C+0LvQuNC70LjQvdC40LhcbiAgbGV0IGNsb3Nlc3RQb2ludERpc3QgPSAyNTY7XG4gIGxldCBjbG9zZXN0UG9pbnRDb29yZDtcbiAgY29uc3QgY2xvc2VzdFNlZ21lbnQgPSBbXTtcbiAgc2VnbWVudHNGb3JDaGVjay5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0RGF0YU9mTWluRGlzdGFuY2VUb1NlZ21lbnQoe1xuICAgICAgcG9pbnQsXG4gICAgICBwb2ludFNlZzE6IHBvbHlsaW5lW3NlZ21lbnRbMF1dLFxuICAgICAgcG9pbnRTZWcyOiBwb2x5bGluZVtzZWdtZW50WzFdXSxcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQuZGlzdCA8IGNsb3Nlc3RQb2ludERpc3QpIHtcbiAgICAgIGNsb3Nlc3RQb2ludERpc3QgPSByZXN1bHQuZGlzdDtcbiAgICAgIGNsb3Nlc3RQb2ludENvb3JkID0gcmVzdWx0LmNvb3JkO1xuICAgICAgW2Nsb3Nlc3RTZWdtZW50WzBdLCBjbG9zZXN0U2VnbWVudFsxXV0gPSBzZWdtZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb29yZDogY2xvc2VzdFBvaW50Q29vcmQsXG4gICAgc2VnbWVudDogY2xvc2VzdFNlZ21lbnQsXG4gICAgZGlzdDogY2xvc2VzdFBvaW50RGlzdCxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZ2V0LWRhdGEtb2YtY2xvc2VzdC1jb29yZC1vbi1wb2x5bGluZS5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IHBvaW50LCBwb2ludFNlZzEsIHBvaW50U2VnMiB9KSA9PiB7XG4gIGNvbnN0IGdldFZlY3RvciA9IChwb2ludDEsIHBvaW50MikgPT4ge1xuICAgIGNvbnN0IHZlY3RvciA9IFtdO1xuICAgIHZlY3Rvci54ID0gcG9pbnQyLnggLSBwb2ludDEueDtcbiAgICB2ZWN0b3IueSA9IHBvaW50Mi55IC0gcG9pbnQxLnk7XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfTtcblxuICBjb25zdCB2ZWN0b3JQcm9kdWN0ID0gKHZlY3RvckEsIHZlY3RvckIpID0+ICh2ZWN0b3JBLnggKiB2ZWN0b3JCLngpICsgKHZlY3RvckEueSAqIHZlY3RvckIueSk7XG5cbiAgY29uc3QgZGlzdCA9IHZlY3RvciA9PiBNYXRoLnNxcnQoKHZlY3Rvci54ICogdmVjdG9yLngpICsgKHZlY3Rvci55ICogdmVjdG9yLnkpKTtcblxuICBjb25zdCB2ZWN0b3IxID0gZ2V0VmVjdG9yKHBvaW50U2VnMSwgcG9pbnQpO1xuICBjb25zdCB2ZWN0b3JTZWcgPSBnZXRWZWN0b3IocG9pbnRTZWcxLCBwb2ludFNlZzIpO1xuXG4gIGNvbnN0IGMxID0gdmVjdG9yUHJvZHVjdCh2ZWN0b3IxLCB2ZWN0b3JTZWcpO1xuXG4gIGlmIChjMSA8PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3Q6IGRpc3QodmVjdG9yMSksXG4gICAgICBjb29yZDogcG9pbnRTZWcxLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBjMiA9IHZlY3RvclByb2R1Y3QodmVjdG9yU2VnLCB2ZWN0b3JTZWcpO1xuXG4gIGlmIChjMiA8PSBjMSkge1xuICAgIGNvbnN0IHZlY3RvcjIgPSBnZXRWZWN0b3IocG9pbnQsIHBvaW50U2VnMik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3Q6IGRpc3QodmVjdG9yMiksXG4gICAgICBjb29yZDogcG9pbnRTZWcyLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBiID0gYzEgLyBjMjtcbiAgY29uc3QgcG9pbnRQZXJwZW5kaWN1bGFyID0ge307XG4gIHBvaW50UGVycGVuZGljdWxhci54ID0gcG9pbnRTZWcxLnggKyAodmVjdG9yU2VnLnggKiBiKTtcbiAgcG9pbnRQZXJwZW5kaWN1bGFyLnkgPSBwb2ludFNlZzEueSArICh2ZWN0b3JTZWcueSAqIGIpO1xuXG4gIGNvbnN0IHZlY3RvclBlcnBlbmRpY3VsYXIgPSBnZXRWZWN0b3IocG9pbnQsIHBvaW50UGVycGVuZGljdWxhcik7XG5cbiAgcmV0dXJuIHtcbiAgICBkaXN0OiBkaXN0KHZlY3RvclBlcnBlbmRpY3VsYXIpLFxuICAgIGNvb3JkOiBwb2ludFBlcnBlbmRpY3VsYXIsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2dldC1kYXRhLW9mLW1pbi1kaXN0YW5jZS10by1zZWdtZW50LmpzIiwiaW1wb3J0IHJvdXRlciBmcm9tICdyb3V0ZXInO1xuaW1wb3J0IGxvYWRHb29nbGVNYXBzIGZyb20gJy4vbG9hZC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgTWFwTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9kcml2ZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJzsgLy8gcmVtcGxhdGVcbmltcG9ydCAnLi9zdHlsZS5zY3NzJzsgLy8gY3NzXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5lbGVtZW50cy5tYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb21wb25lbnQ9XCJtYXAtY29udGFpbmVyXCJdJyk7XG5cbiAgICBsb2FkR29vZ2xlTWFwcyh0aGlzLmVsZW1lbnRzLm1hcENvbnRhaW5lcilcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5Hb29nbGVNYXBzID0gd2luZG93Lmdvb2dsZS5tYXBzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMubWFwID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXAodGhpcy5lbGVtZW50cy5tYXBDb250YWluZXIsIHtcbiAgICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgIGxhdDogNTAuNDQ4ODUzLFxuICAgICAgICAgICAgbG5nOiAzMC41MTMzNDYsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB6b29tOiAxNCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vINGB0L7QsdGL0YLQuNC1INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INCf0YDQvtC10LrRhtC40LguINCU0L4g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0L3QtSDRgNCw0LHQvtGC0LDQtdGCINC60L7QvdCy0LXRgNGC0LDRhtC40Y8g0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5tYXAuYWRkTGlzdGVuZXIoJ3Byb2plY3Rpb25fY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8g0LXRgdC70Lgg0L/QvtC80LXQvdGP0LvRgdGPIHJvdXRlSGFzaCDQtNC+INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC60LDRgNGC0YtcbiAgICAgICAgaWYgKHJvdXRlci5nZXRSb3V0ZUhhc2goKS5tYXRjaCgvXmFwcGxpY2F0aW9uLiokLylbMF0gIT09ICdhcHBsaWNhdGlvbicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LfQsNCz0YDRg9C30LrQsCDQuCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRhNGD0L3QutGG0LjQvtC90LDQu9CwINC00LvRjyDRgNC10LbQuNC80LAgXCJkcml2ZXIvcGFzc2VuZ2VyXCJcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYXBNb2R1bGUgPSBuZXcgTWFwTW9kdWxlKHtcbiAgICAgIGdvb2dsZU1hcHM6IHRoaXMuR29vZ2xlTWFwcyxcbiAgICAgIG1hcDogdGhpcy5jb21wb25lbnRzLm1hcCxcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLm1hcE1vZHVsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1hcE1vZHVsZS5kZXN0cm95KCk7XG4gICAgdGhpcy5tYXBNb2R1bGUgPSBudWxsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFwL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5QTFhcVZEVEdtZS1hNnFQVGRIRzNhSXFHUmJqSEhzOE1NJmNhbGxiYWNrPWluaXRNYXAnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgIHdpbmRvdy5pbml0TWFwID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXAvbG9hZC1nb29nbGUtbWFwcy5qcyIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCBzaW1iaW96QXBpIGZyb20gJ3NpbWJpb3otYXBpL2RyaXZlci1hcGknO1xuaW1wb3J0IGlzT2JqRW1wdHkgZnJvbSAndXRpbHMvaXMtb2JqLWVtcHR5JztcbmltcG9ydCBnZXREYXRhT2ZDbG9zZXN0Q29vcmRPblBvbHlsaW5lIGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZ2V0LWRhdGEtb2YtY2xvc2VzdC1jb29yZC1vbi1wb2x5bGluZSc7XG5pbXBvcnQgZnJvbVBvaW50VG9MYXRMbmcgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9mcm9tLXBvaW50LXRvLWxhdExuZyc7XG5pbXBvcnQgZGVmaW5lUG9pbnROYW1lIGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZGVmaW5lLXBvaW50LW5hbWUnO1xuaW1wb3J0IGZyb21MYXRMbmdUb1BvaW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZnJvbS1sYXRMbmctdG8tcG9pbnQnO1xuaW1wb3J0IGdldFN0b3BvdmVyUG9pbnRFbGVtIGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZ2V0LXN0b3BvdmVyLXBvaW50LWVsZW0nO1xuaW1wb3J0IGdldFJvdXRlRWxlbSBmcm9tICcuL2dldC1yb3V0ZS1lbGVtJztcbmltcG9ydCBnZXRNYXJrZXJQb2ludEVsZW0gZnJvbSAnLi9nZXQtbWFya2VyLXBvaW50LWVsZW0nO1xuaW1wb3J0IGdldFBvbHlsaW5lUGF0aCBmcm9tICcuL2dldC1wb2x5bGluZS1wYXRoJztcbmltcG9ydCBnZXRNYXJrZXJXYXlQb2ludEVsZW0gZnJvbSAnLi9nZXQtbWFya2VyLXdheXBvaW50LWVsZW0nO1xuaW1wb3J0IGN1dFBvbHlsaW5lUGF0aCBmcm9tICcuL2N1dC1wb2x5bGluZS1wYXRoJztcbmltcG9ydCBnZXRQb2x5bGluZUVsZW0gZnJvbSAnLi9nZXQtcG9seWxpbmUtZWxlbSc7XG5pbXBvcnQgZ2V0SWQgZnJvbSAnLi9nZXQtaWQnO1xuaW1wb3J0IGdldFdheXBvaW50SW5kZXggZnJvbSAnLi9nZXQtd2F5cG9pbnQtaW5kZXgnO1xuaW1wb3J0IHBhY2thZ2luZ1VzZXJEYXRhRHJpdmVyIGZyb20gJy4vcGFja2FnaW5nLXVzZXItZGF0YS1kcml2ZXInO1xuaW1wb3J0IHdheXBvaW50SW5kZXhJc0JldHdlZW5TdG9wb3ZlciBmcm9tICcuL3dheXBvaW50LWluZGV4LWlzLWJldHdlZW4tc3RvcG92ZXInO1xuaW1wb3J0IGdldEluZGV4T2ZFeHRyZW1lU3RvcG92ZXJzIGZyb20gJy4vZ2V0LWluZGV4LW9mLWV4dHJlbWUtc3RvcG92ZXJzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcml2ZXJNb2Qge1xuICBjb25zdHJ1Y3Rvcih7IGdvb2dsZU1hcHMsIG1hcCB9KSB7XG4gICAgdGhpcy5zdWJzY3JpYmUgPSB7fTtcbiAgICB0aGlzLmdvb2dsZU1hcHMgPSBnb29nbGVNYXBzO1xuICAgIHRoaXMubWFwID0gbWFwO1xuICAgIC8vIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcblxuICAgIHRoaXMucG9pbnRzID0ge1xuICAgICAgQToge30sXG4gICAgICBCOiB7fSxcbiAgICB9O1xuICAgIHRoaXMud2F5cG9pbnRzID0ge1xuICAgICAgY29vcmQ6IFtdLCAvLyDQvNCw0YHRgdC40LIg0YEg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4IHdheXBvaW50cy4g0J3QvtC80LXRgCDRgdCy0L7QudGB0YLQstCwINGD0LrQsNC30YvQstCw0LXRgiDQvdCwINC/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YAgd2F5cG9pbnQuXG4gICAgICBpZDogW10sIC8vINC90L7QvNC10YAg0YHQstC+0LnRgdGC0LLQsCDRg9C60LDQt9GL0LLQsNC10YIg0L3QsCDQv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAIHdheXBvaW50LtCX0L3QsNGH0LXQvdC40LUg0YHQstC+0LnRgdGC0LLQsCDRg9C60LDQt9GL0LLQsNC10YIg0L3QsCBpZCB3YXlwb2ludCjQv9C+IGlkINC+0L/RgNC10LTQtdC70Y/QtdGC0YHRjyDQv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAIHdheXBvaW50KVxuICAgICAgbWFwRWxlbWVudHM6IHt9LCAvLyDQuNC80Y8g0YHQstC+0LnRgdGC0LLQsCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiBpZCB3YXlwb2ludC4g0LfQvdCw0YfQtdC90LjQtSDRgdCy0L7QudGB0YLQstCwIC0gbWFwRWxlbWVudFxuICAgIH07XG4gICAgdGhpcy5wb2x5bGluZSA9IHt9O1xuICAgIHRoaXMucm91dGVFbGVtID0gbnVsbDtcblxuICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja01hcC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlLmRlc3Ryb3lNYXAgPSBQdWJTdWIuc3Vic2NyaWJlKCdkZXN0cm95TWFwJywgdGhpcy5kZXN0cm95LmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuc3Vic2NyaWJlLmluaXRVc2VyRGF0YU1hcCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2luaXRVc2VyRGF0YU1hcCcsIHRoaXMuaW5pdFVzZXJEYXRhLmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuc3Vic2NyaWJlLnN0YXJ0U2VhcmNoID0gUHViU3ViLnN1YnNjcmliZSgnc3RhcnRTZWFyY2gnLCB0aGlzLnN0YXJ0U2VhcmNoLmJpbmQodGhpcywgeyB1cmw6ICcuL2RyaXZlci9zdGFydC1zZWFyY2gnIH0pKTtcbiAgfVxuXG5cbiAgb25DbGlja01hcChlKSB7XG4gICAgY29uc3QgcG9pbnROYW1lID0gZGVmaW5lUG9pbnROYW1lKHsgcG9pbnRzOiB0aGlzLnBvaW50cyB9KTtcblxuICAgIC8vINC10YHQu9C4INC90LXRgiDRgtC+0YfQutC4INCQINC40LvQuCDRgtC+0YfQutC4INCSXG4gICAgaWYgKHBvaW50TmFtZSkge1xuICAgICAgdGhpcy5jcmVhdGVQb2ludEVsZW0oe1xuICAgICAgICBjb29yZDogZS5sYXRMbmcsXG4gICAgICAgIHBvaW50TmFtZSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wb2ludHMuQS5tYXBFbGVtZW50cyAmJiB0aGlzLnBvaW50cy5CLm1hcEVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUm91dGUoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0Q29vcmRPZlBvaW50cygpO1xuICAgICAgICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoeyB1cmw6ICcuL2RyaXZlci9zYXZlLWRhdGEnIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0LXRgdGC0Ywg0YLQvtGH0LrQsCBBINC4INGC0L7Rh9C60LAgQlxuICAgIHRoaXMuY3JlYXRlV2F5cG9pbnQoeyBjb29yZDogZS5sYXRMbmcgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoeyB1cmw6ICcuL2RyaXZlci9zYXZlLWRhdGEnIH0pO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIG9uQ2xpY2tQb2ludChwb2ludE5hbWUpIHtcbiAgICB0aGlzLnJlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZSB9KTtcblxuICAgIC8vINC10YHQu9C4IHBvbHlsaW5lINC90LUg0YHQvtC30LTQsNC90LBcbiAgICBpZiAoIXRoaXMucG9seWxpbmUubWFwRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuc2VuZFRvU2VydmVyKHsgdXJsOiAnLi9kcml2ZXIvc2F2ZS1kYXRhJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcih7XG4gICAgICBhY3Rpb246ICdyZW1vdmUnLFxuICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgdGhpcy5wb2x5bGluZS5tYXBFbGVtZW50cy5wb2x5bGluZUVsZW0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8g0LXRgdC70Lggd2F5cG9pbnRzINC90LUg0YHQvtC30LTQsNC90YtcbiAgICBpZiAoaXNPYmpFbXB0eSh0aGlzLndheXBvaW50cy5tYXBFbGVtZW50cykpIHtcbiAgICAgIHRoaXMucG9seWxpbmUgPSB7fTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQvdC10YIg0YLQvtGH0LXQuiDQkCDQuCBCXG4gICAgaWYgKCF0aGlzLnBvaW50cy5BLm1hcEVsZW1lbnRzICYmICF0aGlzLnBvaW50cy5CLm1hcEVsZW1lbnRzKSB7XG4gICAgICAvLyDRg9C00LDQu9C40YLRjCDQstGB0LUgd2F5cG9pbnRcbiAgICAgIHRoaXMucmVtb3ZlV2F5cG9pbnRFbGVtZW50cygpO1xuICAgICAgdGhpcy5wb2x5bGluZSA9IHt9O1xuICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoeyB1cmw6ICcuL2RyaXZlci9zYXZlLWRhdGEnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INC10YHRgtGMINC+0LTQvdCwINC40Lcg0YLQvtGH0LXQuiDQuCB3YXlwb2ludCwg0L7RgtGA0LXQt9Cw0YLRjCDRg9GH0LDRgdGC0L7QuiDQvtGCINGC0L7Rh9C60Lgg0LTQviB3YXlwb2ludFxuICAgIHRoaXMuY3V0UG9seWxpbmUoeyBwb2ludE5hbWUgfSk7XG4gIH1cblxuXG4gIG9uQ2xpY2tXYXlwb2ludCh3YXlwb2ludElkKSB7XG4gICAgaWYgKCF0aGlzLnBvaW50cy5BLm1hcEVsZW1lbnRzIHx8ICF0aGlzLnBvaW50cy5CLm1hcEVsZW1lbnRzKSByZXR1cm47XG5cbiAgICB0aGlzLnJlbW92ZVdheXBvaW50RWxlbWVudHMod2F5cG9pbnRJZCk7XG4gICAgdGhpcy5jcmVhdGVSb3V0ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VuZFRvU2VydmVyKHsgdXJsOiAnLi9kcml2ZXIvc2F2ZS1kYXRhJyB9KTtcbiAgICAgIH0pO1xuICB9XG5cblxuICAvKlxuICAqICAg0YHQvtC30LTQsNC90LjQtSDQtdC70LXQvNC10L3RgtCwIHBvaW50LCDRgdC+0YXRgNCw0L3QtdC90LjQtSDQtNCw0L3QvdGL0YUsINC/0L7QvNC10YnQtdC90LjQtSDRjdC70LXQvNC10L3RgtCwINC90LAg0LrQsNGA0YLRg1xuICAqL1xuXG5cbiAgY3JlYXRlUG9pbnRFbGVtKHsgcG9pbnROYW1lLCBjb29yZCB9KSB7XG4gICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICBjb29yZCxcbiAgICAgIG1hcEVsZW1lbnRzOiB7fSxcbiAgICB9O1xuXG4gICAgY29uc3QgbWFya2VyUG9pbnRFbGVtID0gZ2V0TWFya2VyUG9pbnRFbGVtKHtcbiAgICAgIGdvb2dsZU1hcHM6IHRoaXMuZ29vZ2xlTWFwcyxcbiAgICAgIGNvb3JkLFxuICAgICAgbGFiZWw6IHBvaW50TmFtZSxcbiAgICB9KTtcblxuICAgIHBvaW50Lm1hcEVsZW1lbnRzLm1hcmtlclBvaW50RWxlbSA9IG1hcmtlclBvaW50RWxlbTtcbiAgICB0aGlzLnBvaW50c1twb2ludE5hbWVdID0gcG9pbnQ7XG5cbiAgICB0aGlzLmxhc3RDcmVhdGVkRWxlbSA9IHsgcG9pbnROYW1lIH07XG5cbiAgICB0aGlzLnJlbmRlcih7XG4gICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgbWFya2VyUG9pbnRFbGVtLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIG1hcmtlclBvaW50RWxlbS5hZGRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tQb2ludC5iaW5kKHRoaXMsIHBvaW50TmFtZSkpO1xuICB9XG5cblxuICAvKlxuICAqICAg0YPQtNCw0LvQtdC90LjQtSDQtNCw0L3Ri9GFINC+INGN0LvQtdC80LXQvdGC0LUgcG9pbnQsINGD0LTQsNC70LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQsCDRgSDQutCw0YDRgtGLXG4gICovXG5cblxuICByZW1vdmVQb2ludEVsZW0oeyBwb2ludE5hbWUgfSkge1xuICAgIHRoaXMucmVuZGVyKHtcbiAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgICBlbGVtZW50czogW1xuICAgICAgICB0aGlzLnBvaW50c1twb2ludE5hbWVdLm1hcEVsZW1lbnRzLm1hcmtlclBvaW50RWxlbSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgdGhpcy5wb2ludHNbcG9pbnROYW1lXSA9IHt9O1xuICB9XG5cbiAgLypcbiAgKiAgINGB0L7Qt9C00LDQvdC40LUg0LXQu9C10LzQtdC90YLQsCBwb2x5bGluZSwg0YHQvtGF0YDQsNC90LXQvdC40LUg0LTQsNC90L3Ri9GFLCDQv9C+0LzQtdGJ0LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQsCDQvdCwINC60LDRgNGC0YNcbiAgKi9cblxuICBjcmVhdGVQb2x5bGluZUVsZW0oeyBwb2x5bGluZVBhdGggfSkge1xuICAgIGNvbnN0IHBvbHlsaW5lID0ge1xuICAgICAgcGF0aDogW10sXG4gICAgICBtYXBFbGVtZW50czoge30sXG4gICAgfTtcblxuICAgIHBvbHlsaW5lLnBhdGggPSBwb2x5bGluZVBhdGg7XG5cbiAgICAvLyDQv9C+0LvRg9GH0LjRgtGMINGN0LvQtdC80LXQvdGCIHBvbHlsaW5lRWxlbVxuICAgIGNvbnN0IHBvbHlsaW5lRWxlbSA9IGdldFBvbHlsaW5lRWxlbSh7XG4gICAgICBnb29nbGVNYXBzOiB0aGlzLmdvb2dsZU1hcHMsXG4gICAgICBwYXRoOiBwb2x5bGluZVBhdGgsXG4gICAgfSk7XG5cbiAgICBwb2x5bGluZS5tYXBFbGVtZW50cy5wb2x5bGluZUVsZW0gPSBwb2x5bGluZUVsZW07XG4gICAgdGhpcy5wb2x5bGluZSA9IHBvbHlsaW5lO1xuXG4gICAgdGhpcy5yZW5kZXIoe1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgIHBvbHlsaW5lRWxlbSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuXG4gIC8qXG4gICogICDRg9C00LDQu9C10L3QuNC1INC00LDQvdGL0YUg0L4g0Y3Qu9C10LzQtdC90YLQtSBwb2x5bGluZSwg0YPQtNCw0LvQtdC90LjQtSDRjdC70LXQvNC10L3RgtCwINGBINC60LDRgNGC0YtcbiAgKi9cblxuXG4gIHJlbW92ZVBvbHlsaW5lRWxlbSgpIHtcbiAgICB0aGlzLnJlbmRlcih7XG4gICAgICBhY3Rpb246ICdyZW1vdmUnLFxuICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgdGhpcy5wb2x5bGluZS5tYXBFbGVtZW50cy5wb2x5bGluZUVsZW0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wb2x5bGluZS5wYXRoID0gW107XG4gIH1cblxuICAvKlxuICAqICAg0LrQvtC80L/Qu9C10LrRgdC90YvQuSDQvNC10YLQvtC0LCDRgdC+0LTQtdGA0LbQsNGJ0LjQuSDQsiDRgdC10LHQtSDRgdC+0LfQtNCw0L3QuNC1IHdheXBvaW50LCDQv9C10YDQtdGA0LDRgdGH0LXRgiDQvNCw0YDRiNGA0YPRgtCwLCDRgdC+0LfQtNCw0L3QuNC1INC/0L7Qu9C40LvQuNC90LjQuCwg0YDQtdC90LTQtdGA0LjQvdCzINGN0LvQtdC80LXQvdGC0L7Qsi4uLlxuICAqL1xuXG4gIGNyZWF0ZVdheXBvaW50KHsgY29vcmQgfSkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMud2F5cG9pbnRzLmNvb3JkLmxlbmd0aCA+PSAyMykgcmV0dXJuO1xuXG4gICAgICAvLyDRgdCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCB3YXlwb2ludElkXG4gICAgICBjb25zdCB3YXlwb2ludElkID0gZ2V0SWQoeyBlbGVtZW50czogdGhpcy53YXlwb2ludHMuaWQgfSk7XG5cbiAgICAgIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0L/QvtGA0Y/QtNC60L7QstGL0Lkg0L3QvtC80LXRgCB3YXlwb2ludFxuICAgICAgY29uc3Qgd2F5cG9pbnRJbmRleCA9IGdldFdheXBvaW50SW5kZXgoe1xuICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICBwb2ludEFDb29yZDogdGhpcy5wb2ludHMuQS5jb29yZCxcbiAgICAgICAgcG9pbnRCQ29vcmQ6IHRoaXMucG9pbnRzLkIuY29vcmQsXG4gICAgICAgIHdheXBvaW50czogdGhpcy53YXlwb2ludHMuY29vcmQsXG4gICAgICAgIGNsaWNrQ29vcmQ6IGNvb3JkLFxuICAgICAgfSk7XG5cbiAgICAgIC8vINC10YHQu9C4IHdheXBvaW50INC80LXQttC00YMgc3RvcG92ZXIsINC90LUg0YHQvtC30LTQsNCy0LDRgtGMIHdheXBvaW50XG4gICAgICBjb25zdCBzdG9wb3ZlcnNJbmRleCA9IGdldEluZGV4T2ZFeHRyZW1lU3RvcG92ZXJzKHsgd2F5cG9pbnRzOiB0aGlzLndheXBvaW50cy5jb29yZCB9KTtcbiAgICAgIGlmICh3YXlwb2ludEluZGV4SXNCZXR3ZWVuU3RvcG92ZXIoeyB3YXlwb2ludEluZGV4LCBzdG9wb3ZlcnNJbmRleCB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdheXBvaW50RWxlbSA9IHRoaXMuY3JlYXRlV2F5cG9pbnRFbGVtKHtcbiAgICAgICAgaWQ6IHdheXBvaW50SWQsXG4gICAgICAgIGluZGV4OiB3YXlwb2ludEluZGV4LFxuICAgICAgICBjb29yZCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyDQvdC10L7QsdGF0L7QtNC40LzQviDQtdGB0LvQuCBnZXRSb3V0ZSDQstC10YDQvdGD0LsgXCJaRVJPUkVTVUxUU1wiLlxuICAgICAgdGhpcy5sYXN0Q3JlYXRlZEVsZW0gPSB7IHdheXBvaW50SWQgfTtcblxuICAgICAgdGhpcy5jcmVhdGVSb3V0ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyDQv9C+0LvRg9GH0LjRgtGMINC60L7QvtGA0LTQuNC90LDRgtGDINC90LAg0YHQvtC30LTQsNC90L3QvtC5INC/0L7Qu9C40LvQuNC40L3QuNC4ICjQsdC70LjQttCw0LnRiNC10LUg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0L7RgiDQutC+0L7RgNC00LjQvdCw0YLRiyB3YXlwb2ludCDQtNC+INC/0L7Qu9C40LvQuNC90LjQuClcbiAgICAgICAgICBjb25zdCB3YXlwb2ludFdvcmxkQ29vcmQgPSBnZXREYXRhT2ZDbG9zZXN0Q29vcmRPblBvbHlsaW5lKHtcbiAgICAgICAgICAgIHBvaW50OiBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICAgIHBvaW50czogW2Nvb3JkXSxcbiAgICAgICAgICAgIH0pWzBdLFxuICAgICAgICAgICAgcG9seWxpbmU6IGZyb21MYXRMbmdUb1BvaW50KHtcbiAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnBvbHlsaW5lLnBhdGgsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNvb3JkO1xuXG4gICAgICAgICAgLy8g0LfQsNC80LXQvdC40YLRjCDQtNCw0L3QvdGL0LUg0L4gd2F5cG9pbnQg0LIg0L7QsdGK0LXQutGC0LUgdGhpcy53YXlwb2ludHNcbiAgICAgICAgICB0aGlzLnJlcGxhY2VXYXlwb2ludFBvc2l0aW9uKHtcbiAgICAgICAgICAgIHdheXBvaW50RWxlbSxcbiAgICAgICAgICAgIGNvb3JkOiBmcm9tUG9pbnRUb0xhdExuZyh7XG4gICAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICAgIHBvaW50czogW3dheXBvaW50V29ybGRDb29yZF0sXG4gICAgICAgICAgICB9KVswXSxcbiAgICAgICAgICAgIGluZGV4OiB3YXlwb2ludEluZGV4LFxuICAgICAgICAgICAgaWQ6IHdheXBvaW50SWQsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLypcbiAgKiAgINGB0L7Qt9C00LDQvdC40LUg0LXQu9C10LzQtdC90YLQsCB3YXlwb2ludHMsINGB0L7RhdGA0LDQvdC10L3QuNC1INC00LDQvdC90YvRhSwg0L/QvtC80LXRidC10L3QuNC1INGN0LvQtdC80LXQvdGC0LAg0L3QsCDQutCw0YDRgtGDXG4gICovXG5cbiAgY3JlYXRlV2F5cG9pbnRFbGVtKHtcbiAgICBpZCxcbiAgICBpbmRleCxcbiAgICBjb29yZCxcbiAgICBzdG9wb3ZlciA9IGZhbHNlLFxuICAgIGNvbG9yLFxuICAgIGxhYmVsLFxuICB9KSB7XG4gICAgLy8g0YHQvtC30LTQsNGC0YwgbWFwRWxlbWVudFxuICAgIGxldCB3YXlwb2ludEVsZW07XG5cbiAgICBpZiAoIXN0b3BvdmVyKSB7XG4gICAgICB3YXlwb2ludEVsZW0gPSBnZXRNYXJrZXJXYXlQb2ludEVsZW0oe1xuICAgICAgICBnb29nbGVNYXBzOiB0aGlzLmdvb2dsZU1hcHMsXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgIGNvb3JkLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0b3BvdmVyKSB7XG4gICAgICB3YXlwb2ludEVsZW0gPSBnZXRTdG9wb3ZlclBvaW50RWxlbSh7XG4gICAgICAgIGdvb2dsZU1hcHM6IHRoaXMuZ29vZ2xlTWFwcyxcbiAgICAgICAgY29vcmQsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBsYWJlbCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINC00L7QsdCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1INC+IHdheXBvaW50INCyINC+0LHRitC10LrRgiB0aGlzLndheXBvaW50c1xuICAgIHRoaXMuYWRkdFdheXBvaW50RGF0YSh7XG4gICAgICBjb29yZCxcbiAgICAgIGlkLFxuICAgICAgaW5kZXgsXG4gICAgICB3YXlwb2ludEVsZW0sXG4gICAgICBzdG9wb3ZlcixcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKHtcbiAgICAgIGFjdGlvbjogJ2FkZCcsXG4gICAgICBlbGVtZW50czogW1xuICAgICAgICB3YXlwb2ludEVsZW0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgaWYgKCFzdG9wb3Zlcikge1xuICAgICAgd2F5cG9pbnRFbGVtLmFkZExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja1dheXBvaW50LmJpbmQodGhpcywgaWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2F5cG9pbnRFbGVtO1xuICB9XG5cbiAgLypcbiAgKiAgINGD0LTQsNC70LXQvdC40LUg0LTQsNC90YvRhSDQviDRjdC70LXQvNC10L3RgtCw0YUgd2F5cG9pbnRzLCDRg9C00LDQu9C10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsiDRgSDQutCw0YDRgtGLXG4gICovXG5cbiAgcmVtb3ZlV2F5cG9pbnRFbGVtZW50cyh3YXlwb2ludElkKSB7XG4gICAgbGV0IHdheXBvaW50RWxlbWVudHM7XG5cbiAgICAvLyDRg9C00LDQu9C40YLRjCB3YXlwb2ludCBjINC30LDQtNCw0L3QvdGL0LwgaWRcbiAgICBpZiAodHlwZW9mIHdheXBvaW50SWQgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyDQvtC/0YDQtdC00LXQu9C40YLRjCDQv9C+0LfQuNGG0LjRjiB3YXlwb2ludFxuICAgICAgbGV0IHdheXBvaW50SW5kZXg7XG4gICAgICB0aGlzLndheXBvaW50cy5pZC5mb3JFYWNoKChpZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGlkID09PSB3YXlwb2ludElkKSB7XG4gICAgICAgICAgd2F5cG9pbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vINGD0LTQsNC70LjRgtGMINC00LDQvdC90YvQtSDQviB3YXlwb2ludFxuICAgICAgd2F5cG9pbnRFbGVtZW50cyA9IHRoaXMucmVtb3ZlV2F5cG9pbnREYXRhKHtcbiAgICAgICAgaWQ6IHdheXBvaW50SWQsXG4gICAgICAgIGluZGV4OiB3YXlwb2ludEluZGV4LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0YPQtNCw0LvQuNGC0Ywg0LLRgdC1IHdheXBvaW50c1xuICAgIGlmICh3YXlwb2ludElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHdheXBvaW50RWxlbWVudHMgPSB0aGlzLnJlbW92ZVdheXBvaW50RGF0YSgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKHtcbiAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgICBlbGVtZW50czogd2F5cG9pbnRFbGVtZW50cyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogICDQtNC+0LHQsNCy0LjRgtGMINC00LDQvdC90YvQtSDQviB3YXlwb2ludCDQsiDQvtCx0YrQtdC60YIgdGhpcy53YXlwb2ludHNcbiAgKi9cblxuICBhZGR0V2F5cG9pbnREYXRhKHtcbiAgICB3YXlwb2ludEVsZW0sXG4gICAgY29vcmQsXG4gICAgaWQsXG4gICAgaW5kZXgsXG4gICAgc3RvcG92ZXIsXG4gIH0pIHtcbiAgICAvLyDRgdC+0YXRgNCw0L3QuNGC0Ywgd2F5cG9pbnRJZCwg0LIg0L/QvtC30LjRhtC40Lggd2F5cG9pbnRJbmRleFxuICAgIHRoaXMud2F5cG9pbnRzLmlkLnNwbGljZShpbmRleCwgMCwgaWQpO1xuICAgIC8vINGB0L7RhdGA0LDQvdC40YLRjCB3YXlwb2ludNChb29yZCwg0LIg0L/QvtC30LjRhtC40Lggd2F5cG9pbnRJbmRleFxuICAgIHRoaXMud2F5cG9pbnRzLmNvb3JkLnNwbGljZShpbmRleCwgMCwge1xuICAgICAgbG9jYXRpb246IGNvb3JkLFxuICAgICAgc3RvcG92ZXIsXG4gICAgfSk7XG5cbiAgICAvLyDRgdC+0YXRgNCw0L3QuNGC0YwgbWFwRWxlbWVudFxuICAgIHRoaXMud2F5cG9pbnRzLm1hcEVsZW1lbnRzW2lkXSA9IHdheXBvaW50RWxlbTtcbiAgfVxuXG4gIC8qXG4gICogICDQt9Cw0LzQtdC90LjRgtGMINC00LDQvdC90YvQtSDQviB3YXlwb2ludCDQsiDQvtCx0YrQtdC60YLQtSB0aGlzLndheXBvaW50c1xuICAqL1xuXG4gIHJlcGxhY2VXYXlwb2ludFBvc2l0aW9uKHtcbiAgICBjb29yZCxcbiAgICBpbmRleCxcbiAgICBpZCxcbiAgICB3YXlwb2ludEVsZW0sXG4gIH0pIHtcbiAgICB0aGlzLndheXBvaW50cy5jb29yZFtpbmRleF0ubG9jYXRpb24gPSBjb29yZDtcbiAgICB0aGlzLndheXBvaW50cy5tYXBFbGVtZW50c1tpZF0gPSB3YXlwb2ludEVsZW07XG4gICAgd2F5cG9pbnRFbGVtLnNldFBvc2l0aW9uKGNvb3JkKTtcbiAgfVxuXG4gIC8qXG4gICogICDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0LUg0L4gd2F5cG9pbnRzINCyINC+0LHRitC10LrRgtC1IHRoaXMud2F5cG9pbnRzXG4gICovXG5cbiAgcmVtb3ZlV2F5cG9pbnREYXRhKHsgaWQsIGluZGV4IH0gPSB7fSkge1xuICAgIGNvbnN0IG1hcEVsZW1lbnRzID0gW107XG5cbiAgICAvLyDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0LUg0YPQutCw0LfQsNC90L3QvtCz0L4gd2F5cG9pbnRcbiAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJ1xuICAgICYmIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMud2F5cG9pbnRzLmlkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLndheXBvaW50cy5jb29yZC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBtYXBFbGVtZW50cy5wdXNoKHRoaXMud2F5cG9pbnRzLm1hcEVsZW1lbnRzW2lkXSk7XG4gICAgICBkZWxldGUgdGhpcy53YXlwb2ludHMubWFwRWxlbWVudHNbaWRdO1xuICAgIH1cbiAgICAvLyDRg9C00LDQu9C40YLRjCDQstGB0LUg0LTQsNC90L3Ri9C1XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWRcbiAgICAmJiBpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndheXBvaW50cy5pZC5mb3JFYWNoKCh3YXlwb2ludElkKSA9PiB7XG4gICAgICAgIG1hcEVsZW1lbnRzLnB1c2godGhpcy53YXlwb2ludHMubWFwRWxlbWVudHNbd2F5cG9pbnRJZF0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLndheXBvaW50cy5tYXBFbGVtZW50cyA9IHt9O1xuICAgICAgdGhpcy53YXlwb2ludHMuaWQgPSBbXTtcbiAgICAgIHRoaXMud2F5cG9pbnRzLmNvb3JkID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcEVsZW1lbnRzO1xuICB9XG5cbiAgLypcbiAgKiAgINC60L7QvNC/0LvQtdC60YHQvdGL0Lkg0LzQtdGC0L7QtCwg0YHQvtC00LXRgNC20LDRidC40Lkg0LIg0YHQtdCx0LUg0YDQsNGB0YfQtdGCINC80LDRgNGI0YDRg9GC0LAsINGD0LTQsNC70LXQvdC40LUg0L/QvtC70LjQu9C40L3QuNC4LCDRgdC+0LfQtNCw0L3QuNC1INC90L7QstC+0Lkg0L/QvtC70LjQu9C40L3QuNC4LCDRgNC10L3QtNC10YDQuNC90LMg0YDQvtC70LjQu9C40L3QuNC4Li4uXG4gICovXG5cbiAgY3JlYXRlUm91dGUoKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBnZXRSb3V0ZUVsZW0oe1xuICAgICAgICBnb29nbGVNYXBzOiB0aGlzLmdvb2dsZU1hcHMsXG4gICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50cy5BLmNvb3JkLFxuICAgICAgICBlbmQ6IHRoaXMucG9pbnRzLkIuY29vcmQsXG4gICAgICAgIHdheXBvaW50czogdGhpcy53YXlwb2ludHMuY29vcmQsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlRWxlbSA9IHJlc3BvbnNlO1xuICAgICAgICAgIC8vINC/0YDQuCDRg9C00LDRh9C90L7QvCDQv9C+0LvRg9GH0LXQvdC40Lgg0LTQsNC90L3Ri9GFLCDRgdCx0YDQvtGB0LjRgtGMIHRoaXMubGFzdENyZWF0ZWRFbGVtXG4gICAgICAgICAgdGhpcy5sYXN0Q3JlYXRlZEVsZW0gPSB7fTtcbiAgICAgICAgICAvLyDRg9C00LDQu9C40YLRjCDRgSDQutCw0YDRgtGLINC/0YDQtdC00YvQtNGD0YnQuNC5IHBvbHlsaW5lINC10YHQu9C4INC+0L0g0LHRi9C7XG4gICAgICAgICAgaWYgKHRoaXMucG9seWxpbmUubWFwRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUG9seWxpbmVFbGVtKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0LzQsNGB0YHQuNCyINGC0L7Rh9C10Log0YEg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4IHBvbHlsaW5lXG4gICAgICAgICAgY29uc3QgcG9seWxpbmVQYXRoID0gZ2V0UG9seWxpbmVQYXRoKHtcbiAgICAgICAgICAgIHJvdXRlRWxlbTogcmVzcG9uc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVQb2x5bGluZUVsZW0oeyBwb2x5bGluZVBhdGggfSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHN0YXR1cykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUud2FybihzdGF0dXMpO1xuICAgICAgICAgIHRoaXMuaGVuZGxlclplcm9SZXN1bHRzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvKlxuICAqICAg0YPQutC+0YDQsNGH0LjQstCw0L3QuNC1IHBvbHlsaW5lINC+0YIg0LLRi9Cx0YDQsNC90L3QvtC5IHBvaW50KEEg0LjQu9C4IEIpINC00L4g0LHQu9C40LbQsNC50YjQtdCz0L4gd2F5cG9pbnRcbiAgKi9cblxuICBjdXRQb2x5bGluZSh7IHBvaW50TmFtZSB9KSB7XG4gICAgLy8g0LHQtdGA0LXQvCDQv9C10YDQstGL0Lkg0LjQu9C4INC/0L7RgdC70LXQtNC90LjQuSB3YXlwb2ludFxuICAgIGNvbnN0IHdheXBvaW50Q29vcmQgPSAocG9pbnROYW1lID09PSAnQScpXG4gICAgICA/IHRoaXMud2F5cG9pbnRzLmNvb3JkWzBdLmxvY2F0aW9uXG4gICAgICA6IHRoaXMud2F5cG9pbnRzLmNvb3JkW3RoaXMud2F5cG9pbnRzLmNvb3JkLmxlbmd0aCAtIDFdLmxvY2F0aW9uO1xuXG4gICAgY29uc3QgY3V0TWV0aG9kID0gKHBvaW50TmFtZSA9PT0gJ0EnKVxuICAgICAgPyAnZW5kJ1xuICAgICAgOiAnYmVnaW5uaW5nJztcblxuICAgIHRoaXMucG9seWxpbmUucGF0aCA9IGN1dFBvbHlsaW5lUGF0aCh7XG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgY3V0UG9pbnRDb29yZDogd2F5cG9pbnRDb29yZCxcbiAgICAgIHBvbHlsaW5lUGF0aDogdGhpcy5wb2x5bGluZS5wYXRoLFxuICAgICAgY3V0TWV0aG9kLFxuICAgIH0pO1xuXG4gICAgdGhpcy5jcmVhdGVQb2x5bGluZUVsZW0oeyBwb2x5bGluZVBhdGg6IHRoaXMucG9seWxpbmUucGF0aCB9KTtcbiAgfVxuXG4gIC8qXG4gICogICDRgNC10L3QtNC10YDQuNC90LMg0LzQsNGB0YHQuNCy0LAg0Y3Qu9C10LzQtdC90YLQvtCyLiDQlNC+0LHQsNCy0LvRj9C10YIg0LjQu9C4INGD0LTQsNC70Y/QtdGCINGN0LTQtdC80LXQvdGC0Ysg0YEg0LrQsNGA0YLRi1xuICAqL1xuXG4gIHJlbmRlcih7IGVsZW1lbnRzLCBhY3Rpb24gfSkge1xuICAgIGxldCBhY3Rpb25GdW5jdGlvbjtcblxuICAgIGlmIChhY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICBhY3Rpb25GdW5jdGlvbiA9ICh7IG1hcEVsZW1lbnQgfSkgPT4ge1xuICAgICAgICBtYXBFbGVtZW50LnNldE1hcCh0aGlzLm1hcCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgYWN0aW9uRnVuY3Rpb24gPSAoeyBtYXBFbGVtZW50IH0pID0+IHtcbiAgICAgICAgbWFwRWxlbWVudC5zZXRNYXAobnVsbCk7XG4gICAgICAgIHRoaXMuZ29vZ2xlTWFwcy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKG1hcEVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGlvbkZ1bmN0aW9uKSByZXR1cm47XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChtYXBFbGVtZW50KSA9PiB7XG4gICAgICBhY3Rpb25GdW5jdGlvbih7IG1hcEVsZW1lbnQgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qXG4gICogICDRgNC10L3QtNC10YDQuNC90LMg0LzQsNGB0YHQuNCy0LAg0Y3Qu9C10LzQtdC90YLQvtCyLiDQlNC+0LHQsNCy0LvRj9C10YIg0LjQu9C4INGD0LTQsNC70Y/QtdGCINGN0LTQtdC80LXQvdGC0Ysg0YEg0LrQsNGA0YLRi1xuICAqL1xuXG5cbiAgYWRqdXN0Q29vcmRPZlBvaW50cygpIHtcbiAgICBjb25zdCBwb2x5bGluZUNvb3JkQSA9IHRoaXMucG9seWxpbmUucGF0aFswXTtcbiAgICB0aGlzLnBvaW50cy5BLm1hcEVsZW1lbnRzLm1hcmtlclBvaW50RWxlbS5zZXRQb3NpdGlvbihwb2x5bGluZUNvb3JkQSk7XG4gICAgdGhpcy5wb2ludHMuQS5jb29yZCA9IHBvbHlsaW5lQ29vcmRBO1xuXG4gICAgY29uc3QgcG9seWxpbmVDb29yZEIgPSB0aGlzLnBvbHlsaW5lLnBhdGhbdGhpcy5wb2x5bGluZS5wYXRoLmxlbmd0aCAtIDFdO1xuICAgIHRoaXMucG9pbnRzLkIubWFwRWxlbWVudHMubWFya2VyUG9pbnRFbGVtLnNldFBvc2l0aW9uKHBvbHlsaW5lQ29vcmRCKTtcbiAgICB0aGlzLnBvaW50cy5CLmNvb3JkID0gcG9seWxpbmVDb29yZEI7XG4gIH1cblxuICAvKlxuICAqICAg0YHQv9GA0Y/RgtCw0Y/RgtGMIHdheXBvaW50cyDQutC+0YLQvtGA0YvRhSDQvdCw0YXQvtC00Y/RgtGB0Y8g0LzQtdC20LTRgyDQtNCy0YPRhSDQutGA0LDQudC90LjRhSBzdG9wb3ZlclBvaW50c1xuICAqL1xuXG4gIGhpZGVXYXlwb2ludHNCZWV0d2VuU3RvcG92ZXIoKSB7XG4gICAgY29uc3Qgc3RvcG92ZXJzSW5kZXggPSBnZXRJbmRleE9mRXh0cmVtZVN0b3BvdmVycyh7IHdheXBvaW50czogdGhpcy53YXlwb2ludHMuY29vcmQgfSk7XG5cbiAgICB0aGlzLndheXBvaW50cy5jb29yZC5mb3JFYWNoKCh3YXlwb2ludCwgaSkgPT4ge1xuICAgICAgaWYgKHdheXBvaW50LnN0b3BvdmVyID09PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGlmICh3YXlwb2ludEluZGV4SXNCZXR3ZWVuU3RvcG92ZXIoe1xuICAgICAgICB3YXlwb2ludEluZGV4OiBpLFxuICAgICAgICBzdG9wb3ZlcnNJbmRleCxcbiAgICAgIH0pKSB7XG4gICAgICAgIGNvbnN0IG1hcEVsZW1lbnRJZCA9IHRoaXMud2F5cG9pbnRzLmlkW2ldO1xuICAgICAgICB0aGlzLndheXBvaW50cy5tYXBFbGVtZW50c1ttYXBFbGVtZW50SWRdLnNldENsaWNrYWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMud2F5cG9pbnRzLm1hcEVsZW1lbnRzW21hcEVsZW1lbnRJZF0uc2V0T3BhY2l0eSgwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogICDRgdC+0LfQtNCw0L3QuNC1INC10LvQtdC80LXQvdGC0L7QsiBzdG9wb3ZlclBvaW50cywg0YHQvtGF0YDQsNC90LXQvdC40LUg0LTQsNC90L3Ri9GFLCDQv9C+0LzQtdGJ0LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQsCDQvdCwINC60LDRgNGC0YNcbiAgKi9cblxuICBjcmF0ZVN0b3BvdmVyUG9pbnRzKHsgc3RvcG92ZXJQb2ludHMsIHBhc3NlbmdlckluZGV4IH0pIHtcbiAgICBjb25zdCBzdG9wb3ZlclBvaW50c05hbWUgPSBbJ0EnLCAnQiddO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2dyZWVuJyxcbiAgICAgICdibHVlJyxcbiAgICBdO1xuXG4gICAgc3RvcG92ZXJQb2ludHNOYW1lLmZvckVhY2goKHBvaW50TmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc3RvcG92ZXJQb2ludENvb3JkID0gZnJvbVBvaW50VG9MYXRMbmcoe1xuICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICBwb2ludHM6IFtzdG9wb3ZlclBvaW50c1twb2ludE5hbWVdLmNvb3JkXSxcbiAgICAgIH0pWzBdO1xuXG4gICAgICAvLyDRgdCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCB3YXlwb2ludElkXG4gICAgICBjb25zdCBzdG9wb3ZlclBvaW50c0lkID0gZ2V0SWQoeyBlbGVtZW50czogdGhpcy53YXlwb2ludHMuaWQgfSk7XG5cbiAgICAgIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0L/QvtGA0Y/QtNC60L7QstGL0Lkg0L3QvtC80LXRgCB3YXlwb2ludFxuICAgICAgY29uc3Qgc3RvcG92ZXJQb2ludHNJbmRleCA9IGdldFdheXBvaW50SW5kZXgoe1xuICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICBwb2ludEFDb29yZDogdGhpcy5wb2ludHMuQS5jb29yZCxcbiAgICAgICAgcG9pbnRCQ29vcmQ6IHRoaXMucG9pbnRzLkIuY29vcmQsXG4gICAgICAgIHdheXBvaW50czogdGhpcy53YXlwb2ludHMuY29vcmQsXG4gICAgICAgIGNsaWNrQ29vcmQ6IHN0b3BvdmVyUG9pbnRDb29yZCxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNyZWF0ZVdheXBvaW50RWxlbSh7XG4gICAgICAgIGlkOiBzdG9wb3ZlclBvaW50c0lkLFxuICAgICAgICBpbmRleDogc3RvcG92ZXJQb2ludHNJbmRleCxcbiAgICAgICAgY29vcmQ6IHN0b3BvdmVyUG9pbnRDb29yZCxcbiAgICAgICAgc3RvcG92ZXI6IHRydWUsXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbcGFzc2VuZ2VySW5kZXhdLFxuICAgICAgICBsYWJlbDogcG9pbnROYW1lLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAqICAg0L7QsdGA0LDQsdC+0YLQutCwINC90YPQu9C10LLQvtCz0L4g0L7RgtCy0LXRgtCwINC+0YIgZ29vZ2xlLiDQo9C00LDQu9GP0LXRgiDQv9C+0YHQu9C10LTQvdC40Lkg0Y3Qu9C10LzQtdC90YIg0YEg0LrQvtGC0L7RgNGL0Lwg0L3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0YHRh9C40YLQsNGC0Ywg0LzQsNGA0YjRgNGD0YJcbiAgKi9cblxuXG4gIGhlbmRsZXJaZXJvUmVzdWx0cygpIHtcbiAgICAvLyDQtdGB0LvQuCDQv9C+0YHQu9C10LTQvdC40Lkg0Y3Qu9C10LzQtdC90YIg0LHRi9C7IHdheXBvaW50XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhc3RDcmVhdGVkRWxlbS53YXlwb2ludElkID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5yZW1vdmVXYXlwb2ludEVsZW1lbnRzKHRoaXMubGFzdENyZWF0ZWRFbGVtLndheXBvaW50SWQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vINC10YHQu9C4INC/0L7RgdC70LXQtNC90LjQuSDRjdC70LXQvNC10L3RgiDQsdGL0LsgcG9pbnRcbiAgICBpZiAodGhpcy5sYXN0Q3JlYXRlZEVsZW0ucG9pbnROYW1lKSB7XG4gICAgICB0aGlzLnJlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZTogdGhpcy5sYXN0Q3JlYXRlZEVsZW0ucG9pbnROYW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICogICDRgdC+0YXRgNCw0L3QtdC90LjQtSDQtNCw0L3QvdGL0YUg0L3QsCDRgdC10YDQstC10YDQtVxuICAqL1xuXG4gIHNlbmRUb1NlcnZlcigpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gcGFja2FnaW5nVXNlckRhdGFEcml2ZXIoe1xuICAgICAgICAvLyB1c2VyTmFtZTogdGhpcy51c2VyRGF0YS51c2VyTmFtZSxcbiAgICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgICAgcG9seWxpbmU6IHRoaXMucG9seWxpbmUsXG4gICAgICAgIHJvdXRlRWxlbTogdGhpcy5yb3V0ZUVsZW0sXG4gICAgICAgIHdheXBvaW50czogdGhpcy53YXlwb2ludHMsXG4gICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgICBzaW1iaW96QXBpLnB1dE1hcERhdGEoe1xuICAgICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIGRhdGEgc3RhdHVzOicsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8qXG4gICogICDRgdC+0YXRgNCw0L3QtdC90LjQtSDQtNCw0L3QvdGL0YUg0L3QsCDRgdC10YDQstC10YDQtSwg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LpcbiAgKi9cblxuICBzdGFydFNlYXJjaCh7IHVybCB9KSB7XG4gICAgaWYgKHRoaXMuaW5TdGFydFNlYXJjaFByb2Nlc3MpIHJldHVybjtcbiAgICBpZiAoIXRoaXMucG9pbnRzLkEubWFwRWxlbWVudHMgfHwgIXRoaXMucG9pbnRzLkIubWFwRWxlbWVudHMpIHJldHVybjtcblxuICAgIHRoaXMuaW5TdGFydFNlYXJjaFByb2Nlc3MgPSB0cnVlO1xuXG4gICAgdGhpcy5zZW5kVG9TZXJ2ZXIoeyB1cmwgfSlcbiAgICAgIC50aGVuKChwYXNzZW5nZXJzRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmluU3RhcnRTZWFyY2hQcm9jZXNzID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveSkgcmV0dXJuO1xuICAgICAgICBpZiAocGFzc2VuZ2Vyc0RhdGEgPT09ICdtYXRjaGVzIHdhcyBub3QgZm91bmQnKSByZXR1cm47XG5cbiAgICAgICAgcGFzc2VuZ2Vyc0RhdGEuZm9yRWFjaCgocGFzc2VuZ2VyRGF0YSwgaSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3JhdGVTdG9wb3ZlclBvaW50cyh7XG4gICAgICAgICAgICBzdG9wb3ZlclBvaW50czogcGFzc2VuZ2VyRGF0YS5zdG9wb3ZlclBvaW50cyxcbiAgICAgICAgICAgIHBhc3NlbmdlckluZGV4OiBpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oaWRlV2F5cG9pbnRzQmVldHdlblN0b3BvdmVyKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogICDQvtGA0LDQsdC+0YLQutCwINC00LDQvdC90YvRhSDRgSDRgdC10YDQstC10YDQsCjRgdC+0YXRgNCw0L3QtdC90LjQtSDQsiDQvtCx0YrQtdC60YLQtSwg0YDQtdC90LTQtdGA0LjQvdCzKVxuICAqL1xuXG4gIGluaXRVc2VyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMudXNlckRhdGEuZHJpdmVyIHx8ICF0aGlzLnVzZXJEYXRhLmRyaXZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVzZXJEYXRhLmRyaXZlci5wb2ludHMuQS5jb29yZCAmJiB0aGlzLnVzZXJEYXRhLmRyaXZlci5wb2ludHMuQi5jb29yZCkge1xuICAgICAgdGhpcy5jcmVhdGVQb2ludEVsZW0oe1xuICAgICAgICBwb2ludE5hbWU6ICdBJyxcbiAgICAgICAgY29vcmQ6IGZyb21Qb2ludFRvTGF0TG5nKHtcbiAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgIHBvaW50czogW3RoaXMudXNlckRhdGEuZHJpdmVyLnBvaW50cy5BLmNvb3JkXSxcbiAgICAgICAgfSlbMF0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3JlYXRlUG9pbnRFbGVtKHtcbiAgICAgICAgcG9pbnROYW1lOiAnQicsXG4gICAgICAgIGNvb3JkOiBmcm9tUG9pbnRUb0xhdExuZyh7XG4gICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICBwb2ludHM6IFt0aGlzLnVzZXJEYXRhLmRyaXZlci5wb2ludHMuQi5jb29yZF0sXG4gICAgICAgIH0pWzBdLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXNlckRhdGEuZHJpdmVyLnBvbHlsaW5lLnBhdGgpIHtcbiAgICAgIHRoaXMuY3JlYXRlUG9seWxpbmVFbGVtKHtcbiAgICAgICAgcG9seWxpbmVQYXRoOiBmcm9tUG9pbnRUb0xhdExuZyh7XG4gICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICBwb2ludHM6IHRoaXMudXNlckRhdGEuZHJpdmVyLnBvbHlsaW5lLnBhdGgsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXNlckRhdGEuZHJpdmVyLndheXBvaW50cy5jb29yZC5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHdheXBvaW50c0Nvb3JkID0gdGhpcy51c2VyRGF0YS5kcml2ZXIud2F5cG9pbnRzLmNvb3JkO1xuXG4gICAgICB3YXlwb2ludHNDb29yZC5mb3JFYWNoKCh3YXlwb2ludENvb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IGZyb21Qb2ludFRvTGF0TG5nKHtcbiAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgIHBvaW50czogW3dheXBvaW50Q29vcmQubG9jYXRpb25dLFxuICAgICAgICB9KVswXTtcbiAgICAgICAgdGhpcy5jcmVhdGVXYXlwb2ludEVsZW0oe1xuICAgICAgICAgIGlkOiB0aGlzLnVzZXJEYXRhLmRyaXZlci53YXlwb2ludHMuaWRbaW5kZXhdLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGNvb3JkLFxuICAgICAgICAgIHN0b3BvdmVyOiB3YXlwb2ludENvb3JkLnN0b3BvdmVyLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICogICDRg9C00LDQu9C10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsiDRgSDQutCw0YDRgtGLLCDRg9C00LDQu9C10L3QuNC1INC00LDQvdC90YvRhSwg0L7RgtC/0LjRgdC60LAg0L7RgiDQstGB0LXRhSDRgdC+0LHRi9GC0LjQuVxuICAqL1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLkEubWFwRWxlbWVudHMpIHtcbiAgICAgIHRoaXMucmVtb3ZlUG9pbnRFbGVtKHsgcG9pbnROYW1lOiAnQScgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvaW50cy5CLm1hcEVsZW1lbnRzKSB7XG4gICAgICB0aGlzLnJlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZTogJ0InIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb2x5bGluZS5tYXBFbGVtZW50cykge1xuICAgICAgdGhpcy5yZW1vdmVQb2x5bGluZUVsZW0oKTtcbiAgICB9XG4gICAgaWYgKCFpc09iakVtcHR5KHRoaXMud2F5cG9pbnRzLm1hcEVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5yZW1vdmVXYXlwb2ludEVsZW1lbnRzKCk7XG4gICAgfVxuICAgIHRoaXMuZ29vZ2xlTWFwcy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKHRoaXMubWFwKTtcbiAgICBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy5zdWJzY3JpYmUuZGVzdHJveU1hcCk7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMuc3Vic2NyaWJlLmluaXRVc2VyRGF0YU1hcCk7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMuc3Vic2NyaWJlLnN0YXJ0U2VhcmNoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IChvYmopID0+IHtcbiAgY29uc3QgYXJyID0gT2JqZWN0LmtleXMob2JqKTtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9pcy1vYmotZW1wdHkuanMiLCJpbXBvcnQgZ2V0RGlzdGFuY2VCZXR3ZWVuUG9pbnRzIGZyb20gJy4vZ2V0LWRpc3RhbmNlLWJldHdlZW4tcG9pbnRzJztcblxuLy8g0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQv9C+0YDRj9C00LrQvtCy0L7Qs9C+INC90L7QvNC10YDQsCDQsdC70LjQttCw0LnRiNC10Lkg0YLQvtGH0LrQuCDQv9C+0LvQuNC70LjQvdC40LhcbmV4cG9ydCBkZWZhdWx0ICh7IHBvaW50LCBwb2x5bGluZSB9KSA9PiB7XG4gIGxldCBtaW5EaXN0YW5jZVRvUG9seWxpbmVQb2ludCA9IDI1NjtcbiAgbGV0IGNsb3Nlc3RQb2ludE51bWJlciA9IDA7XG5cbiAgcG9seWxpbmUuZm9yRWFjaCgocG9seWxpbmVQb2ludENvb3JkLCBwb2ludE51bWJlcikgPT4ge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gZ2V0RGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHtcbiAgICAgIHBvaW50MTogcG9pbnQsXG4gICAgICBwb2ludDI6IHBvbHlsaW5lUG9pbnRDb29yZCxcbiAgICB9KTtcblxuICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlVG9Qb2x5bGluZVBvaW50KSB7XG4gICAgICBtaW5EaXN0YW5jZVRvUG9seWxpbmVQb2ludCA9IGRpc3RhbmNlO1xuICAgICAgY2xvc2VzdFBvaW50TnVtYmVyID0gcG9pbnROdW1iZXI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNsb3Nlc3RQb2ludE51bWJlcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZ2V0LWNsb3Nlc3QtcG9pbnQtbnVtYmVyLW9uLXBvbHlsaW5lLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHsgcG9pbnQxLCBwb2ludDIgfSkgPT4ge1xuICBjb25zdCB2ZWN0b3IgPSB7fTtcbiAgdmVjdG9yLnggPSBwb2ludDIueCAtIHBvaW50MS54O1xuICB2ZWN0b3IueSA9IHBvaW50Mi55IC0gcG9pbnQxLnk7XG5cbiAgcmV0dXJuIE1hdGguc3FydCgodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9nZXQtZGlzdGFuY2UtYmV0d2Vlbi1wb2ludHMuanMiLCJleHBvcnQgZGVmYXVsdCAoeyBtYXAsIHBvaW50cyB9KSA9PiB7XG4gIGNvbnN0IGNvbnZlcnRpbmdQb2ludHMgPSBbXTtcbiAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgY29udmVydGluZ1BvaW50cy5wdXNoKG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbVBvaW50VG9MYXRMbmcocG9pbnQpKTtcbiAgfSk7XG4gIHJldHVybiBjb252ZXJ0aW5nUG9pbnRzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9mcm9tLXBvaW50LXRvLWxhdExuZy5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IHBvaW50cyB9KSA9PiB7XG4gIGlmICghcG9pbnRzLkEubWFwRWxlbWVudHMpIHtcbiAgICByZXR1cm4gJ0EnO1xuICB9XG4gIGlmIChwb2ludHMuQS5tYXBFbGVtZW50cyAmJiAhcG9pbnRzLkIubWFwRWxlbWVudHMpIHtcbiAgICByZXR1cm4gJ0InO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9fX3NoYXJlZC9tYXAtbW9kdWxlcy9kZWZpbmUtcG9pbnQtbmFtZS5qcyIsImV4cG9ydCBkZWZhdWx0ICh7XG4gIGdvb2dsZU1hcHMsXG4gIGNvb3JkLFxuICBsYWJlbCxcbiAgY29sb3IsXG59KSA9PiB7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGVNYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3JkLFxuICAgIGljb246IHtcbiAgICAgIHBhdGg6IGdvb2dsZU1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXG4gICAgICBzdHJva2VDb2xvcjogY29sb3IsXG4gICAgICBzdHJva2VXZWlnaHQ6IDIsXG4gICAgICBmaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgICBmaWxsT3BhY2l0eTogMC44LFxuICAgICAgc2NhbGU6IDgsXG4gICAgfSxcbiAgICBsYWJlbCxcbiAgICBjbGlja2FibGU6IGZhbHNlLFxuICB9KTtcblxuICBtYXJrZXIuc2V0WkluZGV4KDEwMCk7XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZ2V0LXN0b3BvdmVyLXBvaW50LWVsZW0uanMiLCJcbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGdvb2dsZU1hcHMsXG4gIHdheXBvaW50cyxcbiAgc3RhcnQsXG4gIGVuZCxcbn0pID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBvcmlnaW46IHN0YXJ0LFxuICAgIGRlc3RpbmF0aW9uOiBlbmQsXG4gICAgdHJhdmVsTW9kZTogJ0RSSVZJTkcnLFxuICAgIHdheXBvaW50cyxcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGVNYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG5cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCAocmVzcG9uc2UsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LXJvdXRlLWVsZW0uanMiLCJleHBvcnQgZGVmYXVsdCAoe1xuICBnb29nbGVNYXBzLFxuICBjb29yZCxcbiAgbGFiZWwsXG59KSA9PiB7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGVNYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3JkLFxuICAgIGxhYmVsOiB7XG4gICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9nZXQtbWFya2VyLXBvaW50LWVsZW0uanMiLCJcbmV4cG9ydCBkZWZhdWx0ICh7IHJvdXRlRWxlbSB9KSA9PiB7XG4gIGNvbnN0IG15Um91dGUgPSByb3V0ZUVsZW0ucm91dGVzWzBdLmxlZ3M7XG4gIGNvbnN0IHBvaW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbXlSb3V0ZS5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlSb3V0ZVtrXS5zdGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBteVJvdXRlW2tdLnN0ZXBzW2ldLmxhdF9sbmdzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKG15Um91dGVba10uc3RlcHNbaV0ubGF0X2xuZ3Nbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9nZXQtcG9seWxpbmUtcGF0aC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZ29vZ2xlTWFwcyxcbiAgbWFwLFxuICBjb29yZCxcbn0pID0+IHtcbiAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZU1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjogY29vcmQsXG4gICAgbWFwLFxuICAgIGljb246IHtcbiAgICAgIHBhdGg6IGdvb2dsZU1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXG4gICAgICBzdHJva2VDb2xvcjogJ2JsdWUnLFxuICAgICAgc3Ryb2tlV2VpZ2h0OiAxLFxuICAgICAgZmlsbENvbG9yOiAnd2hpdGUnLFxuICAgICAgZmlsbE9wYWNpdHk6IDAuOSxcbiAgICAgIHNjYWxlOiA1LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9nZXQtbWFya2VyLXdheXBvaW50LWVsZW0uanMiLCJpbXBvcnQgZ2V0RGF0YU9mQ2xvc2VzdENvb3JkT25Qb2x5bGluZSBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2dldC1kYXRhLW9mLWNsb3Nlc3QtY29vcmQtb24tcG9seWxpbmUnO1xuaW1wb3J0IGZyb21MYXRMbmdUb1BvaW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZnJvbS1sYXRMbmctdG8tcG9pbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIG1hcCxcbiAgY3V0UG9pbnRDb29yZCxcbiAgY3V0TWV0aG9kLFxuICBwb2x5bGluZVBhdGgsXG59KSA9PiB7XG4gIGNvbnN0IHBvbHlsaW5lU2VnbWVudCA9IGdldERhdGFPZkNsb3Nlc3RDb29yZE9uUG9seWxpbmUoe1xuICAgIG1hcCxcbiAgICBwb2ludDogZnJvbUxhdExuZ1RvUG9pbnQoe1xuICAgICAgbWFwLFxuICAgICAgcG9pbnRzOiBbY3V0UG9pbnRDb29yZF0sXG4gICAgfSlbMF0sXG4gICAgcG9seWxpbmU6IGZyb21MYXRMbmdUb1BvaW50KHtcbiAgICAgIG1hcCxcbiAgICAgIHBvaW50czogcG9seWxpbmVQYXRoLFxuICAgIH0pLFxuICB9KVxuICAgIC5zZWdtZW50WzBdO1xuXG4gIGNvbnN0IGN1dFBvaW50TnVtYmVyID0gcG9seWxpbmVTZWdtZW50ICsgMTtcblxuICBwb2x5bGluZVBhdGguc3BsaWNlKGN1dFBvaW50TnVtYmVyLCAwLCBjdXRQb2ludENvb3JkKTtcblxuICAvLyDQsdC10YDQtdC8INC90LDRh9Cw0LvQviDQuNC70Lgg0LrQvtC90LXRhiDQvNCw0YHRgdC40LLQsFxuICBsZXQgYXJyID0gW107XG4gIGlmIChjdXRNZXRob2QgPT09ICdiZWdpbm5pbmcnKSB7XG4gICAgYXJyID0gcG9seWxpbmVQYXRoLnNsaWNlKDAsIGN1dFBvaW50TnVtYmVyICsgMSk7XG4gIH1cbiAgaWYgKGN1dE1ldGhvZCA9PT0gJ2VuZCcpIHtcbiAgICBhcnIgPSBwb2x5bGluZVBhdGguc2xpY2UoY3V0UG9pbnROdW1iZXIpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9jdXQtcG9seWxpbmUtcGF0aC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgKCh7IGdvb2dsZU1hcHMsIHBhdGggfSkgPT4ge1xuICBjb25zdCBwb2x5bGluZUVsZW0gPSBuZXcgZ29vZ2xlTWFwcy5Qb2x5bGluZSh7XG4gICAgcGF0aCxcbiAgICBzdHJva2VDb2xvcjogJ2JsdWUnLFxuICAgIHN0cm9rZU9wYWNpdHk6IDAuNSxcbiAgICBzdHJva2VXZWlnaHQ6IDUsXG4gICAgZWRpdGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gIH0pO1xuXG4gIHJldHVybiBwb2x5bGluZUVsZW07XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LXBvbHlsaW5lLWVsZW0uanMiLCJcbmV4cG9ydCBkZWZhdWx0ICh7IGVsZW1lbnRzIH0pID0+IHtcbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG5cbiAgY29uc3QgYXJySWQgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGFycklkW2lkXSA9IHRydWU7XG4gIH0pO1xuXG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgYXJySWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJySWRbaV0gIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFwL21vZHVsZXMvZHJpdmVyL2dldC1pZC5qcyIsImltcG9ydCBnZXREYXRhT2ZNaW5EaXN0YW5jZVRvU2VnbWVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2dldC1kYXRhLW9mLW1pbi1kaXN0YW5jZS10by1zZWdtZW50JztcbmltcG9ydCBmcm9tTGF0TG5nVG9Qb2ludCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL21hcC1tb2R1bGVzL2Zyb20tbGF0TG5nLXRvLXBvaW50JztcblxuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBtYXAsXG4gIHBvaW50QUNvb3JkLFxuICBwb2ludEJDb29yZCxcbiAgd2F5cG9pbnRzLFxuICBjbGlja0Nvb3JkLFxufSkgPT4ge1xuICBjb25zdCB3YXlwb2ludHNDb29yZCA9IFtdO1xuXG4gIC8vINGB0L7RhdGA0LDQvdC10L3QuNC1INC60L7QvtGA0LTQuNC90LDRgiB3YXlwb2ludFxuICB3YXlwb2ludHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICB3YXlwb2ludHNDb29yZC5wdXNoKGNvb3JkLmxvY2F0aW9uKTtcbiAgfSk7XG5cbiAgLy8g0YHQvtC30LTQsNC90LjQtSDQvNCw0YHRgdC40LLQsCDRgSDQutC+0L7RgNC00LjQvdCw0YLQsNC80Lgg0LLQutC70Y7Rh9Cw0Y7RidC40LzQuCDRgtC+0YfQutC4IEEg0LggQlxuICBsZXQgc2VnbWVudFBvaW50c0Nvb3JkID0gW3BvaW50QUNvb3JkXTtcbiAgc2VnbWVudFBvaW50c0Nvb3JkID0gc2VnbWVudFBvaW50c0Nvb3JkLmNvbmNhdCh3YXlwb2ludHNDb29yZCwgcG9pbnRCQ29vcmQpO1xuXG4gIC8vINC60L7QvdCy0LXRgNGC0LDRhtC40Y8g0LrQvtC+0YDQtNC40L3QsNGCXG4gIGNvbnN0IGNsaWNrQ29vcmRXb3JsZCA9IGZyb21MYXRMbmdUb1BvaW50KHtcbiAgICBtYXAsXG4gICAgcG9pbnRzOiBbY2xpY2tDb29yZF0sXG4gIH0pWzBdO1xuXG4gIGNvbnN0IHNlZ21lbnRQb2ludHNDb29yZFdvcmxkID0gZnJvbUxhdExuZ1RvUG9pbnQoe1xuICAgIG1hcCxcbiAgICBwb2ludHM6IHNlZ21lbnRQb2ludHNDb29yZCxcbiAgfSk7XG5cbiAgLy8g0L/QvtC70YPRh9C10L3QuNC1INC80LDRgdC40LLQsCDRgdC10LPQvNC10L3RgtC+0LIgYyDQutC+0L7RgNC00LjQvdCw0YLQsNC80LhcbiAgY29uc3Qgc2VnbWV0c0Nvb3JkV29ybGQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50UG9pbnRzQ29vcmRXb3JsZC5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBjb25zdCBzZWdtZW50ID0gW107XG4gICAgc2VnbWVudFswXSA9IHNlZ21lbnRQb2ludHNDb29yZFdvcmxkW2ldO1xuICAgIHNlZ21lbnRbMV0gPSBzZWdtZW50UG9pbnRzQ29vcmRXb3JsZFtpICsgMV07XG5cbiAgICBzZWdtZXRzQ29vcmRXb3JsZFtpXSA9IHNlZ21lbnQ7XG4gIH1cblxuICAvLyDQvtC/0YDQtdC00LXQu9C10L3QuNC1INC90L7QvNC10YDQsCDQsdC70LjQttCw0LnRiNC10LPQviDRgdC10LPQvNC10L3RgtCwXG4gIGxldCBjbG9zZXN0RGlzdCA9IDI1NjtcbiAgbGV0IGNsb3Nlc3RTZWdtZW50SW5kZXggPSAwO1xuICBzZWdtZXRzQ29vcmRXb3JsZC5mb3JFYWNoKChzZWdtZW50Q29vcmQsIHNlZ21lbnRJbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdldERhdGFPZk1pbkRpc3RhbmNlVG9TZWdtZW50KHtcbiAgICAgIHBvaW50OiBjbGlja0Nvb3JkV29ybGQsXG4gICAgICBwb2ludFNlZzE6IHNlZ21lbnRDb29yZFswXSxcbiAgICAgIHBvaW50U2VnMjogc2VnbWVudENvb3JkWzFdLFxuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICBjbG9zZXN0RGlzdCA9IHJlc3VsdC5kaXN0O1xuICAgICAgY2xvc2VzdFNlZ21lbnRJbmRleCA9IHNlZ21lbnRJbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjbG9zZXN0U2VnbWVudEluZGV4O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tYXAvbW9kdWxlcy9kcml2ZXIvZ2V0LXdheXBvaW50LWluZGV4LmpzIiwiaW1wb3J0IGZyb21MYXRMbmdUb1BvaW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvbWFwLW1vZHVsZXMvZnJvbS1sYXRMbmctdG8tcG9pbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBwb2ludHMsXG4gIHBvbHlsaW5lLFxuICB3YXlwb2ludHMsXG4gIG1hcCxcbn0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBwb2ludHM6IHtcbiAgICAgIEE6IHt9LFxuICAgICAgQjoge30sXG4gICAgfSxcbiAgICBwb2x5bGluZToge30sXG4gICAgd2F5cG9pbnRzOiB7XG4gICAgICBjb29yZDogW10sXG4gICAgICBpZDogW10sXG4gICAgfSxcbiAgfTtcblxuICAvLyDRg9C/0LDQutC+0LLQutCwIHBvaW50c1xuICBpZiAocG9pbnRzLkEuY29vcmQgJiYgcG9pbnRzLkIuY29vcmQpIHtcbiAgICBbZGF0YS5wb2ludHMuQS5jb29yZF0gPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgICBtYXAsXG4gICAgICBwb2ludHM6IFtwb2ludHMuQS5jb29yZF0sXG4gICAgfSk7XG5cbiAgICBbZGF0YS5wb2ludHMuQi5jb29yZF0gPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgICBtYXAsXG4gICAgICBwb2ludHM6IFtwb2ludHMuQi5jb29yZF0sXG4gICAgfSk7XG4gIH1cblxuICAvLyDRg9C/0LDQutC+0LLQutCwIHBvbHlsaW5lXG4gIGlmIChwb2x5bGluZS5wYXRoKSB7XG4gICAgZGF0YS5wb2x5bGluZS5wYXRoID0gZnJvbUxhdExuZ1RvUG9pbnQoe1xuICAgICAgbWFwLFxuICAgICAgcG9pbnRzOiBwb2x5bGluZS5wYXRoLFxuICAgIH0pO1xuICB9XG5cbiAgLy8g0YPQv9Cw0LrQvtCy0LrQsCB3YXlwb2ludHNcbiAgaWYgKHdheXBvaW50cy5pZC5sZW5ndGggIT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdheXBvaW50cy5pZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29vcmQgPSB3YXlwb2ludHMuY29vcmRbaV07XG4gICAgICBjb25zdCBpZCA9IHdheXBvaW50cy5pZFtpXTtcbiAgICAgIC8vINC10YHQu9C4INC90LUgc3RvcG92ZXIg0LTQsNC90L3Ri9C1IHdheXBvaW50INCx0YPQtNGD0YIg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0L3QsCDRgdC10YDQstC10YBcbiAgICAgIGlmICghY29vcmQuc3RvcG92ZXIpIHtcbiAgICAgICAgZGF0YS53YXlwb2ludHMuY29vcmQucHVzaCh7XG4gICAgICAgICAgbG9jYXRpb246IGZyb21MYXRMbmdUb1BvaW50KHtcbiAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgIHBvaW50czogW2Nvb3JkLmxvY2F0aW9uXSxcbiAgICAgICAgICB9KVswXSxcbiAgICAgICAgICBzdG9wb3ZlcjogY29vcmQuc3RvcG92ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLndheXBvaW50cy5pZC5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFwL21vZHVsZXMvZHJpdmVyL3BhY2thZ2luZy11c2VyLWRhdGEtZHJpdmVyLmpzIiwiXG5leHBvcnQgZGVmYXVsdCAoeyB3YXlwb2ludEluZGV4LCBzdG9wb3ZlcnNJbmRleCB9KSA9PiB7XG4gIGlmICh3YXlwb2ludEluZGV4ID4gc3RvcG92ZXJzSW5kZXhbMF1cbiAgJiYgd2F5cG9pbnRJbmRleCA8PSBzdG9wb3ZlcnNJbmRleFsxXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWFwL21vZHVsZXMvZHJpdmVyL3dheXBvaW50LWluZGV4LWlzLWJldHdlZW4tc3RvcG92ZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0ICh7IHdheXBvaW50cyB9KSA9PiB7XG4gIGxldCBmaXJzdFN0b3BvdmVySW5kZXg7XG4gIGxldCBsYXN0U3RvcG92ZXJJbmRleDtcblxuICB3YXlwb2ludHMuZm9yRWFjaCgod2F5cG9pbnQsIGkpID0+IHtcbiAgICBpZiAoZmlyc3RTdG9wb3ZlckluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh3YXlwb2ludC5zdG9wb3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICBmaXJzdFN0b3BvdmVySW5kZXggPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3YXlwb2ludC5zdG9wb3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgbGFzdFN0b3BvdmVySW5kZXggPSBpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtcbiAgICBmaXJzdFN0b3BvdmVySW5kZXgsXG4gICAgbGFzdFN0b3BvdmVySW5kZXgsXG4gIF07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21hcC9tb2R1bGVzL2RyaXZlci9nZXQtaW5kZXgtb2YtZXh0cmVtZS1zdG9wb3ZlcnMuanMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGRhdGEtY29tcG9uZW50PVxcXCJtYXAtY29udGFpbmVyXFxcIlxcbiAgICAgY2xhc3M9XFxcIm1hcC1jb250YWluZXJcXFwiPlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvdGVtcGxhdGUuaGJzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYXAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy9tYXAvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBREE7QUFHQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBR0E7Ozs7OztBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFHQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFFQTs7Ozs7O0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy91QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQVhBO0FBY0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQWFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQWFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFDQTtBQVlBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUZBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQVBBO0FBQ0E7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==