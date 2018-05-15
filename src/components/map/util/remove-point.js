const removeElementsFromMap = require('./remove-elements-from-map');

function removePoint({ pointName }) {
  const elements = [];
  const obj = this._points[pointName];
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    elements.push(obj[keys[i]]);
  }

  removeElementsFromMap.call(this, { elements });
  this._points[pointName] = null;
}

module.exports = removePoint;
