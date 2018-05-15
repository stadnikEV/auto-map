
function addElementsToMap({ elements, map }) {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].setMap(map);
  }
}

module.exports = addElementsToMap;
