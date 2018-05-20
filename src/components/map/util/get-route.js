
const getRoute = ({
  googleMaps,
  waypoints,
  start,
  end,
}) => {
  const request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
    waypoints,
  };

  const directionsService = new googleMaps.DirectionsService();

  const promise = new Promise((resolve, reject) => {
    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        resolve(response);
        return;
      }
      reject(status);
    });
  });
  return promise;
};

module.exports = getRoute;
