
export default ({ map, points }) => {
  const convertingPoints = [];
  points.forEach((point) => {
    convertingPoints.push(map.getProjection().fromLatLngToPoint(point));
  });
  return convertingPoints;
};
