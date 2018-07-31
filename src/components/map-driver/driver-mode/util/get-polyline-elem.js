
export default (({ googleMaps, path }) => {
  const polylineElem = new googleMaps.Polyline({
    path,
    strokeColor: 'blue',
    strokeOpacity: 0.5,
    strokeWeight: 5,
    editable: false,
    clickable: false,
  });

  return polylineElem;
});
