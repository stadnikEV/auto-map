
const fromLatLngToPoint = ({ map, points }) => {
  const convertingPoints = [];
  points.forEach((point) => {
    convertingPoints.push(map.getProjection().fromLatLngToPoint(point));
  });
  return convertingPoints;
};

module.exports = fromLatLngToPoint;
