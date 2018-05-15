
function removeElementsFromMap({ elements }) {
  for (let i = 0; i < elements.length; i += 1) {
    this._googleMaps.event.clearInstanceListeners(elements[i]);
    elements[i].setMap(null);
  }
}

module.exports = removeElementsFromMap;
