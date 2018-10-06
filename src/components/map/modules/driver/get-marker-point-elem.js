export default ({
  googleMaps,
  coord,
  label,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    label: {
      text: label,
      color: 'white',
    },
  });

  return marker;
};
