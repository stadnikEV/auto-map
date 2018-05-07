const createMarkerPassenger = require('./create-marker-passenger');
const createCircle = require('./create-circle');

function createPoint({ pointName, coord }) {
  const point = {};
  const circle = createCircle({
    googleMaps: this._googleMaps,
    center: coord,
    radius: 1000,
  });

  const marker = createMarkerPassenger({
    googleMaps: this._googleMaps,
    coord,
    label: pointName,
  });

  point.circle = circle;
  point.marker = marker;

  return point;
}

module.exports = createPoint;
