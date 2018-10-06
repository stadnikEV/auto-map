import fromLatLngToPoint from 'components/__shared/map-modules/from-latLng-to-point';

export default ({ points, map }) => {
  const data = {
    points: {
      A: {},
      B: {},
    },
  };

  if (points.A.coord && points.B.coord) {
    [data.points.A.coord] = fromLatLngToPoint({
      map,
      points: [points.A.coord],
    });
    [data.points.B.coord] = fromLatLngToPoint({
      map,
      points: [points.B.coord],
    });
    data.points.A.radius = points.A.radius;
    data.points.B.radius = points.B.radius;
    data.points.A.radiusWorldCoord = points.A.radiusWorldCoord;
    data.points.B.radiusWorldCoord = points.B.radiusWorldCoord;
    // console.log(points.A.radius);
    // console.log(points.B.radiusWorldCoord);
    //
    // console.log(points.A.radius);
    // console.log(points.B.radiusWorldCoord);
  }

  return data;
};
