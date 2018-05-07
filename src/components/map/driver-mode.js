const getclickCoord = require('./util/get-click-coord');
// const addcircle = require('./util/add-circle');
const getDirection = require('./util/get-direction');

class MapDrive {
  constructor({ googleMaps, map }) {
    this._googleMaps = googleMaps;
    this._map = map;
    this._map.addListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    console.log(this._departureCoord, this._arrivalCoord);
    const point = this._definePoint();
    if (!point) return;

    const clickCoord = getclickCoord(e);
    if (point === 'departure') {
      this._departureCoord = clickCoord;
    }
    if (point === 'arrival') {
      this._arrivalCoord = clickCoord;
      getDirection({
        googleMaps: this._googleMaps,
        map: this._map,
        start: this._departureCoord,
        end: this._arrivalCoord,
      });
    }
    // addcircle({
    //   googleMaps: this._googleMaps,
    //   map: this._map,
    //   center: clickCoord,
    //   radius: 30,
    // });
  }

  _definePoint() {
    if (!this._departureCoord) {
      return 'departure';
    }
    if (this._departureCoord && !this._arrivalCoord) {
      return 'arrival';
    }
    return null;
  }
}

module.exports = MapDrive;
