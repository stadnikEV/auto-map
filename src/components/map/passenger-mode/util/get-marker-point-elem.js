
export default ({
  googleMaps,
  map,
  coord,
  label,
}) => {
  const marker = new googleMaps.Marker({
    position: coord,
    map,
    label: {
      fontSize: '20px',
      color: '#00AAFF',
      text: label,
    },
    icon: {
      path: googleMaps.SymbolPath.CIRCLE,
      strokeColor: 'white',
      strokeWeight: 1,
      fillColor: 'white',
      fillOpacity: 0.9,
      scale: 15,
    },
  });

  return marker;
};
