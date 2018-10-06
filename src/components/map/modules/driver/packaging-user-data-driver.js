import fromLatLngToPoint from 'components/__shared/map-modules/from-latLng-to-point';

export default ({
  points,
  polyline,
  waypoints,
  map,
}) => {
  const data = {
    points: {
      A: {},
      B: {},
    },
    polyline: {
      path: [],
    },
    waypoints: {
      coord: [],
      id: [],
    },
  };

  // упаковка points
  if (points.A.coord && points.B.coord) {
    [data.points.A.coord] = fromLatLngToPoint({
      map,
      points: [points.A.coord],
    });

    [data.points.B.coord] = fromLatLngToPoint({
      map,
      points: [points.B.coord],
    });
  }

  // упаковка polyline
  if (polyline.path) {
    data.polyline.path = fromLatLngToPoint({
      map,
      points: polyline.path,
    });
  }

  // упаковка waypoints
  if (waypoints.id.length !== 0) {
    for (let i = 0; i < waypoints.id.length; i += 1) {
      const coord = waypoints.coord[i];
      const id = waypoints.id[i];
      // если не stopover данные waypoint будут добавленны
      if (!coord.stopover) {
        data.waypoints.coord.push({
          location: fromLatLngToPoint({
            map,
            points: [coord.location],
          })[0],
          stopover: coord.stopover,
        });
        data.waypoints.id.push(id);
      }
    }
  }

  return data;
};
