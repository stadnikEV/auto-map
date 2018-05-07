
const getDirection = ({
  googleMaps,
  map,
  start,
  end,
}) => {
  const request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING',
  };
  const directionsDisplay = new googleMaps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  const directionsService = new googleMaps.DirectionsService();

  directionsService.route(request, (response, status) => {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    }
  });
};

module.exports = getDirection;
