const definePoint = ({ points }) => {
  if (!points.A) {
    return 'A';
  }
  if (points.A && !points.B) {
    return 'B';
  }
  return null;
};

module.exports = definePoint;
