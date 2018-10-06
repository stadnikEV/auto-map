export default ({ points }) => {
  if (!points.A.mapElements) {
    return 'A';
  }
  if (points.A.mapElements && !points.B.mapElements) {
    return 'B';
  }
  return null;
};
