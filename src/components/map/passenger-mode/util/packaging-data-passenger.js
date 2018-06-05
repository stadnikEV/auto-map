import fromLatLngToPoint from '../../util/from-latLng-to-point';

export default ({ userName, points, map }) => {
  const data = {};
  data.userName = userName;
  data.passenger = {
    points: {
      A: {},
      B: {},
    },
  };

  if (points.A.coord && points.B.coord) {
    [data.passenger.points.A.coord] = fromLatLngToPoint({
      map,
      points: [points.A.coord],
    });
    [data.passenger.points.B.coord] = fromLatLngToPoint({
      map,
      points: [points.B.coord],
    });
    data.passenger.points.A.radius = points.A.radius;
    data.passenger.points.B.radius = points.B.radius;
    data.passenger.points.A.radiusWorldCoord = points.A.radiusWorldCoord;
    data.passenger.points.B.radiusWorldCoord = points.B.radiusWorldCoord;
  }

  return data;
};
