import getDistanceBetweenPoints from './get-distance-between-points';
import fromLatLngToPoint from './from-latLng-to-point';

export default ({ googleMaps, map, circleElem }) => {
  const centerLatLng = circleElem.getCenter();
  const boundsLatLng = circleElem.getBounds();

  const pointOnCircleLat = boundsLatLng.f.f - ((boundsLatLng.f.f - boundsLatLng.f.b) / 2);
  const pointOnCircleLng = boundsLatLng.b.b;

  const pointOnCircleWorldCoord = fromLatLngToPoint({
    map,
    points: [new googleMaps.LatLng(pointOnCircleLat, pointOnCircleLng)],
  })[0];
  const centerWorldCoord = fromLatLngToPoint({
    map,
    points: [centerLatLng],
  })[0];

  return getDistanceBetweenPoints({
    point1: pointOnCircleWorldCoord,
    point2: centerWorldCoord,
  });
};
