
const removeElementsFromMap = ({ elements }) => {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].setMap(null);
  }
};

module.exports = removeElementsFromMap;
