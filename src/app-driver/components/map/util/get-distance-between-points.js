
export default ({ point1, point2 }) => {
  const vector = {};
  vector.x = point2.x - point1.x;
  vector.y = point2.y - point1.y;

  return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
};
