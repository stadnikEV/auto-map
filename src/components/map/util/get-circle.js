
const getCircle = ({
  googleMaps,
  center,
  radius,
}) => {
  const circleOptions = {
    center,
    radius,
    fillColor: '#00AAFF',
    fillOpacity: 0.5,
    strokeColor: 'white',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: true,
  };
  const circle = new googleMaps.Circle(circleOptions);

  return circle;
};

module.exports = getCircle;
