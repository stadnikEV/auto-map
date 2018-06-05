
export default ({
  googleMaps,
  map,
  coord,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    map,
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: 'blue',
      strokeWeight: 1,
      fillColor: 'white',
      fillOpacity: 0.9,
      scale: 5,
    },
  });

  return marker;
};
