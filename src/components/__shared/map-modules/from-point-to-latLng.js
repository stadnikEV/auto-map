export default ({ map, points }) => {
  const convertingPoints = [];
  points.forEach((point) => {
    convertingPoints.push(map.getProjection().fromPointToLatLng(point));
  });
  return convertingPoints;
};
