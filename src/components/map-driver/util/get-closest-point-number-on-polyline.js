import getDistanceBetweenPoints from './get-distance-between-points';

// определение порядкового номера ближайшей точки полилинии
export default ({ point, polyline }) => {
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
