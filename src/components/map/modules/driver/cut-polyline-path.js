import getDataOfClosestCoordOnPolyline from 'components/__shared/map-modules/get-data-of-closest-coord-on-polyline';
import fromLatLngToPoint from 'components/__shared/map-modules/from-latLng-to-point';


export default ({
  map,
  cutPointCoord,
  cutMethod,
  polylinePath,
}) => {
  const polylineSegment = getDataOfClosestCoordOnPolyline({
    map,
    point: fromLatLngToPoint({
      map,
      points: [cutPointCoord],
    })[0],
    polyline: fromLatLngToPoint({
      map,
      points: polylinePath,
    }),
  })
    .segment[0];

  const cutPointNumber = polylineSegment + 1;

  polylinePath.splice(cutPointNumber, 0, cutPointCoord);

  // берем начало или конец массива
  let arr = [];
  if (cutMethod === 'beginning') {
    arr = polylinePath.slice(0, cutPointNumber + 1);
  }
  if (cutMethod === 'end') {
    arr = polylinePath.slice(cutPointNumber);
  }
  return arr;
};
