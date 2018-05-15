
const createMarkerDriver = ({
  googleMaps,
  map,
  coord,
  label,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    map,
    label: {
      text: label,
      color: 'white',
    },
  });

  return { marker };
};

module.exports = createMarkerDriver;
