const removeElementsFromMap = require('./remove-elements-from-map');

function removePoint({ pointName }) {
  removeElementsFromMap({
    elements: [
      this._points[pointName].circle,
      this._points[pointName].marker],
  });
  this._points[pointName] = null;
}

module.exports = removePoint;
