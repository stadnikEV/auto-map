const createMarkerPassenger = require('./create-marker-passenger');
const createCircle = require('./create-circle');

function createPointPassenger({ pointName, coord, googleMaps }) {
  const point = {};
  const circle = createCircle({
    googleMaps,
    center: coord,
    radius: 1000,
  });

  const marker = createMarkerPassenger({
    googleMaps,
    coord,
    label: pointName,
  });

  point.circle = circle;
  point.marker = marker;

  return point;
}

module.exports = createPointPassenger;
