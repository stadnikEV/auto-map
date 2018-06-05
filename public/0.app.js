webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const PubSub = __webpack_require__(1);
const httpRequest = __webpack_require__(0);
const getRouteElem = __webpack_require__(29);
const getMarkerPointElem = __webpack_require__(30);
const getPolylinePath = __webpack_require__(31);
const getMarkerWayPointElem = __webpack_require__(32);
const getDataOfClosestCoordOnPolyline = __webpack_require__(24);
const cutPolylinePath = __webpack_require__(35);
const getPolylineElem = __webpack_require__(36);
const getId = __webpack_require__(37);
const getwaypointIndex = __webpack_require__(38);
const objIsEmpty = __webpack_require__(39);
const packagingUserDataDriver = __webpack_require__(40);
const fromPointToLatLng = __webpack_require__(22);
const definePointName = __webpack_require__(23);


class DriverMod {
  constructor({ googleMaps, map, userData }) {
    this._subscribe = {};
    this._googleMaps = googleMaps;
    this._map = map;
    this._userData = userData;

    this._points = {
      A: {},
      B: {},
    };
    this._waypoints = {
      coord: [], // массив с координатами waypoint. номер свойства указывает на порядковый номер waypoint.
      id: [], // номер свойства указывает на порядковый номер waypoint.Значение свойства указывает на id waypoint(по id определяется порядковый номер waypoint)
      mapElements: {}, // имя свойства соответствует id waypoint. значение свойства - mapElement
    };
    this._polyline = {};
    this._routeElem = null;

    this._map.addListener('click', this._onClickMap.bind(this));

    this._subscribe.destroyMap = PubSub.subscribe('destroyMap', this._destroy.bind(this));
    this._subscribe.initUserDataMap = PubSub.subscribe('initUserDataMap', this._initUserData.bind(this));
  }


  _onClickMap(e) {
    const pointName = definePointName({ points: this._points });

    // если нет точки А или точки В
    if (pointName) {
      this._createPointElem({
        coord: e.latLng,
        pointName,
      });

      if (this._points.A.mapElements && this._points.B.mapElements) {
        this._createRoute()
          .then(() => {
            this._adjustCoordOfPoints();
            this._saveUserData();
          });
        return;
      }
      return;
    }

    // если есть точка A и точка B
    this._createWaypoint({ coord: e.latLng })
      .then(() => {
        this._saveUserData();
      });
  }


  _onClickPoint(pointName) {
    this._removePointElem({ pointName });

    // если polyline не создана
    if (!this._polyline.mapElements) {
      this._saveUserData();
      return;
    }

    this._render({
      action: 'remove',
      elements: [
        this._polyline.mapElements.polylineElem,
      ],
    });

    // если waypoints не созданы
    if (objIsEmpty(this._waypoints.mapElements)) {
      this._polyline = {};
      return;
    }

    // если нет точек А и B
    if (!this._points.A.mapElements && !this._points.B.mapElements) {
      // удалить все waypoint
      this._removeWaypointElements();
      this._polyline = {};
      this._saveUserData();
      return;
    }

    // если есть одна из точек и waypoint, отрезать участок от точки до waypoint
    this._cutPolyline({ pointName });
  }


  _onClickWaypoint(waypointId) {
    if (!this._points.A.mapElements || !this._points.B.mapElements) return;

    this._removeWaypointElements(waypointId);
    this._createRoute()
      .then(() => {
        this._saveUserData();
      });
  }


  _createPointElem({ pointName, coord }) {
    const point = {
      coord,
      mapElements: {},
    };

    const markerPointElem = getMarkerPointElem({
      googleMaps: this._googleMaps,
      coord,
      label: pointName,
    });

    point.mapElements.markerPointElem = markerPointElem;
    this._points[pointName] = point;

    this._lastCreatedElem = { point: pointName };

    this._render({
      action: 'add',
      elements: [
        markerPointElem,
      ],
    });

    markerPointElem.addListener('click', this._onClickPoint.bind(this, pointName));
  }


  _removePointElem({ pointName }) {
    this._render({
      action: 'remove',
      elements: [
        this._points[pointName].mapElements.markerPointElem,
      ],
    });
    this._points[pointName] = {};
  }


  _createPolylineElem({ polylinePath }) {
    const polyline = {
      path: [],
      mapElements: {},
    };

    polyline.path = polylinePath;

    // получить элемент polylineElem
    const polylineElem = getPolylineElem({
      googleMaps: this._googleMaps,
      path: polylinePath,
    });

    polyline.mapElements.polylineElem = polylineElem;
    this._polyline = polyline;

    this._render({
      action: 'add',
      elements: [
        polylineElem,
      ],
    });
  }


  _removePolylineElem() {
    this._render({
      action: 'remove',
      elements: [
        this._polyline.mapElements.polylineElem,
      ],
    });

    this._polyline.path = [];
  }


  _createWaypoint({ coord }) {
    const promise = new Promise((resolve) => {
      if (this._waypoints.coord.length >= 23) return;

      // сгенерировать waypointId
      const waypointId = getId({ elements: this._waypoints.id });

      // получить порядковый номер waypoint
      const waypointIndex = getwaypointIndex({
        map: this._map,
        pointACoord: this._points.A.coord,
        pointBCoord: this._points.B.coord,
        waypoints: this._waypoints.coord,
        clickCoord: coord,
      });

      // сохранить waypointId, в позиции waypointIndex
      this._waypoints.id.splice(waypointIndex, 0, waypointId);
      // сохранить waypointСoord, в позиции waypointIndex
      this._waypoints.coord.splice(waypointIndex, 0, {
        location: coord,
        stopover: false,
      });
      // необходимо если getRoute вернул "ZERO_RESULTS".
      this._lastCreatedElem = { waypoint: waypointIndex };

      this._createRoute()
        .then(() => {
          // получить координату на созданной полилиинии (ближайшее расстояние от координаты waypoint до полилинии)
          const waypointCoord = getDataOfClosestCoordOnPolyline({
            map: this._map,
            pointLatLng: coord,
            polylineLatLng: this._polyline.path,
          })
            .coord;

          this._createWaypointElem({
            id: waypointId,
            index: waypointIndex,
            coord: waypointCoord,
          });

          resolve();
        });
    });
    return promise;
  }


  _createWaypointElem({
    id,
    index,
    coord,
    stopover = false,
  }) {
    const waypointCoord = {};
    waypointCoord.location = coord;
    waypointCoord.stopover = stopover;

    this._waypoints.coord[index] = waypointCoord;
    this._waypoints.id[index] = id;
    // создать mapElement
    const waypointElem = getMarkerWayPointElem({
      googleMaps: this._googleMaps,
      map: this._map,
      coord,
    });
    // сохранить mapElement
    this._waypoints.mapElements[id] = waypointElem;

    this._render({
      action: 'add',
      elements: [
        waypointElem,
      ],
    });

    waypointElem.addListener('click', this._onClickWaypoint.bind(this, id));
  }


  _removeWaypointElements(waypointId) {
    const waypointElements = [];

    // удалить waypoint c заданным id
    if (typeof waypointId === 'number') {
      // определить позицию waypoint
      let waypointIndex;
      this._waypoints.id.forEach((id, index) => {
        if (id === waypointId) {
          waypointIndex = index;
        }
      });
      waypointElements.push(this._waypoints.mapElements[waypointId]);
      // удалить данные о waypoint
      delete this._waypoints.mapElements[waypointId];
      this._waypoints.id.splice(waypointIndex, 1);
      this._waypoints.coord.splice(waypointIndex, 1);
    }

    // если waypointId не передан, удалить все waypoints
    if (waypointId === undefined) {
      this._waypoints.id.forEach((id) => {
        waypointElements.push(this._waypoints.mapElements[id]);
      });
      this._waypoints.mapElements = {};
      this._waypoints.id = [];
      this._waypoints.coord = [];
    }

    this._render({
      action: 'remove',
      elements: waypointElements,
    });
  }


  _createRoute() {
    const promise = new Promise((resolve) => {
      getRouteElem({
        googleMaps: this._googleMaps,
        start: this._points.A.coord,
        end: this._points.B.coord,
        waypoints: this._waypoints.coord,
      })
        .then((response) => {
          this._routeElem = response;
          // при удачном получении данных, сбросить this._lastCreatedElem
          this._lastCreatedElem = {};
          // удалить с карты предыдущий polyline если он был
          if (this._polyline.mapElements) {
            this._removePolylineElem();
          }
          // получить массив точек с координатами polyline
          const polylinePath = getPolylinePath({
            routeElem: response,
          });
          this._createPolylineElem({ polylinePath });
          resolve();
        })
        .catch((status) => {
          console.warn(status);
          this._hendlerZeroResults();
        });
    });

    return promise;
  }


