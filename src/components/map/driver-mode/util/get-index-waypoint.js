import getDataOfMinDistanceToSegment from '../../util/get-data-of-min-distance-to-segment';
import fromLatLngToPoint from '../../util/from-latLng-to-point';


export default ({
  map,
  pointACoord,
  pointBCoord,
  waypoints,
  clickCoord,
}) => {
  const waypointsCoord = [];

  // сохранение координат waypoint
  waypoints.forEach((coord) => {
    waypointsCoord.push(coord.location);
  });

  // создание массива с координатами включающими точки A и B
  let segmentPointsCoord = [pointACoord];
  segmentPointsCoord = segmentPointsCoord.concat(waypointsCoord, pointBCoord);

  // конвертация координат
  const clickCoordWorld = fromLatLngToPoint({
    map,
    points: [clickCoord],
  })[0];

  const segmentPointsCoordWorld = fromLatLngToPoint({
    map,
    points: segmentPointsCoord,
  });

  // получение масива сегментов c координатами
  const segmetsCoordWorld = [];
  for (let i = 0; i < segmentPointsCoordWorld.length - 1; i += 1) {
    const segment = [];
    segment[0] = segmentPointsCoordWorld[i];
    segment[1] = segmentPointsCoordWorld[i + 1];

    segmetsCoordWorld[i] = segment;
  }

  // определение номера ближайшего сегмента
  let closestDist = 256;
  let closestSegmentIndex = 0;
  segmetsCoordWorld.forEach((segmentCoord, segmentIndex) => {
    const result = getDataOfMinDistanceToSegment({
      point: clickCoordWorld,
      pointSeg1: segmentCoord[0],
      pointSeg2: segmentCoord[1],
    });
    if (result.dist < closestDist) {
      closestDist = result.dist;
      closestSegmentIndex = segmentIndex;
    }
  });

  return closestSegmentIndex;
};
