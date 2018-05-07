
function addElementsToMap({ elements }) {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].setMap(this._map);
  }
}

module.exports = addElementsToMap;
