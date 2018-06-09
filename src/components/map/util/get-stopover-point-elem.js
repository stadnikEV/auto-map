
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
      strokeWeight: 2,
      fillColor: 'white',
      fillOpacity: 0.8,
      scale: 6,
    },
    label,
    clickable: false,
  });

  marker.setZIndex(100);

  return marker;
};
