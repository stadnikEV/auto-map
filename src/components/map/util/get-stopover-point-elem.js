
export default ({
  googleMaps,
  coord,
  label,
  color,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: color,
      strokeWeight: 3,
      fillColor: 'white',
      fillOpacity: 0.8,
      scale: 9,
    },
    label,
    clickable: false,
  });

  return marker;
};