  _cutPolyline({ pointName }) {
    // берем первый или последний waypoint
    const waypointCoord = (pointName === 'A')
      ? this._waypoints.coord[0].location
      : this._waypoints.coord[this._waypoints.coord.length - 1].location;

    const cutMethod = (pointName === 'A')
      ? 'end'
      : 'beginning';

    this._polyline.path = cutPolylinePath({
      map: this._map,
      cutPointCoord: waypointCoord,
      polylinePath: this._polyline.path,
      cutMethod,
    });

    this._createPolylineElem({ polylinePath: this._polyline.path });
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


  _adjustCoordOfPoints() {
    const polylineCoordA = this._polyline.path[0];
    this._points.A.mapElements.markerPointElem.setPosition(polylineCoordA);
    this._points.A.coord = polylineCoordA;

    const polylineCoordB = this._polyline.path[this._polyline.path.length - 1];
    this._points.B.mapElements.markerPointElem.setPosition(polylineCoordB);
    this._points.B.coord = polylineCoordB;
  }


  _hendlerZeroResults() {
    // если последний элемент был waypoint
    if (typeof this._lastCreatedElem.waypoint === 'number') {
      const waypointIndex = this._lastCreatedElem.waypoint;
      // удалить с позиции waypointIndex, информацию о id
      this._waypoints.id.splice(waypointIndex, 1);
      // удалить с позиции waypointIndex, информацию о координатах waypoint
      this._waypoints.coord.splice(waypointIndex, 1);
      return;
    }
    // если последний элемент был point
    if (this._lastCreatedElem.point) {
      const pointName = this._lastCreatedElem.point;
      this._removePointElem({ pointName });
    }
  }


  _saveUserData() {
    const userData = packagingUserDataDriver({
      userName: this._userData.userName,
      points: this._points,
      polyline: this._polyline,
      routeElem: this._routeElem,
      waypoints: this._waypoints,
      map: this._map,
    });

    httpRequest({
      url: './driver/save-data',
      data: userData,
    })
      .then((response) => {
        console.log('save data status:', response);
      });
  }


  _initUserData() {
    if (!this._userData.driver || !this._userData.driver) {
      return;
    }

    if (this._userData.driver.points.A.coord && this._userData.driver.points.B.coord) {
      this._createPointElem({
        pointName: 'A',
        coord: fromPointToLatLng({
          map: this._map,
          points: [this._userData.driver.points.A.coord],
        })[0],
      });
      this._createPointElem({
        pointName: 'B',
        coord: fromPointToLatLng({
          map: this._map,
          points: [this._userData.driver.points.B.coord],
        })[0],
      });
    }

    if (this._userData.driver.polyline.path) {
      this._createPolylineElem({
        polylinePath: fromPointToLatLng({
          map: this._map,
          points: this._userData.driver.polyline.path,
        }),
      });
    }

    if (this._userData.driver.waypoints.coord.length !== 0) {
      const waypointsCoord = this._userData.driver.waypoints.coord;

      waypointsCoord.forEach((waypointCoord, index) => {
        const coord = fromPointToLatLng({
          map: this._map,
          points: [waypointCoord.location],
        })[0];
        this._createWaypointElem({
          id: this._userData.driver.waypoints.id[index],
          index,
          coord,
          stopover: waypointCoord.stopover,
        });
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
    if (this._polyline.mapElements) {
      this._removePolylineElem();
    }
    if (!objIsEmpty(this._waypoints.mapElements)) {
      this._removeWaypointElements();
    }
    this._googleMaps.event.clearInstanceListeners(this._map);
    PubSub.unsubscribe(this._subscribe.destroyMap);
    PubSub.unsubscribe(this._subscribe.initUserDataMap);
  }
}

module.exports = DriverMod;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

const getDataOfMinDistanceToSegment = __webpack_require__(25);
const getClosestPointNumberOnPolyline = __webpack_require__(33);
const fromLatLngToPoint = __webpack_require__(21);
const fromPointToLatLng = __webpack_require__(22);

const getDataOfClosestCoordOnPolyline = ({ map, pointLatLng, polylineLatLng }) => {
  const point = fromLatLngToPoint({
    map,
    points: [pointLatLng],
  })[0];

  const polyline = fromLatLngToPoint({
    map,
    points: polylineLatLng,
  });

  // определение порядкового номера ближайшей точки полилинии.
  const closestPointNumber = getClosestPointNumberOnPolyline({
    point,
    polyline,
  });

  /*
  *   опредеоение ближайшей координаты на полилинии
  *   данная координата расположена на отрезке прилежащем к точке с номером closestPointNumber
  *   это может быть отрезок до или после точки с номером closestPointNumber
  *   для сравнения берем оба эти отрезка
  */

  // определение отрезков для сравнения
  const firstPointOfPolyline = 0;
  const lastPointOfPolyline = polyline.length - 1;
  // определение отрезков которые нужно проверить
  const segmentsForCheck = [];
  if (firstPointOfPolyline !== closestPointNumber && lastPointOfPolyline !== closestPointNumber) {
    segmentsForCheck[0] = [closestPointNumber - 1, closestPointNumber];
    segmentsForCheck[1] = [closestPointNumber, closestPointNumber + 1];
  }
  if (firstPointOfPolyline === closestPointNumber) {
    segmentsForCheck[0] = [0, 1];
  }
  if (lastPointOfPolyline === closestPointNumber) {
    segmentsForCheck[0] = [lastPointOfPolyline - 1, lastPointOfPolyline];
  }
  // опредеоение ближайшей координаты на полилинии
  let closestPointDist = 256;
  let closestPointCoord;
  const closestSegment = [];
  segmentsForCheck.forEach((segment) => {
    const result = getDataOfMinDistanceToSegment({
      point,
      pointSeg1: polyline[segment[0]],
      pointSeg2: polyline[segment[1]],
    });
    if (result.dist < closestPointDist) {
      closestPointDist = result.dist;
      closestPointCoord = result.coord;
      [closestSegment[0], closestSegment[1]] = segment;
    }
  });

  return {
    coord: fromPointToLatLng({
      map,
      points: [closestPointCoord],
    })[0],
    segment: closestSegment,
    dist: closestPointDist,
  };
};

module.exports = getDataOfClosestCoordOnPolyline;


/***/ }),
/* 25 */
/***/ (function(module, exports) {


const getDataOfMinDistanceToSegment = ({ point, pointSeg1, pointSeg2 }) => {
  const getVector = (point1, point2) => {
    const vector = [];
    vector.x = point2.x - point1.x;
    vector.y = point2.y - point1.y;
    return vector;
  };

  const vectorProduct = (vectorA, vectorB) => (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);

  const dist = vector => Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));

  const vector1 = getVector(pointSeg1, point);
  const vectorSeg = getVector(pointSeg1, pointSeg2);

  const c1 = vectorProduct(vector1, vectorSeg);

  if (c1 <= 0) {
    return {
      dist: dist(vector1),
      coord: pointSeg1,
    };
  }

  const c2 = vectorProduct(vectorSeg, vectorSeg);

  if (c2 <= c1) {
    const vector2 = getVector(point, pointSeg2);
    return {
      dist: dist(vector2),
      coord: pointSeg2,
    };
  }

  const b = c1 / c2;
  const pointPerpendicular = [];
  pointPerpendicular.x = pointSeg1.x + (vectorSeg.x * b);
  pointPerpendicular.y = pointSeg1.y + (vectorSeg.y * b);

  const vectorPerpendicular = getVector(point, pointPerpendicular);
  return {
    dist: dist(vectorPerpendicular),
    coord: pointPerpendicular,
  };
};

module.exports = getDataOfMinDistanceToSegment;


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {


const getRouteElem = ({
  googleMaps,
  waypoints,
  start,
  end,
}) => {
  const request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
    waypoints,
  };

  const directionsService = new googleMaps.DirectionsService();

  const promise = new Promise((resolve, reject) => {
    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        resolve(response);
        return;
      }
      reject(status);
    });
  });

  return promise;
};

module.exports = getRouteElem;


/***/ }),
/* 30 */
/***/ (function(module, exports) {


const getMarkerPointElem = ({
  googleMaps,
  coord,
  label,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    label: {
      text: label,
      color: 'white',
    },
  });

  return marker;
};

module.exports = getMarkerPointElem;


/***/ }),
/* 31 */
/***/ (function(module, exports) {


function getPolylinePath({ routeElem }) {
  const myRoute = routeElem.routes[0].legs;
  const points = [];

  for (let k = 0; k < myRoute.length; k += 1) {
    for (let i = 0; i < myRoute[k].steps.length; i += 1) {
      for (let j = 0; j < myRoute[k].steps[i].lat_lngs.length; j += 1) {
        points.push(myRoute[k].steps[i].lat_lngs[j]);
      }
    }
  }

  return points;
}

module.exports = getPolylinePath;


/***/ }),
/* 32 */
/***/ (function(module, exports) {


const getMarkerWayPointElem = ({
  googleMaps,
  map,
  coord,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    map,
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: 'blue',
      strokeWeight: 1,
      fillColor: 'white',
      fillOpacity: 0.9,
      scale: 5,
    },
  });

  return marker;
};

module.exports = getMarkerWayPointElem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const getDistanceBetweenPoints = __webpack_require__(34);

// определение порядкового номера ближайшей точки полилинии
const getClosestPointNumberOnPolyline = ({ point, polyline }) => {
  let minDistanceToPolylinePoint = 256;
  let closestPointNumber = 0;

  polyline.forEach((polylinePointCoord, pointNumber) => {
    const distance = getDistanceBetweenPoints({
      point1: point,
      point2: polylinePointCoord,
    });

    if (distance < minDistanceToPolylinePoint) {
      minDistanceToPolylinePoint = distance;
      closestPointNumber = pointNumber;
    }
  });
  return closestPointNumber;
};

module.exports = getClosestPointNumberOnPolyline;


