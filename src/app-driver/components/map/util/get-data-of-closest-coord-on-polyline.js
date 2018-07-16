import getDataOfMinDistanceToSegment from './get-data-of-min-distance-to-segment';
import getClosestPointNumberOnPolyline from './get-closest-point-number-on-polyline';


export default ({ point, polyline }) => {
  // определение порядкового номера ближайшей точки полилинии.
  const closestPointNumber = getClosestPointNumberOnPolyline({
    point,
    polyline,
  });

  /*
  *   опредеоение ближайшей координаты на полилинии
  *   данная координата расположена на отрезке прилежащем к точке с номером closestPointNumber
  *   это может быть отрезок до или после точки с номером closestPointNumber
  *   для сравнения берем оба эти отрезка
  */

  // определение отрезков для сравнения
  const firstPointOfPolyline = 0;
  const lastPointOfPolyline = polyline.length - 1;
  // определение отрезков которые нужно проверить
  const segmentsForCheck = [];
  if (firstPointOfPolyline !== closestPointNumber && lastPointOfPolyline !== closestPointNumber) {
    segmentsForCheck[0] = [closestPointNumber - 1, closestPointNumber];
    segmentsForCheck[1] = [closestPointNumber, closestPointNumber + 1];
  }
  if (firstPointOfPolyline === closestPointNumber) {
    segmentsForCheck[0] = [0, 1];
  }
  if (lastPointOfPolyline === closestPointNumber) {
    segmentsForCheck[0] = [lastPointOfPolyline - 1, lastPointOfPolyline];
  }
  // опредеоение ближайшей координаты на полилинии
  let closestPointDist = 256;
  let closestPointCoord;
  const closestSegment = [];
  segmentsForCheck.forEach((segment) => {
    const result = getDataOfMinDistanceToSegment({
      point,
      pointSeg1: polyline[segment[0]],
      pointSeg2: polyline[segment[1]],
    });

    if (result.dist < closestPointDist) {
      closestPointDist = result.dist;
      closestPointCoord = result.coord;
      [closestSegment[0], closestSegment[1]] = segment;
    }
  });

  return {
    coord: closestPointCoord,
    segment: closestSegment,
    dist: closestPointDist,
  };
};
