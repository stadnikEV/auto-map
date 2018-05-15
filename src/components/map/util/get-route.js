
const getRoute = ({
  googleMaps,
  start,
  end,
}) => {
  const request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
  };

  const directionsService = new googleMaps.DirectionsService();

  const promise = new Promise((resolve) => {
    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        resolve(response);
      }
    });
  });
  return promise;
};

module.exports = getRoute;