/***/ }),
/* 34 */
/***/ (function(module, exports) {


const getDistanceBetweenPoints = ({ point1, point2 }) => {
  const vector = {};
  vector.x = point2.x - point1.x;
  vector.y = point2.y - point1.y;

  return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
};

module.exports = getDistanceBetweenPoints;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


const getDataOfClosestCoordOnPolyline = __webpack_require__(24);


const cutPolylinePath = ({
  map,
  cutPointCoord,
  cutMethod,
  polylinePath,
}) => {
  const polylineSegment = getDataOfClosestCoordOnPolyline({
    map,
    pointLatLng: cutPointCoord,
    polylineLatLng: polylinePath,
  })
    .segment[0];

  const cutPointNumber = polylineSegment + 1;

  polylinePath.splice(cutPointNumber, 0, cutPointCoord);

  // берем начало или конец массива
  let arr = [];
  if (cutMethod === 'beginning') {
    arr = polylinePath.slice(0, cutPointNumber + 1);
  }
  if (cutMethod === 'end') {
    arr = polylinePath.slice(cutPointNumber);
  }
  return arr;
};

module.exports = cutPolylinePath;


/***/ }),
/* 36 */
/***/ (function(module, exports) {


const getPolylineElem = (({ googleMaps, path }) => {
  const polylineElem = new googleMaps.Polyline({
    path,
    strokeColor: 'blue',
    strokeOpacity: 0.5,
    strokeWeight: 5,
    editable: false,
    clickable: false,
  });

  return polylineElem;
});

module.exports = getPolylineElem;


/***/ }),
/* 37 */
/***/ (function(module, exports) {


const getId = ({ elements }) => {
  if (elements.length === 0) return 0;

  const arrId = [];

  elements.forEach((id) => {
    arrId[id] = true;
  });

  let i;
  for (i = 0; i < arrId.length; i += 1) {
    if (arrId[i] !== true) {
      return i;
    }
  }
  return i;
};

module.exports = getId;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

const getDataOfMinDistanceToSegment = __webpack_require__(25);
const fromLatLngToPoint = __webpack_require__(21);


const getIndexWaypoint = ({
  map,
  pointACoord,
  pointBCoord,
  waypoints,
  clickCoord,
}) => {
  const waypointsCoord = [];

  // сохранение координат waypoint
  waypoints.forEach((coord) => {
    waypointsCoord.push(coord.location);
  });

  // создание массива с координатами включающими точки A и B
  let segmentPointsCoord = [pointACoord];
  segmentPointsCoord = segmentPointsCoord.concat(waypointsCoord, pointBCoord);

  // конвертация координат
  const clickCoordWorld = fromLatLngToPoint({
    map,
    points: [clickCoord],
  })[0];

  const segmentPointsCoordWorld = fromLatLngToPoint({
    map,
    points: segmentPointsCoord,
  });

  // получение масива сегментов c координатами
  const segmetsCoordWorld = [];
  for (let i = 0; i < segmentPointsCoordWorld.length - 1; i += 1) {
    const segment = [];
    segment[0] = segmentPointsCoordWorld[i];
    segment[1] = segmentPointsCoordWorld[i + 1];

    segmetsCoordWorld[i] = segment;
  }

  // определение номера ближайшего сегмента
  let closestDist = 256;
  let closestSegmentIndex = 0;
  segmetsCoordWorld.forEach((segmentCoord, segmentIndex) => {
    const result = getDataOfMinDistanceToSegment({
      point: clickCoordWorld,
      pointSeg1: segmentCoord[0],
      pointSeg2: segmentCoord[1],
    });
    if (result.dist < closestDist) {
      closestDist = result.dist;
      closestSegmentIndex = segmentIndex;
    }
  });

  return closestSegmentIndex;
};

module.exports = getIndexWaypoint;


/***/ }),
/* 39 */
/***/ (function(module, exports) {


const objIsEmpty = (obj) => {
  const arr = Object.keys(obj);
  if (arr.length === 0) return true;
  return false;
};

module.exports = objIsEmpty;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

const fromLatLngToPoint = __webpack_require__(21);

const packagingUserDataDriver = ({
  userName,
  points,
  polyline,
  waypoints,
  map,
}) => {
  const data = {};
  data.userName = userName;
  data.driver = {
    points: {
      A: {},
      B: {},
    },
    polyline: {},
    waypoints: {
      coord: [],
      id: [],
    },
  };

  // упаковка points
  if (points.A.coord && points.B.coord) {
    [data.driver.points.A.coord] = fromLatLngToPoint({
      map,
      points: [points.A.coord],
    });

    [data.driver.points.B.coord] = fromLatLngToPoint({
      map,
      points: [points.B.coord],
    });
  }

  // упаковка polyline
  if (polyline.path) {
    data.driver.polyline.path = fromLatLngToPoint({
      map,
      points: polyline.path,
    });
  }

  // упаковка waypoints
  if (waypoints.id.length !== 0) {
    const waypointsCoord = [];

    waypoints.coord.forEach((coord) => {
      waypointsCoord.push({
        location: fromLatLngToPoint({
          map,
          points: [coord.location],
        })[0],
        stopover: coord.stopover,
      });
    });

    data.driver.waypoints = {
      coord: waypointsCoord,
      id: waypoints.id,
    };
  }

  return data;
};

module.exports = packagingUserDataDriver;


/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvZHJpdmVyLW1vZGUvZHJpdmVyLW1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZnJvbS1sYXRMbmctdG8tcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZnJvbS1wb2ludC10by1sYXRMbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZGVmaW5lLXBvaW50LW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZ2V0LWRhdGEtb2YtY2xvc2VzdC1jb29yZC1vbi1wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9nZXQtZGF0YS1vZi1taW4tZGlzdGFuY2UtdG8tc2VnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvZHJpdmVyLW1vZGUvdXRpbC9nZXQtcm91dGUtZWxlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvZHJpdmVyLW1vZGUvdXRpbC9nZXQtbWFya2VyLXBvaW50LWVsZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvZ2V0LXBvbHlsaW5lLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvZ2V0LW1hcmtlci13YXlwb2ludC1lbGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC91dGlsL2dldC1jbG9zZXN0LXBvaW50LW51bWJlci1vbi1wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9nZXQtZGlzdGFuY2UtYmV0d2Vlbi1wb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvY3V0LXBvbHlsaW5lLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvZ2V0LXBvbHlsaW5lLWVsZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvZ2V0LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC9kcml2ZXItbW9kZS91dGlsL2dldC1pbmRleC13YXlwb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9vYmotaXMtZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvcGFja2FnaW5nLXVzZXItZGF0YS1kcml2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHViU3ViID0gcmVxdWlyZSgncHVic3ViLWpzJyk7XG5jb25zdCBodHRwUmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NlcnZpY2VzL2h0dHAtcmVxdWVzdCcpO1xuY29uc3QgZ2V0Um91dGVFbGVtID0gcmVxdWlyZSgnLi91dGlsL2dldC1yb3V0ZS1lbGVtJyk7XG5jb25zdCBnZXRNYXJrZXJQb2ludEVsZW0gPSByZXF1aXJlKCcuL3V0aWwvZ2V0LW1hcmtlci1wb2ludC1lbGVtJyk7XG5jb25zdCBnZXRQb2x5bGluZVBhdGggPSByZXF1aXJlKCcuL3V0aWwvZ2V0LXBvbHlsaW5lLXBhdGgnKTtcbmNvbnN0IGdldE1hcmtlcldheVBvaW50RWxlbSA9IHJlcXVpcmUoJy4vdXRpbC9nZXQtbWFya2VyLXdheXBvaW50LWVsZW0nKTtcbmNvbnN0IGdldERhdGFPZkNsb3Nlc3RDb29yZE9uUG9seWxpbmUgPSByZXF1aXJlKCcuLi91dGlsL2dldC1kYXRhLW9mLWNsb3Nlc3QtY29vcmQtb24tcG9seWxpbmUnKTtcbmNvbnN0IGN1dFBvbHlsaW5lUGF0aCA9IHJlcXVpcmUoJy4vdXRpbC9jdXQtcG9seWxpbmUtcGF0aCcpO1xuY29uc3QgZ2V0UG9seWxpbmVFbGVtID0gcmVxdWlyZSgnLi91dGlsL2dldC1wb2x5bGluZS1lbGVtJyk7XG5jb25zdCBnZXRJZCA9IHJlcXVpcmUoJy4vdXRpbC9nZXQtaWQnKTtcbmNvbnN0IGdldHdheXBvaW50SW5kZXggPSByZXF1aXJlKCcuL3V0aWwvZ2V0LWluZGV4LXdheXBvaW50Jyk7XG5jb25zdCBvYmpJc0VtcHR5ID0gcmVxdWlyZSgnLi4vdXRpbC9vYmotaXMtZW1wdHknKTtcbmNvbnN0IHBhY2thZ2luZ1VzZXJEYXRhRHJpdmVyID0gcmVxdWlyZSgnLi91dGlsL3BhY2thZ2luZy11c2VyLWRhdGEtZHJpdmVyJyk7XG5jb25zdCBmcm9tUG9pbnRUb0xhdExuZyA9IHJlcXVpcmUoJy4uL3V0aWwvZnJvbS1wb2ludC10by1sYXRMbmcnKTtcbmNvbnN0IGRlZmluZVBvaW50TmFtZSA9IHJlcXVpcmUoJy4uL3V0aWwvZGVmaW5lLXBvaW50LW5hbWUnKTtcblxuXG5jbGFzcyBEcml2ZXJNb2Qge1xuICBjb25zdHJ1Y3Rvcih7IGdvb2dsZU1hcHMsIG1hcCwgdXNlckRhdGEgfSkge1xuICAgIHRoaXMuX3N1YnNjcmliZSA9IHt9O1xuICAgIHRoaXMuX2dvb2dsZU1hcHMgPSBnb29nbGVNYXBzO1xuICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICB0aGlzLl91c2VyRGF0YSA9IHVzZXJEYXRhO1xuXG4gICAgdGhpcy5fcG9pbnRzID0ge1xuICAgICAgQToge30sXG4gICAgICBCOiB7fSxcbiAgICB9O1xuICAgIHRoaXMuX3dheXBvaW50cyA9IHtcbiAgICAgIGNvb3JkOiBbXSwgLy8g0LzQsNGB0YHQuNCyINGBINC60L7QvtGA0LTQuNC90LDRgtCw0LzQuCB3YXlwb2ludC4g0L3QvtC80LXRgCDRgdCy0L7QudGB0YLQstCwINGD0LrQsNC30YvQstCw0LXRgiDQvdCwINC/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YAgd2F5cG9pbnQuXG4gICAgICBpZDogW10sIC8vINC90L7QvNC10YAg0YHQstC+0LnRgdGC0LLQsCDRg9C60LDQt9GL0LLQsNC10YIg0L3QsCDQv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAIHdheXBvaW50LtCX0L3QsNGH0LXQvdC40LUg0YHQstC+0LnRgdGC0LLQsCDRg9C60LDQt9GL0LLQsNC10YIg0L3QsCBpZCB3YXlwb2ludCjQv9C+IGlkINC+0L/RgNC10LTQtdC70Y/QtdGC0YHRjyDQv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAIHdheXBvaW50KVxuICAgICAgbWFwRWxlbWVudHM6IHt9LCAvLyDQuNC80Y8g0YHQstC+0LnRgdGC0LLQsCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiBpZCB3YXlwb2ludC4g0LfQvdCw0YfQtdC90LjQtSDRgdCy0L7QudGB0YLQstCwIC0gbWFwRWxlbWVudFxuICAgIH07XG4gICAgdGhpcy5fcG9seWxpbmUgPSB7fTtcbiAgICB0aGlzLl9yb3V0ZUVsZW0gPSBudWxsO1xuXG4gICAgdGhpcy5fbWFwLmFkZExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2tNYXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLl9zdWJzY3JpYmUuZGVzdHJveU1hcCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2Rlc3Ryb3lNYXAnLCB0aGlzLl9kZXN0cm95LmJpbmQodGhpcykpO1xuICAgIHRoaXMuX3N1YnNjcmliZS5pbml0VXNlckRhdGFNYXAgPSBQdWJTdWIuc3Vic2NyaWJlKCdpbml0VXNlckRhdGFNYXAnLCB0aGlzLl9pbml0VXNlckRhdGEuYmluZCh0aGlzKSk7XG4gIH1cblxuXG4gIF9vbkNsaWNrTWFwKGUpIHtcbiAgICBjb25zdCBwb2ludE5hbWUgPSBkZWZpbmVQb2ludE5hbWUoeyBwb2ludHM6IHRoaXMuX3BvaW50cyB9KTtcblxuICAgIC8vINC10YHQu9C4INC90LXRgiDRgtC+0YfQutC4INCQINC40LvQuCDRgtC+0YfQutC4INCSXG4gICAgaWYgKHBvaW50TmFtZSkge1xuICAgICAgdGhpcy5fY3JlYXRlUG9pbnRFbGVtKHtcbiAgICAgICAgY29vcmQ6IGUubGF0TG5nLFxuICAgICAgICBwb2ludE5hbWUsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuX3BvaW50cy5BLm1hcEVsZW1lbnRzICYmIHRoaXMuX3BvaW50cy5CLm1hcEVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVJvdXRlKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RDb29yZE9mUG9pbnRzKCk7XG4gICAgICAgICAgICB0aGlzLl9zYXZlVXNlckRhdGEoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INC10YHRgtGMINGC0L7Rh9C60LAgQSDQuCDRgtC+0YfQutCwIEJcbiAgICB0aGlzLl9jcmVhdGVXYXlwb2ludCh7IGNvb3JkOiBlLmxhdExuZyB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9zYXZlVXNlckRhdGEoKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBfb25DbGlja1BvaW50KHBvaW50TmFtZSkge1xuICAgIHRoaXMuX3JlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZSB9KTtcblxuICAgIC8vINC10YHQu9C4IHBvbHlsaW5lINC90LUg0YHQvtC30LTQsNC90LBcbiAgICBpZiAoIXRoaXMuX3BvbHlsaW5lLm1hcEVsZW1lbnRzKSB7XG4gICAgICB0aGlzLl9zYXZlVXNlckRhdGEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXIoe1xuICAgICAgYWN0aW9uOiAncmVtb3ZlJyxcbiAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgIHRoaXMuX3BvbHlsaW5lLm1hcEVsZW1lbnRzLnBvbHlsaW5lRWxlbSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICAvLyDQtdGB0LvQuCB3YXlwb2ludHMg0L3QtSDRgdC+0LfQtNCw0L3Ri1xuICAgIGlmIChvYmpJc0VtcHR5KHRoaXMuX3dheXBvaW50cy5tYXBFbGVtZW50cykpIHtcbiAgICAgIHRoaXMuX3BvbHlsaW5lID0ge307XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0L3QtdGCINGC0L7Rh9C10Log0JAg0LggQlxuICAgIGlmICghdGhpcy5fcG9pbnRzLkEubWFwRWxlbWVudHMgJiYgIXRoaXMuX3BvaW50cy5CLm1hcEVsZW1lbnRzKSB7XG4gICAgICAvLyDRg9C00LDQu9C40YLRjCDQstGB0LUgd2F5cG9pbnRcbiAgICAgIHRoaXMuX3JlbW92ZVdheXBvaW50RWxlbWVudHMoKTtcbiAgICAgIHRoaXMuX3BvbHlsaW5lID0ge307XG4gICAgICB0aGlzLl9zYXZlVXNlckRhdGEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQvtC00L3QsCDQuNC3INGC0L7Rh9C10Log0Lggd2F5cG9pbnQsINC+0YLRgNC10LfQsNGC0Ywg0YPRh9Cw0YHRgtC+0Log0L7RgiDRgtC+0YfQutC4INC00L4gd2F5cG9pbnRcbiAgICB0aGlzLl9jdXRQb2x5bGluZSh7IHBvaW50TmFtZSB9KTtcbiAgfVxuXG5cbiAgX29uQ2xpY2tXYXlwb2ludCh3YXlwb2ludElkKSB7XG4gICAgaWYgKCF0aGlzLl9wb2ludHMuQS5tYXBFbGVtZW50cyB8fCAhdGhpcy5fcG9pbnRzLkIubWFwRWxlbWVudHMpIHJldHVybjtcblxuICAgIHRoaXMuX3JlbW92ZVdheXBvaW50RWxlbWVudHMod2F5cG9pbnRJZCk7XG4gICAgdGhpcy5fY3JlYXRlUm91dGUoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9zYXZlVXNlckRhdGEoKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBfY3JlYXRlUG9pbnRFbGVtKHsgcG9pbnROYW1lLCBjb29yZCB9KSB7XG4gICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICBjb29yZCxcbiAgICAgIG1hcEVsZW1lbnRzOiB7fSxcbiAgICB9O1xuXG4gICAgY29uc3QgbWFya2VyUG9pbnRFbGVtID0gZ2V0TWFya2VyUG9pbnRFbGVtKHtcbiAgICAgIGdvb2dsZU1hcHM6IHRoaXMuX2dvb2dsZU1hcHMsXG4gICAgICBjb29yZCxcbiAgICAgIGxhYmVsOiBwb2ludE5hbWUsXG4gICAgfSk7XG5cbiAgICBwb2ludC5tYXBFbGVtZW50cy5tYXJrZXJQb2ludEVsZW0gPSBtYXJrZXJQb2ludEVsZW07XG4gICAgdGhpcy5fcG9pbnRzW3BvaW50TmFtZV0gPSBwb2ludDtcblxuICAgIHRoaXMuX2xhc3RDcmVhdGVkRWxlbSA9IHsgcG9pbnQ6IHBvaW50TmFtZSB9O1xuXG4gICAgdGhpcy5fcmVuZGVyKHtcbiAgICAgIGFjdGlvbjogJ2FkZCcsXG4gICAgICBlbGVtZW50czogW1xuICAgICAgICBtYXJrZXJQb2ludEVsZW0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgbWFya2VyUG9pbnRFbGVtLmFkZExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2tQb2ludC5iaW5kKHRoaXMsIHBvaW50TmFtZSkpO1xuICB9XG5cblxuICBfcmVtb3ZlUG9pbnRFbGVtKHsgcG9pbnROYW1lIH0pIHtcbiAgICB0aGlzLl9yZW5kZXIoe1xuICAgICAgYWN0aW9uOiAncmVtb3ZlJyxcbiAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgIHRoaXMuX3BvaW50c1twb2ludE5hbWVdLm1hcEVsZW1lbnRzLm1hcmtlclBvaW50RWxlbSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgdGhpcy5fcG9pbnRzW3BvaW50TmFtZV0gPSB7fTtcbiAgfVxuXG5cbiAgX2NyZWF0ZVBvbHlsaW5lRWxlbSh7IHBvbHlsaW5lUGF0aCB9KSB7XG4gICAgY29uc3QgcG9seWxpbmUgPSB7XG4gICAgICBwYXRoOiBbXSxcbiAgICAgIG1hcEVsZW1lbnRzOiB7fSxcbiAgICB9O1xuXG4gICAgcG9seWxpbmUucGF0aCA9IHBvbHlsaW5lUGF0aDtcblxuICAgIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0Y3Qu9C10LzQtdC90YIgcG9seWxpbmVFbGVtXG4gICAgY29uc3QgcG9seWxpbmVFbGVtID0gZ2V0UG9seWxpbmVFbGVtKHtcbiAgICAgIGdvb2dsZU1hcHM6IHRoaXMuX2dvb2dsZU1hcHMsXG4gICAgICBwYXRoOiBwb2x5bGluZVBhdGgsXG4gICAgfSk7XG5cbiAgICBwb2x5bGluZS5tYXBFbGVtZW50cy5wb2x5bGluZUVsZW0gPSBwb2x5bGluZUVsZW07XG4gICAgdGhpcy5fcG9seWxpbmUgPSBwb2x5bGluZTtcblxuICAgIHRoaXMuX3JlbmRlcih7XG4gICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgcG9seWxpbmVFbGVtLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgX3JlbW92ZVBvbHlsaW5lRWxlbSgpIHtcbiAgICB0aGlzLl9yZW5kZXIoe1xuICAgICAgYWN0aW9uOiAncmVtb3ZlJyxcbiAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgIHRoaXMuX3BvbHlsaW5lLm1hcEVsZW1lbnRzLnBvbHlsaW5lRWxlbSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wb2x5bGluZS5wYXRoID0gW107XG4gIH1cblxuXG4gIF9jcmVhdGVXYXlwb2ludCh7IGNvb3JkIH0pIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICh0aGlzLl93YXlwb2ludHMuY29vcmQubGVuZ3RoID49IDIzKSByZXR1cm47XG5cbiAgICAgIC8vINGB0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMIHdheXBvaW50SWRcbiAgICAgIGNvbnN0IHdheXBvaW50SWQgPSBnZXRJZCh7IGVsZW1lbnRzOiB0aGlzLl93YXlwb2ludHMuaWQgfSk7XG5cbiAgICAgIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0L/QvtGA0Y/QtNC60L7QstGL0Lkg0L3QvtC80LXRgCB3YXlwb2ludFxuICAgICAgY29uc3Qgd2F5cG9pbnRJbmRleCA9IGdldHdheXBvaW50SW5kZXgoe1xuICAgICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICAgICAgcG9pbnRBQ29vcmQ6IHRoaXMuX3BvaW50cy5BLmNvb3JkLFxuICAgICAgICBwb2ludEJDb29yZDogdGhpcy5fcG9pbnRzLkIuY29vcmQsXG4gICAgICAgIHdheXBvaW50czogdGhpcy5fd2F5cG9pbnRzLmNvb3JkLFxuICAgICAgICBjbGlja0Nvb3JkOiBjb29yZCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyDRgdC+0YXRgNCw0L3QuNGC0Ywgd2F5cG9pbnRJZCwg0LIg0L/QvtC30LjRhtC40Lggd2F5cG9pbnRJbmRleFxuICAgICAgdGhpcy5fd2F5cG9pbnRzLmlkLnNwbGljZSh3YXlwb2ludEluZGV4LCAwLCB3YXlwb2ludElkKTtcbiAgICAgIC8vINGB0L7RhdGA0LDQvdC40YLRjCB3YXlwb2ludNChb29yZCwg0LIg0L/QvtC30LjRhtC40Lggd2F5cG9pbnRJbmRleFxuICAgICAgdGhpcy5fd2F5cG9pbnRzLmNvb3JkLnNwbGljZSh3YXlwb2ludEluZGV4LCAwLCB7XG4gICAgICAgIGxvY2F0aW9uOiBjb29yZCxcbiAgICAgICAgc3RvcG92ZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICAvLyDQvdC10L7QsdGF0L7QtNC40LzQviDQtdGB0LvQuCBnZXRSb3V0ZSDQstC10YDQvdGD0LsgXCJaRVJPX1JFU1VMVFNcIi5cbiAgICAgIHRoaXMuX2xhc3RDcmVhdGVkRWxlbSA9IHsgd2F5cG9pbnQ6IHdheXBvaW50SW5kZXggfTtcblxuICAgICAgdGhpcy5fY3JlYXRlUm91dGUoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8g0L/QvtC70YPRh9C40YLRjCDQutC+0L7RgNC00LjQvdCw0YLRgyDQvdCwINGB0L7Qt9C00LDQvdC90L7QuSDQv9C+0LvQuNC70LjQuNC90LjQuCAo0LHQu9C40LbQsNC50YjQtdC1INGA0LDRgdGB0YLQvtGP0L3QuNC1INC+0YIg0LrQvtC+0YDQtNC40L3QsNGC0Ysgd2F5cG9pbnQg0LTQviDQv9C+0LvQuNC70LjQvdC40LgpXG4gICAgICAgICAgY29uc3Qgd2F5cG9pbnRDb29yZCA9IGdldERhdGFPZkNsb3Nlc3RDb29yZE9uUG9seWxpbmUoe1xuICAgICAgICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgICAgICAgICBwb2ludExhdExuZzogY29vcmQsXG4gICAgICAgICAgICBwb2x5bGluZUxhdExuZzogdGhpcy5fcG9seWxpbmUucGF0aCxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNvb3JkO1xuXG4gICAgICAgICAgdGhpcy5fY3JlYXRlV2F5cG9pbnRFbGVtKHtcbiAgICAgICAgICAgIGlkOiB3YXlwb2ludElkLFxuICAgICAgICAgICAgaW5kZXg6IHdheXBvaW50SW5kZXgsXG4gICAgICAgICAgICBjb29yZDogd2F5cG9pbnRDb29yZCxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIF9jcmVhdGVXYXlwb2ludEVsZW0oe1xuICAgIGlkLFxuICAgIGluZGV4LFxuICAgIGNvb3JkLFxuICAgIHN0b3BvdmVyID0gZmFsc2UsXG4gIH0pIHtcbiAgICBjb25zdCB3YXlwb2ludENvb3JkID0ge307XG4gICAgd2F5cG9pbnRDb29yZC5sb2NhdGlvbiA9IGNvb3JkO1xuICAgIHdheXBvaW50Q29vcmQuc3RvcG92ZXIgPSBzdG9wb3ZlcjtcblxuICAgIHRoaXMuX3dheXBvaW50cy5jb29yZFtpbmRleF0gPSB3YXlwb2ludENvb3JkO1xuICAgIHRoaXMuX3dheXBvaW50cy5pZFtpbmRleF0gPSBpZDtcbiAgICAvLyDRgdC+0LfQtNCw0YLRjCBtYXBFbGVtZW50XG4gICAgY29uc3Qgd2F5cG9pbnRFbGVtID0gZ2V0TWFya2VyV2F5UG9pbnRFbGVtKHtcbiAgICAgIGdvb2dsZU1hcHM6IHRoaXMuX2dvb2dsZU1hcHMsXG4gICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICAgIGNvb3JkLFxuICAgIH0pO1xuICAgIC8vINGB0L7RhdGA0LDQvdC40YLRjCBtYXBFbGVtZW50XG4gICAgdGhpcy5fd2F5cG9pbnRzLm1hcEVsZW1lbnRzW2lkXSA9IHdheXBvaW50RWxlbTtcblxuICAgIHRoaXMuX3JlbmRlcih7XG4gICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgd2F5cG9pbnRFbGVtLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHdheXBvaW50RWxlbS5hZGRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrV2F5cG9pbnQuYmluZCh0aGlzLCBpZCkpO1xuICB9XG5cblxuICBfcmVtb3ZlV2F5cG9pbnRFbGVtZW50cyh3YXlwb2ludElkKSB7XG4gICAgY29uc3Qgd2F5cG9pbnRFbGVtZW50cyA9IFtdO1xuXG4gICAgLy8g0YPQtNCw0LvQuNGC0Ywgd2F5cG9pbnQgYyDQt9Cw0LTQsNC90L3Ri9C8IGlkXG4gICAgaWYgKHR5cGVvZiB3YXlwb2ludElkID09PSAnbnVtYmVyJykge1xuICAgICAgLy8g0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0L/QvtC30LjRhtC40Y4gd2F5cG9pbnRcbiAgICAgIGxldCB3YXlwb2ludEluZGV4O1xuICAgICAgdGhpcy5fd2F5cG9pbnRzLmlkLmZvckVhY2goKGlkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaWQgPT09IHdheXBvaW50SWQpIHtcbiAgICAgICAgICB3YXlwb2ludEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgd2F5cG9pbnRFbGVtZW50cy5wdXNoKHRoaXMuX3dheXBvaW50cy5tYXBFbGVtZW50c1t3YXlwb2ludElkXSk7XG4gICAgICAvLyDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0LUg0L4gd2F5cG9pbnRcbiAgICAgIGRlbGV0ZSB0aGlzLl93YXlwb2ludHMubWFwRWxlbWVudHNbd2F5cG9pbnRJZF07XG4gICAgICB0aGlzLl93YXlwb2ludHMuaWQuc3BsaWNlKHdheXBvaW50SW5kZXgsIDEpO1xuICAgICAgdGhpcy5fd2F5cG9pbnRzLmNvb3JkLnNwbGljZSh3YXlwb2ludEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCB3YXlwb2ludElkINC90LUg0L/QtdGA0LXQtNCw0L0sINGD0LTQsNC70LjRgtGMINCy0YHQtSB3YXlwb2ludHNcbiAgICBpZiAod2F5cG9pbnRJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl93YXlwb2ludHMuaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgd2F5cG9pbnRFbGVtZW50cy5wdXNoKHRoaXMuX3dheXBvaW50cy5tYXBFbGVtZW50c1tpZF0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl93YXlwb2ludHMubWFwRWxlbWVudHMgPSB7fTtcbiAgICAgIHRoaXMuX3dheXBvaW50cy5pZCA9IFtdO1xuICAgICAgdGhpcy5fd2F5cG9pbnRzLmNvb3JkID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyKHtcbiAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgICBlbGVtZW50czogd2F5cG9pbnRFbGVtZW50cyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgX2NyZWF0ZVJvdXRlKCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZ2V0Um91dGVFbGVtKHtcbiAgICAgICAgZ29vZ2xlTWFwczogdGhpcy5fZ29vZ2xlTWFwcyxcbiAgICAgICAgc3RhcnQ6IHRoaXMuX3BvaW50cy5BLmNvb3JkLFxuICAgICAgICBlbmQ6IHRoaXMuX3BvaW50cy5CLmNvb3JkLFxuICAgICAgICB3YXlwb2ludHM6IHRoaXMuX3dheXBvaW50cy5jb29yZCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JvdXRlRWxlbSA9IHJlc3BvbnNlO1xuICAgICAgICAgIC8vINC/0YDQuCDRg9C00LDRh9C90L7QvCDQv9C+0LvRg9GH0LXQvdC40Lgg0LTQsNC90L3Ri9GFLCDRgdCx0YDQvtGB0LjRgtGMIHRoaXMuX2xhc3RDcmVhdGVkRWxlbVxuICAgICAgICAgIHRoaXMuX2xhc3RDcmVhdGVkRWxlbSA9IHt9O1xuICAgICAgICAgIC8vINGD0LTQsNC70LjRgtGMINGBINC60LDRgNGC0Ysg0L/RgNC10LTRi9C00YPRidC40LkgcG9seWxpbmUg0LXRgdC70Lgg0L7QvSDQsdGL0LtcbiAgICAgICAgICBpZiAodGhpcy5fcG9seWxpbmUubWFwRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZVBvbHlsaW5lRWxlbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDQv9C+0LvRg9GH0LjRgtGMINC80LDRgdGB0LjQsiDRgtC+0YfQtdC6INGBINC60L7QvtGA0LTQuNC90LDRgtCw0LzQuCBwb2x5bGluZVxuICAgICAgICAgIGNvbnN0IHBvbHlsaW5lUGF0aCA9IGdldFBvbHlsaW5lUGF0aCh7XG4gICAgICAgICAgICByb3V0ZUVsZW06IHJlc3BvbnNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVBvbHlsaW5lRWxlbSh7IHBvbHlsaW5lUGF0aCB9KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHN0YXR1cyk7XG4gICAgICAgICAgdGhpcy5faGVuZGxlclplcm9SZXN1bHRzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIF9jdXRQb2x5bGluZSh7IHBvaW50TmFtZSB9KSB7XG4gICAgLy8g0LHQtdGA0LXQvCDQv9C10YDQstGL0Lkg0LjQu9C4INC/0L7RgdC70LXQtNC90LjQuSB3YXlwb2ludFxuICAgIGNvbnN0IHdheXBvaW50Q29vcmQgPSAocG9pbnROYW1lID09PSAnQScpXG4gICAgICA/IHRoaXMuX3dheXBvaW50cy5jb29yZFswXS5sb2NhdGlvblxuICAgICAgOiB0aGlzLl93YXlwb2ludHMuY29vcmRbdGhpcy5fd2F5cG9pbnRzLmNvb3JkLmxlbmd0aCAtIDFdLmxvY2F0aW9uO1xuXG4gICAgY29uc3QgY3V0TWV0aG9kID0gKHBvaW50TmFtZSA9PT0gJ0EnKVxuICAgICAgPyAnZW5kJ1xuICAgICAgOiAnYmVnaW5uaW5nJztcblxuICAgIHRoaXMuX3BvbHlsaW5lLnBhdGggPSBjdXRQb2x5bGluZVBhdGgoe1xuICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgICBjdXRQb2ludENvb3JkOiB3YXlwb2ludENvb3JkLFxuICAgICAgcG9seWxpbmVQYXRoOiB0aGlzLl9wb2x5bGluZS5wYXRoLFxuICAgICAgY3V0TWV0aG9kLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY3JlYXRlUG9seWxpbmVFbGVtKHsgcG9seWxpbmVQYXRoOiB0aGlzLl9wb2x5bGluZS5wYXRoIH0pO1xuICB9XG5cblxuICBfcmVuZGVyKHsgZWxlbWVudHMsIGFjdGlvbiB9KSB7XG4gICAgbGV0IGFjdGlvbkZ1bmN0aW9uO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgIGFjdGlvbkZ1bmN0aW9uID0gKHsgbWFwRWxlbWVudCB9KSA9PiB7XG4gICAgICAgIG1hcEVsZW1lbnQuc2V0TWFwKHRoaXMuX21hcCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgYWN0aW9uRnVuY3Rpb24gPSAoeyBtYXBFbGVtZW50IH0pID0+IHtcbiAgICAgICAgbWFwRWxlbWVudC5zZXRNYXAobnVsbCk7XG4gICAgICAgIHRoaXMuX2dvb2dsZU1hcHMuZXZlbnQuY2xlYXJJbnN0YW5jZUxpc3RlbmVycyhtYXBFbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFhY3Rpb25GdW5jdGlvbikgcmV0dXJuO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgobWFwRWxlbWVudCkgPT4ge1xuICAgICAgYWN0aW9uRnVuY3Rpb24oeyBtYXBFbGVtZW50IH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBfYWRqdXN0Q29vcmRPZlBvaW50cygpIHtcbiAgICBjb25zdCBwb2x5bGluZUNvb3JkQSA9IHRoaXMuX3BvbHlsaW5lLnBhdGhbMF07XG4gICAgdGhpcy5fcG9pbnRzLkEubWFwRWxlbWVudHMubWFya2VyUG9pbnRFbGVtLnNldFBvc2l0aW9uKHBvbHlsaW5lQ29vcmRBKTtcbiAgICB0aGlzLl9wb2ludHMuQS5jb29yZCA9IHBvbHlsaW5lQ29vcmRBO1xuXG4gICAgY29uc3QgcG9seWxpbmVDb29yZEIgPSB0aGlzLl9wb2x5bGluZS5wYXRoW3RoaXMuX3BvbHlsaW5lLnBhdGgubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5fcG9pbnRzLkIubWFwRWxlbWVudHMubWFya2VyUG9pbnRFbGVtLnNldFBvc2l0aW9uKHBvbHlsaW5lQ29vcmRCKTtcbiAgICB0aGlzLl9wb2ludHMuQi5jb29yZCA9IHBvbHlsaW5lQ29vcmRCO1xuICB9XG5cblxuICBfaGVuZGxlclplcm9SZXN1bHRzKCkge1xuICAgIC8vINC10YHQu9C4INC/0L7RgdC70LXQtNC90LjQuSDRjdC70LXQvNC10L3RgiDQsdGL0Lsgd2F5cG9pbnRcbiAgICBpZiAodHlwZW9mIHRoaXMuX2xhc3RDcmVhdGVkRWxlbS53YXlwb2ludCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IHdheXBvaW50SW5kZXggPSB0aGlzLl9sYXN0Q3JlYXRlZEVsZW0ud2F5cG9pbnQ7XG4gICAgICAvLyDRg9C00LDQu9C40YLRjCDRgSDQv9C+0LfQuNGG0LjQuCB3YXlwb2ludEluZGV4LCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviBpZFxuICAgICAgdGhpcy5fd2F5cG9pbnRzLmlkLnNwbGljZSh3YXlwb2ludEluZGV4LCAxKTtcbiAgICAgIC8vINGD0LTQsNC70LjRgtGMINGBINC/0L7Qt9C40YbQuNC4IHdheXBvaW50SW5kZXgsINC40L3RhNC+0YDQvNCw0YbQuNGOINC+INC60L7QvtGA0LTQuNC90LDRgtCw0YUgd2F5cG9pbnRcbiAgICAgIHRoaXMuX3dheXBvaW50cy5jb29yZC5zcGxpY2Uod2F5cG9pbnRJbmRleCwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vINC10YHQu9C4INC/0L7RgdC70LXQtNC90LjQuSDRjdC70LXQvNC10L3RgiDQsdGL0LsgcG9pbnRcbiAgICBpZiAodGhpcy5fbGFzdENyZWF0ZWRFbGVtLnBvaW50KSB7XG4gICAgICBjb25zdCBwb2ludE5hbWUgPSB0aGlzLl9sYXN0Q3JlYXRlZEVsZW0ucG9pbnQ7XG4gICAgICB0aGlzLl9yZW1vdmVQb2ludEVsZW0oeyBwb2ludE5hbWUgfSk7XG4gICAgfVxuICB9XG5cblxuICBfc2F2ZVVzZXJEYXRhKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gcGFja2FnaW5nVXNlckRhdGFEcml2ZXIoe1xuICAgICAgdXNlck5hbWU6IHRoaXMuX3VzZXJEYXRhLnVzZXJOYW1lLFxuICAgICAgcG9pbnRzOiB0aGlzLl9wb2ludHMsXG4gICAgICBwb2x5bGluZTogdGhpcy5fcG9seWxpbmUsXG4gICAgICByb3V0ZUVsZW06IHRoaXMuX3JvdXRlRWxlbSxcbiAgICAgIHdheXBvaW50czogdGhpcy5fd2F5cG9pbnRzLFxuICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgfSk7XG5cbiAgICBodHRwUmVxdWVzdCh7XG4gICAgICB1cmw6ICcuL2RyaXZlci9zYXZlLWRhdGEnLFxuICAgICAgZGF0YTogdXNlckRhdGEsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZSBkYXRhIHN0YXR1czonLCByZXNwb25zZSk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgX2luaXRVc2VyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuX3VzZXJEYXRhLmRyaXZlciB8fCAhdGhpcy5fdXNlckRhdGEuZHJpdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VzZXJEYXRhLmRyaXZlci5wb2ludHMuQS5jb29yZCAmJiB0aGlzLl91c2VyRGF0YS5kcml2ZXIucG9pbnRzLkIuY29vcmQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBvaW50RWxlbSh7XG4gICAgICAgIHBvaW50TmFtZTogJ0EnLFxuICAgICAgICBjb29yZDogZnJvbVBvaW50VG9MYXRMbmcoe1xuICAgICAgICAgIG1hcDogdGhpcy5fbWFwLFxuICAgICAgICAgIHBvaW50czogW3RoaXMuX3VzZXJEYXRhLmRyaXZlci5wb2ludHMuQS5jb29yZF0sXG4gICAgICAgIH0pWzBdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9jcmVhdGVQb2ludEVsZW0oe1xuICAgICAgICBwb2ludE5hbWU6ICdCJyxcbiAgICAgICAgY29vcmQ6IGZyb21Qb2ludFRvTGF0TG5nKHtcbiAgICAgICAgICBtYXA6IHRoaXMuX21hcCxcbiAgICAgICAgICBwb2ludHM6IFt0aGlzLl91c2VyRGF0YS5kcml2ZXIucG9pbnRzLkIuY29vcmRdLFxuICAgICAgICB9KVswXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl91c2VyRGF0YS5kcml2ZXIucG9seWxpbmUucGF0aCkge1xuICAgICAgdGhpcy5fY3JlYXRlUG9seWxpbmVFbGVtKHtcbiAgICAgICAgcG9seWxpbmVQYXRoOiBmcm9tUG9pbnRUb0xhdExuZyh7XG4gICAgICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgICAgICAgcG9pbnRzOiB0aGlzLl91c2VyRGF0YS5kcml2ZXIucG9seWxpbmUucGF0aCxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdXNlckRhdGEuZHJpdmVyLndheXBvaW50cy5jb29yZC5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHdheXBvaW50c0Nvb3JkID0gdGhpcy5fdXNlckRhdGEuZHJpdmVyLndheXBvaW50cy5jb29yZDtcblxuICAgICAgd2F5cG9pbnRzQ29vcmQuZm9yRWFjaCgod2F5cG9pbnRDb29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBmcm9tUG9pbnRUb0xhdExuZyh7XG4gICAgICAgICAgbWFwOiB0aGlzLl9tYXAsXG4gICAgICAgICAgcG9pbnRzOiBbd2F5cG9pbnRDb29yZC5sb2NhdGlvbl0sXG4gICAgICAgIH0pWzBdO1xuICAgICAgICB0aGlzLl9jcmVhdGVXYXlwb2ludEVsZW0oe1xuICAgICAgICAgIGlkOiB0aGlzLl91c2VyRGF0YS5kcml2ZXIud2F5cG9pbnRzLmlkW2luZGV4XSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBjb29yZCxcbiAgICAgICAgICBzdG9wb3Zlcjogd2F5cG9pbnRDb29yZC5zdG9wb3ZlcixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fcG9pbnRzLkEubWFwRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuX3JlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZTogJ0EnIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9pbnRzLkIubWFwRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuX3JlbW92ZVBvaW50RWxlbSh7IHBvaW50TmFtZTogJ0InIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9seWxpbmUubWFwRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuX3JlbW92ZVBvbHlsaW5lRWxlbSgpO1xuICAgIH1cbiAgICBpZiAoIW9iaklzRW1wdHkodGhpcy5fd2F5cG9pbnRzLm1hcEVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5fcmVtb3ZlV2F5cG9pbnRFbGVtZW50cygpO1xuICAgIH1cbiAgICB0aGlzLl9nb29nbGVNYXBzLmV2ZW50LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnModGhpcy5fbWFwKTtcbiAgICBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy5fc3Vic2NyaWJlLmRlc3Ryb3lNYXApO1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLl9zdWJzY3JpYmUuaW5pdFVzZXJEYXRhTWFwKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERyaXZlck1vZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL2RyaXZlci1tb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgZnJvbUxhdExuZ1RvUG9pbnQgPSAoeyBtYXAsIHBvaW50cyB9KSA9PiB7XG4gIGNvbnN0IGNvbnZlcnRpbmdQb2ludHMgPSBbXTtcbiAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgY29udmVydGluZ1BvaW50cy5wdXNoKG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvUG9pbnQocG9pbnQpKTtcbiAgfSk7XG4gIHJldHVybiBjb252ZXJ0aW5nUG9pbnRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tTGF0TG5nVG9Qb2ludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZnJvbS1sYXRMbmctdG8tcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5jb25zdCBmcm9tUG9pbnRUb0xhdExuZyA9ICh7IG1hcCwgcG9pbnRzIH0pID0+IHtcbiAgY29uc3QgY29udmVydGluZ1BvaW50cyA9IFtdO1xuICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICBjb252ZXJ0aW5nUG9pbnRzLnB1c2gobWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhwb2ludCkpO1xuICB9KTtcbiAgcmV0dXJuIGNvbnZlcnRpbmdQb2ludHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyb21Qb2ludFRvTGF0TG5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9mcm9tLXBvaW50LXRvLWxhdExuZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmNvbnN0IGRlZmluZVBvaW50ID0gKHsgcG9pbnRzIH0pID0+IHtcbiAgaWYgKCFwb2ludHMuQS5tYXBFbGVtZW50cykge1xuICAgIHJldHVybiAnQSc7XG4gIH1cbiAgaWYgKHBvaW50cy5BLm1hcEVsZW1lbnRzICYmICFwb2ludHMuQi5tYXBFbGVtZW50cykge1xuICAgIHJldHVybiAnQic7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVBvaW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9kZWZpbmUtcG9pbnQtbmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBnZXREYXRhT2ZNaW5EaXN0YW5jZVRvU2VnbWVudCA9IHJlcXVpcmUoJy4vZ2V0LWRhdGEtb2YtbWluLWRpc3RhbmNlLXRvLXNlZ21lbnQnKTtcbmNvbnN0IGdldENsb3Nlc3RQb2ludE51bWJlck9uUG9seWxpbmUgPSByZXF1aXJlKCcuL2dldC1jbG9zZXN0LXBvaW50LW51bWJlci1vbi1wb2x5bGluZScpO1xuY29uc3QgZnJvbUxhdExuZ1RvUG9pbnQgPSByZXF1aXJlKCcuL2Zyb20tbGF0TG5nLXRvLXBvaW50Jyk7XG5jb25zdCBmcm9tUG9pbnRUb0xhdExuZyA9IHJlcXVpcmUoJy4vZnJvbS1wb2ludC10by1sYXRMbmcnKTtcblxuY29uc3QgZ2V0RGF0YU9mQ2xvc2VzdENvb3JkT25Qb2x5bGluZSA9ICh7IG1hcCwgcG9pbnRMYXRMbmcsIHBvbHlsaW5lTGF0TG5nIH0pID0+IHtcbiAgY29uc3QgcG9pbnQgPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgbWFwLFxuICAgIHBvaW50czogW3BvaW50TGF0TG5nXSxcbiAgfSlbMF07XG5cbiAgY29uc3QgcG9seWxpbmUgPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgbWFwLFxuICAgIHBvaW50czogcG9seWxpbmVMYXRMbmcsXG4gIH0pO1xuXG4gIC8vINC+0L/RgNC10LTQtdC70LXQvdC40LUg0L/QvtGA0Y/QtNC60L7QstC+0LPQviDQvdC+0LzQtdGA0LAg0LHQu9C40LbQsNC50YjQtdC5INGC0L7Rh9C60Lgg0L/QvtC70LjQu9C40L3QuNC4LlxuICBjb25zdCBjbG9zZXN0UG9pbnROdW1iZXIgPSBnZXRDbG9zZXN0UG9pbnROdW1iZXJPblBvbHlsaW5lKHtcbiAgICBwb2ludCxcbiAgICBwb2x5bGluZSxcbiAgfSk7XG5cbiAgLypcbiAgKiAgINC+0L/RgNC10LTQtdC+0LXQvdC40LUg0LHQu9C40LbQsNC50YjQtdC5INC60L7QvtGA0LTQuNC90LDRgtGLINC90LAg0L/QvtC70LjQu9C40L3QuNC4XG4gICogICDQtNCw0L3QvdCw0Y8g0LrQvtC+0YDQtNC40L3QsNGC0LAg0YDQsNGB0L/QvtC70L7QttC10L3QsCDQvdCwINC+0YLRgNC10LfQutC1INC/0YDQuNC70LXQttCw0YnQtdC8INC6INGC0L7Rh9C60LUg0YEg0L3QvtC80LXRgNC+0LwgY2xvc2VzdFBvaW50TnVtYmVyXG4gICogICDRjdGC0L4g0LzQvtC20LXRgiDQsdGL0YLRjCDQvtGC0YDQtdC30L7QuiDQtNC+INC40LvQuCDQv9C+0YHQu9C1INGC0L7Rh9C60Lgg0YEg0L3QvtC80LXRgNC+0LwgY2xvc2VzdFBvaW50TnVtYmVyXG4gICogICDQtNC70Y8g0YHRgNCw0LLQvdC10L3QuNGPINCx0LXRgNC10Lwg0L7QsdCwINGN0YLQuCDQvtGC0YDQtdC30LrQsFxuICAqL1xuXG4gIC8vINC+0L/RgNC10LTQtdC70LXQvdC40LUg0L7RgtGA0LXQt9C60L7QsiDQtNC70Y8g0YHRgNCw0LLQvdC10L3QuNGPXG4gIGNvbnN0IGZpcnN0UG9pbnRPZlBvbHlsaW5lID0gMDtcbiAgY29uc3QgbGFzdFBvaW50T2ZQb2x5bGluZSA9IHBvbHlsaW5lLmxlbmd0aCAtIDE7XG4gIC8vINC+0L/RgNC10LTQtdC70LXQvdC40LUg0L7RgtGA0LXQt9C60L7QsiDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INC/0YDQvtCy0LXRgNC40YLRjFxuICBjb25zdCBzZWdtZW50c0ZvckNoZWNrID0gW107XG4gIGlmIChmaXJzdFBvaW50T2ZQb2x5bGluZSAhPT0gY2xvc2VzdFBvaW50TnVtYmVyICYmIGxhc3RQb2ludE9mUG9seWxpbmUgIT09IGNsb3Nlc3RQb2ludE51bWJlcikge1xuICAgIHNlZ21lbnRzRm9yQ2hlY2tbMF0gPSBbY2xvc2VzdFBvaW50TnVtYmVyIC0gMSwgY2xvc2VzdFBvaW50TnVtYmVyXTtcbiAgICBzZWdtZW50c0ZvckNoZWNrWzFdID0gW2Nsb3Nlc3RQb2ludE51bWJlciwgY2xvc2VzdFBvaW50TnVtYmVyICsgMV07XG4gIH1cbiAgaWYgKGZpcnN0UG9pbnRPZlBvbHlsaW5lID09PSBjbG9zZXN0UG9pbnROdW1iZXIpIHtcbiAgICBzZWdtZW50c0ZvckNoZWNrWzBdID0gWzAsIDFdO1xuICB9XG4gIGlmIChsYXN0UG9pbnRPZlBvbHlsaW5lID09PSBjbG9zZXN0UG9pbnROdW1iZXIpIHtcbiAgICBzZWdtZW50c0ZvckNoZWNrWzBdID0gW2xhc3RQb2ludE9mUG9seWxpbmUgLSAxLCBsYXN0UG9pbnRPZlBvbHlsaW5lXTtcbiAgfVxuICAvLyDQvtC/0YDQtdC00LXQvtC10L3QuNC1INCx0LvQuNC20LDQudGI0LXQuSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC/0L7Qu9C40LvQuNC90LjQuFxuICBsZXQgY2xvc2VzdFBvaW50RGlzdCA9IDI1NjtcbiAgbGV0IGNsb3Nlc3RQb2ludENvb3JkO1xuICBjb25zdCBjbG9zZXN0U2VnbWVudCA9IFtdO1xuICBzZWdtZW50c0ZvckNoZWNrLmZvckVhY2goKHNlZ21lbnQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXREYXRhT2ZNaW5EaXN0YW5jZVRvU2VnbWVudCh7XG4gICAgICBwb2ludCxcbiAgICAgIHBvaW50U2VnMTogcG9seWxpbmVbc2VnbWVudFswXV0sXG4gICAgICBwb2ludFNlZzI6IHBvbHlsaW5lW3NlZ21lbnRbMV1dLFxuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZGlzdCA8IGNsb3Nlc3RQb2ludERpc3QpIHtcbiAgICAgIGNsb3Nlc3RQb2ludERpc3QgPSByZXN1bHQuZGlzdDtcbiAgICAgIGNsb3Nlc3RQb2ludENvb3JkID0gcmVzdWx0LmNvb3JkO1xuICAgICAgW2Nsb3Nlc3RTZWdtZW50WzBdLCBjbG9zZXN0U2VnbWVudFsxXV0gPSBzZWdtZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb29yZDogZnJvbVBvaW50VG9MYXRMbmcoe1xuICAgICAgbWFwLFxuICAgICAgcG9pbnRzOiBbY2xvc2VzdFBvaW50Q29vcmRdLFxuICAgIH0pWzBdLFxuICAgIHNlZ21lbnQ6IGNsb3Nlc3RTZWdtZW50LFxuICAgIGRpc3Q6IGNsb3Nlc3RQb2ludERpc3QsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERhdGFPZkNsb3Nlc3RDb29yZE9uUG9seWxpbmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC91dGlsL2dldC1kYXRhLW9mLWNsb3Nlc3QtY29vcmQtb24tcG9seWxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgZ2V0RGF0YU9mTWluRGlzdGFuY2VUb1NlZ21lbnQgPSAoeyBwb2ludCwgcG9pbnRTZWcxLCBwb2ludFNlZzIgfSkgPT4ge1xuICBjb25zdCBnZXRWZWN0b3IgPSAocG9pbnQxLCBwb2ludDIpID0+IHtcbiAgICBjb25zdCB2ZWN0b3IgPSBbXTtcbiAgICB2ZWN0b3IueCA9IHBvaW50Mi54IC0gcG9pbnQxLng7XG4gICAgdmVjdG9yLnkgPSBwb2ludDIueSAtIHBvaW50MS55O1xuICAgIHJldHVybiB2ZWN0b3I7XG4gIH07XG5cbiAgY29uc3QgdmVjdG9yUHJvZHVjdCA9ICh2ZWN0b3JBLCB2ZWN0b3JCKSA9PiAodmVjdG9yQS54ICogdmVjdG9yQi54KSArICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLnkpO1xuXG4gIGNvbnN0IGRpc3QgPSB2ZWN0b3IgPT4gTWF0aC5zcXJ0KCh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KSk7XG5cbiAgY29uc3QgdmVjdG9yMSA9IGdldFZlY3Rvcihwb2ludFNlZzEsIHBvaW50KTtcbiAgY29uc3QgdmVjdG9yU2VnID0gZ2V0VmVjdG9yKHBvaW50U2VnMSwgcG9pbnRTZWcyKTtcblxuICBjb25zdCBjMSA9IHZlY3RvclByb2R1Y3QodmVjdG9yMSwgdmVjdG9yU2VnKTtcblxuICBpZiAoYzEgPD0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXN0OiBkaXN0KHZlY3RvcjEpLFxuICAgICAgY29vcmQ6IHBvaW50U2VnMSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYzIgPSB2ZWN0b3JQcm9kdWN0KHZlY3RvclNlZywgdmVjdG9yU2VnKTtcblxuICBpZiAoYzIgPD0gYzEpIHtcbiAgICBjb25zdCB2ZWN0b3IyID0gZ2V0VmVjdG9yKHBvaW50LCBwb2ludFNlZzIpO1xuICAgIHJldHVybiB7XG4gICAgICBkaXN0OiBkaXN0KHZlY3RvcjIpLFxuICAgICAgY29vcmQ6IHBvaW50U2VnMixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYiA9IGMxIC8gYzI7XG4gIGNvbnN0IHBvaW50UGVycGVuZGljdWxhciA9IFtdO1xuICBwb2ludFBlcnBlbmRpY3VsYXIueCA9IHBvaW50U2VnMS54ICsgKHZlY3RvclNlZy54ICogYik7XG4gIHBvaW50UGVycGVuZGljdWxhci55ID0gcG9pbnRTZWcxLnkgKyAodmVjdG9yU2VnLnkgKiBiKTtcblxuICBjb25zdCB2ZWN0b3JQZXJwZW5kaWN1bGFyID0gZ2V0VmVjdG9yKHBvaW50LCBwb2ludFBlcnBlbmRpY3VsYXIpO1xuICByZXR1cm4ge1xuICAgIGRpc3Q6IGRpc3QodmVjdG9yUGVycGVuZGljdWxhciksXG4gICAgY29vcmQ6IHBvaW50UGVycGVuZGljdWxhcixcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF0YU9mTWluRGlzdGFuY2VUb1NlZ21lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC91dGlsL2dldC1kYXRhLW9mLW1pbi1kaXN0YW5jZS10by1zZWdtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGdldFJvdXRlRWxlbSA9ICh7XG4gIGdvb2dsZU1hcHMsXG4gIHdheXBvaW50cyxcbiAgc3RhcnQsXG4gIGVuZCxcbn0pID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBvcmlnaW46IHN0YXJ0LFxuICAgIGRlc3RpbmF0aW9uOiBlbmQsXG4gICAgdHJhdmVsTW9kZTogJ0RSSVZJTkcnLFxuICAgIHdheXBvaW50cyxcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGVNYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG5cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCAocmVzcG9uc2UsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSb3V0ZUVsZW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC9kcml2ZXItbW9kZS91dGlsL2dldC1yb3V0ZS1lbGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGdldE1hcmtlclBvaW50RWxlbSA9ICh7XG4gIGdvb2dsZU1hcHMsXG4gIGNvb3JkLFxuICBsYWJlbCxcbn0pID0+IHtcbiAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZU1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjogY29vcmQsXG4gICAgbGFiZWw6IHtcbiAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFya2VyUG9pbnRFbGVtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvZHJpdmVyLW1vZGUvdXRpbC9nZXQtbWFya2VyLXBvaW50LWVsZW0uanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZnVuY3Rpb24gZ2V0UG9seWxpbmVQYXRoKHsgcm91dGVFbGVtIH0pIHtcbiAgY29uc3QgbXlSb3V0ZSA9IHJvdXRlRWxlbS5yb3V0ZXNbMF0ubGVncztcbiAgY29uc3QgcG9pbnRzID0gW107XG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBteVJvdXRlLmxlbmd0aDsgayArPSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVJvdXRlW2tdLnN0ZXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG15Um91dGVba10uc3RlcHNbaV0ubGF0X2xuZ3MubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgcG9pbnRzLnB1c2gobXlSb3V0ZVtrXS5zdGVwc1tpXS5sYXRfbG5nc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQb2x5bGluZVBhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC9kcml2ZXItbW9kZS91dGlsL2dldC1wb2x5bGluZS1wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGdldE1hcmtlcldheVBvaW50RWxlbSA9ICh7XG4gIGdvb2dsZU1hcHMsXG4gIG1hcCxcbiAgY29vcmQsXG59KSA9PiB7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGVNYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3JkLFxuICAgIG1hcCxcbiAgICBpY29uOiB7XG4gICAgICBwYXRoOiBnb29nbGVNYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJyxcbiAgICAgIHN0cm9rZVdlaWdodDogMSxcbiAgICAgIGZpbGxDb2xvcjogJ3doaXRlJyxcbiAgICAgIGZpbGxPcGFjaXR5OiAwLjksXG4gICAgICBzY2FsZTogNSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gbWFya2VyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXJrZXJXYXlQb2ludEVsZW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC9kcml2ZXItbW9kZS91dGlsL2dldC1tYXJrZXItd2F5cG9pbnQtZWxlbS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZ2V0RGlzdGFuY2VCZXR3ZWVuUG9pbnRzID0gcmVxdWlyZSgnLi9nZXQtZGlzdGFuY2UtYmV0d2Vlbi1wb2ludHMnKTtcblxuLy8g0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQv9C+0YDRj9C00LrQvtCy0L7Qs9C+INC90L7QvNC10YDQsCDQsdC70LjQttCw0LnRiNC10Lkg0YLQvtGH0LrQuCDQv9C+0LvQuNC70LjQvdC40LhcbmNvbnN0IGdldENsb3Nlc3RQb2ludE51bWJlck9uUG9seWxpbmUgPSAoeyBwb2ludCwgcG9seWxpbmUgfSkgPT4ge1xuICBsZXQgbWluRGlzdGFuY2VUb1BvbHlsaW5lUG9pbnQgPSAyNTY7XG4gIGxldCBjbG9zZXN0UG9pbnROdW1iZXIgPSAwO1xuXG4gIHBvbHlsaW5lLmZvckVhY2goKHBvbHlsaW5lUG9pbnRDb29yZCwgcG9pbnROdW1iZXIpID0+IHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGdldERpc3RhbmNlQmV0d2VlblBvaW50cyh7XG4gICAgICBwb2ludDE6IHBvaW50LFxuICAgICAgcG9pbnQyOiBwb2x5bGluZVBvaW50Q29vcmQsXG4gICAgfSk7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZVRvUG9seWxpbmVQb2ludCkge1xuICAgICAgbWluRGlzdGFuY2VUb1BvbHlsaW5lUG9pbnQgPSBkaXN0YW5jZTtcbiAgICAgIGNsb3Nlc3RQb2ludE51bWJlciA9IHBvaW50TnVtYmVyO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjbG9zZXN0UG9pbnROdW1iZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldENsb3Nlc3RQb2ludE51bWJlck9uUG9seWxpbmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC91dGlsL2dldC1jbG9zZXN0LXBvaW50LW51bWJlci1vbi1wb2x5bGluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5jb25zdCBnZXREaXN0YW5jZUJldHdlZW5Qb2ludHMgPSAoeyBwb2ludDEsIHBvaW50MiB9KSA9PiB7XG4gIGNvbnN0IHZlY3RvciA9IHt9O1xuICB2ZWN0b3IueCA9IHBvaW50Mi54IC0gcG9pbnQxLng7XG4gIHZlY3Rvci55ID0gcG9pbnQyLnkgLSBwb2ludDEueTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KCh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERpc3RhbmNlQmV0d2VlblBvaW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFwL3V0aWwvZ2V0LWRpc3RhbmNlLWJldHdlZW4tcG9pbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGdldERhdGFPZkNsb3Nlc3RDb29yZE9uUG9seWxpbmUgPSByZXF1aXJlKCcuLi8uLi91dGlsL2dldC1kYXRhLW9mLWNsb3Nlc3QtY29vcmQtb24tcG9seWxpbmUnKTtcblxuXG5jb25zdCBjdXRQb2x5bGluZVBhdGggPSAoe1xuICBtYXAsXG4gIGN1dFBvaW50Q29vcmQsXG4gIGN1dE1ldGhvZCxcbiAgcG9seWxpbmVQYXRoLFxufSkgPT4ge1xuICBjb25zdCBwb2x5bGluZVNlZ21lbnQgPSBnZXREYXRhT2ZDbG9zZXN0Q29vcmRPblBvbHlsaW5lKHtcbiAgICBtYXAsXG4gICAgcG9pbnRMYXRMbmc6IGN1dFBvaW50Q29vcmQsXG4gICAgcG9seWxpbmVMYXRMbmc6IHBvbHlsaW5lUGF0aCxcbiAgfSlcbiAgICAuc2VnbWVudFswXTtcblxuICBjb25zdCBjdXRQb2ludE51bWJlciA9IHBvbHlsaW5lU2VnbWVudCArIDE7XG5cbiAgcG9seWxpbmVQYXRoLnNwbGljZShjdXRQb2ludE51bWJlciwgMCwgY3V0UG9pbnRDb29yZCk7XG5cbiAgLy8g0LHQtdGA0LXQvCDQvdCw0YfQsNC70L4g0LjQu9C4INC60L7QvdC10YYg0LzQsNGB0YHQuNCy0LBcbiAgbGV0IGFyciA9IFtdO1xuICBpZiAoY3V0TWV0aG9kID09PSAnYmVnaW5uaW5nJykge1xuICAgIGFyciA9IHBvbHlsaW5lUGF0aC5zbGljZSgwLCBjdXRQb2ludE51bWJlciArIDEpO1xuICB9XG4gIGlmIChjdXRNZXRob2QgPT09ICdlbmQnKSB7XG4gICAgYXJyID0gcG9seWxpbmVQYXRoLnNsaWNlKGN1dFBvaW50TnVtYmVyKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjdXRQb2x5bGluZVBhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC9kcml2ZXItbW9kZS91dGlsL2N1dC1wb2x5bGluZS1wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGdldFBvbHlsaW5lRWxlbSA9ICgoeyBnb29nbGVNYXBzLCBwYXRoIH0pID0+IHtcbiAgY29uc3QgcG9seWxpbmVFbGVtID0gbmV3IGdvb2dsZU1hcHMuUG9seWxpbmUoe1xuICAgIHBhdGgsXG4gICAgc3Ryb2tlQ29sb3I6ICdibHVlJyxcbiAgICBzdHJva2VPcGFjaXR5OiAwLjUsXG4gICAgc3Ryb2tlV2VpZ2h0OiA1LFxuICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICBjbGlja2FibGU6IGZhbHNlLFxuICB9KTtcblxuICByZXR1cm4gcG9seWxpbmVFbGVtO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UG9seWxpbmVFbGVtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvZHJpdmVyLW1vZGUvdXRpbC9nZXQtcG9seWxpbmUtZWxlbS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5jb25zdCBnZXRJZCA9ICh7IGVsZW1lbnRzIH0pID0+IHtcbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG5cbiAgY29uc3QgYXJySWQgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGFycklkW2lkXSA9IHRydWU7XG4gIH0pO1xuXG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgYXJySWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJySWRbaV0gIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21hcC9kcml2ZXItbW9kZS91dGlsL2dldC1pZC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZ2V0RGF0YU9mTWluRGlzdGFuY2VUb1NlZ21lbnQgPSByZXF1aXJlKCcuLi8uLi91dGlsL2dldC1kYXRhLW9mLW1pbi1kaXN0YW5jZS10by1zZWdtZW50Jyk7XG5jb25zdCBmcm9tTGF0TG5nVG9Qb2ludCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZnJvbS1sYXRMbmctdG8tcG9pbnQnKTtcblxuXG5jb25zdCBnZXRJbmRleFdheXBvaW50ID0gKHtcbiAgbWFwLFxuICBwb2ludEFDb29yZCxcbiAgcG9pbnRCQ29vcmQsXG4gIHdheXBvaW50cyxcbiAgY2xpY2tDb29yZCxcbn0pID0+IHtcbiAgY29uc3Qgd2F5cG9pbnRzQ29vcmQgPSBbXTtcblxuICAvLyDRgdC+0YXRgNCw0L3QtdC90LjQtSDQutC+0L7RgNC00LjQvdCw0YIgd2F5cG9pbnRcbiAgd2F5cG9pbnRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgd2F5cG9pbnRzQ29vcmQucHVzaChjb29yZC5sb2NhdGlvbik7XG4gIH0pO1xuXG4gIC8vINGB0L7Qt9C00LDQvdC40LUg0LzQsNGB0YHQuNCy0LAg0YEg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4INCy0LrQu9GO0YfQsNGO0YnQuNC80Lgg0YLQvtGH0LrQuCBBINC4IEJcbiAgbGV0IHNlZ21lbnRQb2ludHNDb29yZCA9IFtwb2ludEFDb29yZF07XG4gIHNlZ21lbnRQb2ludHNDb29yZCA9IHNlZ21lbnRQb2ludHNDb29yZC5jb25jYXQod2F5cG9pbnRzQ29vcmQsIHBvaW50QkNvb3JkKTtcblxuICAvLyDQutC+0L3QstC10YDRgtCw0YbQuNGPINC60L7QvtGA0LTQuNC90LDRglxuICBjb25zdCBjbGlja0Nvb3JkV29ybGQgPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgbWFwLFxuICAgIHBvaW50czogW2NsaWNrQ29vcmRdLFxuICB9KVswXTtcblxuICBjb25zdCBzZWdtZW50UG9pbnRzQ29vcmRXb3JsZCA9IGZyb21MYXRMbmdUb1BvaW50KHtcbiAgICBtYXAsXG4gICAgcG9pbnRzOiBzZWdtZW50UG9pbnRzQ29vcmQsXG4gIH0pO1xuXG4gIC8vINC/0L7Qu9GD0YfQtdC90LjQtSDQvNCw0YHQuNCy0LAg0YHQtdCz0LzQtdC90YLQvtCyIGMg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4XG4gIGNvbnN0IHNlZ21ldHNDb29yZFdvcmxkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudFBvaW50c0Nvb3JkV29ybGQubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2VnbWVudCA9IFtdO1xuICAgIHNlZ21lbnRbMF0gPSBzZWdtZW50UG9pbnRzQ29vcmRXb3JsZFtpXTtcbiAgICBzZWdtZW50WzFdID0gc2VnbWVudFBvaW50c0Nvb3JkV29ybGRbaSArIDFdO1xuXG4gICAgc2VnbWV0c0Nvb3JkV29ybGRbaV0gPSBzZWdtZW50O1xuICB9XG5cbiAgLy8g0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQvdC+0LzQtdGA0LAg0LHQu9C40LbQsNC50YjQtdCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICBsZXQgY2xvc2VzdERpc3QgPSAyNTY7XG4gIGxldCBjbG9zZXN0U2VnbWVudEluZGV4ID0gMDtcbiAgc2VnbWV0c0Nvb3JkV29ybGQuZm9yRWFjaCgoc2VnbWVudENvb3JkLCBzZWdtZW50SW5kZXgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXREYXRhT2ZNaW5EaXN0YW5jZVRvU2VnbWVudCh7XG4gICAgICBwb2ludDogY2xpY2tDb29yZFdvcmxkLFxuICAgICAgcG9pbnRTZWcxOiBzZWdtZW50Q29vcmRbMF0sXG4gICAgICBwb2ludFNlZzI6IHNlZ21lbnRDb29yZFsxXSxcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgY2xvc2VzdERpc3QgPSByZXN1bHQuZGlzdDtcbiAgICAgIGNsb3Nlc3RTZWdtZW50SW5kZXggPSBzZWdtZW50SW5kZXg7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2xvc2VzdFNlZ21lbnRJbmRleDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SW5kZXhXYXlwb2ludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvZ2V0LWluZGV4LXdheXBvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IG9iaklzRW1wdHkgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGFyciA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvYmpJc0VtcHR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9tYXAvdXRpbC9vYmotaXMtZW1wdHkuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGZyb21MYXRMbmdUb1BvaW50ID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9mcm9tLWxhdExuZy10by1wb2ludCcpO1xuXG5jb25zdCBwYWNrYWdpbmdVc2VyRGF0YURyaXZlciA9ICh7XG4gIHVzZXJOYW1lLFxuICBwb2ludHMsXG4gIHBvbHlsaW5lLFxuICB3YXlwb2ludHMsXG4gIG1hcCxcbn0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHt9O1xuICBkYXRhLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gIGRhdGEuZHJpdmVyID0ge1xuICAgIHBvaW50czoge1xuICAgICAgQToge30sXG4gICAgICBCOiB7fSxcbiAgICB9LFxuICAgIHBvbHlsaW5lOiB7fSxcbiAgICB3YXlwb2ludHM6IHtcbiAgICAgIGNvb3JkOiBbXSxcbiAgICAgIGlkOiBbXSxcbiAgICB9LFxuICB9O1xuXG4gIC8vINGD0L/QsNC60L7QstC60LAgcG9pbnRzXG4gIGlmIChwb2ludHMuQS5jb29yZCAmJiBwb2ludHMuQi5jb29yZCkge1xuICAgIFtkYXRhLmRyaXZlci5wb2ludHMuQS5jb29yZF0gPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgICBtYXAsXG4gICAgICBwb2ludHM6IFtwb2ludHMuQS5jb29yZF0sXG4gICAgfSk7XG5cbiAgICBbZGF0YS5kcml2ZXIucG9pbnRzLkIuY29vcmRdID0gZnJvbUxhdExuZ1RvUG9pbnQoe1xuICAgICAgbWFwLFxuICAgICAgcG9pbnRzOiBbcG9pbnRzLkIuY29vcmRdLFxuICAgIH0pO1xuICB9XG5cbiAgLy8g0YPQv9Cw0LrQvtCy0LrQsCBwb2x5bGluZVxuICBpZiAocG9seWxpbmUucGF0aCkge1xuICAgIGRhdGEuZHJpdmVyLnBvbHlsaW5lLnBhdGggPSBmcm9tTGF0TG5nVG9Qb2ludCh7XG4gICAgICBtYXAsXG4gICAgICBwb2ludHM6IHBvbHlsaW5lLnBhdGgsXG4gICAgfSk7XG4gIH1cblxuICAvLyDRg9C/0LDQutC+0LLQutCwIHdheXBvaW50c1xuICBpZiAod2F5cG9pbnRzLmlkLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IHdheXBvaW50c0Nvb3JkID0gW107XG5cbiAgICB3YXlwb2ludHMuY29vcmQuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIHdheXBvaW50c0Nvb3JkLnB1c2goe1xuICAgICAgICBsb2NhdGlvbjogZnJvbUxhdExuZ1RvUG9pbnQoe1xuICAgICAgICAgIG1hcCxcbiAgICAgICAgICBwb2ludHM6IFtjb29yZC5sb2NhdGlvbl0sXG4gICAgICAgIH0pWzBdLFxuICAgICAgICBzdG9wb3ZlcjogY29vcmQuc3RvcG92ZXIsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRhdGEuZHJpdmVyLndheXBvaW50cyA9IHtcbiAgICAgIGNvb3JkOiB3YXlwb2ludHNDb29yZCxcbiAgICAgIGlkOiB3YXlwb2ludHMuaWQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYWNrYWdpbmdVc2VyRGF0YURyaXZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFwL2RyaXZlci1tb2RlL3V0aWwvcGFja2FnaW5nLXVzZXItZGF0YS1kcml2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=