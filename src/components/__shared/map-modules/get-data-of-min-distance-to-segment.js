export default ({ point, pointSeg1, pointSeg2 }) => {
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
  const pointPerpendicular = {};
  pointPerpendicular.x = pointSeg1.x + (vectorSeg.x * b);
  pointPerpendicular.y = pointSeg1.y + (vectorSeg.y * b);

  const vectorPerpendicular = getVector(point, pointPerpendicular);

  return {
    dist: dist(vectorPerpendicular),
    coord: pointPerpendicular,
  };
};
