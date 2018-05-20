
function removeElementsFromMap({ googleMaps, element }) {
  googleMaps.event.clearInstanceListeners(element);
  element.setMap(null);
}

module.exports = removeElementsFromMap;
