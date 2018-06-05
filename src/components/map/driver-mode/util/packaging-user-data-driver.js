import fromLatLngToPoint from '../../util/from-latLng-to-point';

export default ({
  userName,
  points,
  polyline,
  waypoints,
  map,
}) => {
  const data = {};
  data.userName = userName;
  data.driver = {
    points: {
      A: {},
      B: {},
    },
    polyline: {},
    waypoints: {
      coord: [],
      id: [],
    },
  };

  // упаковка points
  if (points.A.coord && points.B.coord) {
    [data.driver.points.A.coord] = fromLatLngToPoint({
      map,
      points: [points.A.coord],
    });

    [data.driver.points.B.coord] = fromLatLngToPoint({
      map,
      points: [points.B.coord],
    });
  }

  // упаковка polyline
  if (polyline.path) {
    data.driver.polyline.path = fromLatLngToPoint({
      map,
      points: polyline.path,
    });
  }

  // упаковка waypoints
  if (waypoints.id.length !== 0) {
    for (let i = 0; i < waypoints.id.length; i += 1) {
      const coord = waypoints.coord[i];
      const id = waypoints.id[i];
      // если не stopover данные waypoint будут отправлены на серве
      if (!coord.stopover) {
        data.driver.waypoints.coord.push({
          location: fromLatLngToPoint({
            map,
            points: [coord.location],
          })[0],
          stopover: coord.stopover,
        });
        data.driver.waypoints.id.push(id);
      }
    }
  }

  return data;
};
