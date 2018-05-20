const getDistanceBetweenPoints = require('./get-distance-between-points');
const getMinDistanceToSegment = require('./get-min-distance-to-segment');

const getClosestPointOnPoliline = ({ point, poliline }) => {
  let minDistanceToPolilinePoint = 256;
  let closestPointNumber = 0;
  // определение ближайшей точки полилинии

  poliline.forEach((polilinePointCoord, pointNumber) => {
    const distance = getDistanceBetweenPoints({
      point1: point,
      point2: polilinePointCoord,
    });
    if (distance < minDistanceToPolilinePoint) {
      minDistanceToPolilinePoint = distance;
      closestPointNumber = pointNumber;
    }
  });
  // определение ближайшей точки лежащей на отрезке полилинии. Берем два отрезока или один если ближайшая точка полилинии является первой или последней

  const getCoordOfClosestPointOnSegments = (segments) => {
    let closestPointDist = 256;
    let closestPointCoord;
    segments.forEach((segment) => {
      const result = getMinDistanceToSegment({
        point,
        pointSeg1: poliline[segment[0]],
        pointSeg2: poliline[segment[1]],
      });
      if (result.dist < closestPointDist) {
        closestPointDist = result.dist;
        closestPointCoord = result.coord;
      }
    });
    return closestPointCoord;
  };

  // определение отрезков для сравнения

  const firstPointOfPoliline = poliline[0];
  const lastPointOfPoliline = poliline[poliline.length - 1];

  const segmentsForCheck = [];
  if (firstPointOfPoliline === closestPointNumber) {
    segmentsForCheck[0] = [0, 1];
  }
  if (lastPointOfPoliline === closestPointNumber) {
    segmentsForCheck[0] = [lastPointOfPoliline - 1, lastPointOfPoliline];
  }
  if (firstPointOfPoliline !== closestPointNumber && lastPointOfPoliline !== closestPointNumber) {
    segmentsForCheck[0] = [closestPointNumber - 1, closestPointNumber];
    segmentsForCheck[1] = [closestPointNumber, closestPointNumber + 1];
  }

  return getCoordOfClosestPointOnSegments(segmentsForCheck);
};

module.exports = getClosestPointOnPoliline;
