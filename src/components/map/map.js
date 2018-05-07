const loadGoogleMapsApi = require('load-google-maps-api');

require('./map.css');


export default class Map {
  constructor({ el, userData }) {
    this._el = el;
    this._userType = userData.userType;
    this._userData = userData;

    // инициализация google map API
    loadGoogleMapsApi({
      key: 'AIzaSyA1aqVDTGme-a6qPTdHG3aIqGRbjHHs8MM',
    })
      .then((googleMaps) => {
        this._googleMaps = googleMaps;
        this._map = new googleMaps.Map(document.querySelector('[data-component="map"]'), {
          center: {
            lat: 50.448853,
            lng: 30.513346,
          },
          zoom: 14,
        });

        // загрузка и инициализация функционала для режима "passenger"
        if (this._userType === 'passenger') {
          this._initMapPassenger();
        }

        // загрузка и инициализация функционала для режима "driver"
        if (this._userType === 'driver') {
          this._initMapDriver();
        }
      }).catch((error) => {
        console.error(error);
      });
  }

  // загрузка и инициализация функционала для режима "passenger"
  _initMapPassenger() {
    require.ensure(['./passenger-mode.js'], (require) => {
      const MapPassenger = require('./passenger-mode.js');
      this._mapPassenger = new MapPassenger({
        googleMaps: this._googleMaps,
        map: this._map,
        userData: this._userData,
      });
    });
  }

  // загрузка и инициализация функционала для режима "driver"
  _initMapDriver() {
    require.ensure(['./driver-mode.js'], (require) => {
      const MapDrive = require('./driver-mode.js');
      this._mapDriver = new MapDrive({
        googleMaps: this._googleMaps,
        map: this._map,
        userData: this._userData,
      });
    });
  }

  // переключение между режимами приложения: "водитедь" и "пассажир"
  switchUserType() {
    if (this._userType === 'passenger') {
      this._userType = 'driver';
      if (this._mapDriver !== undefined) {
        console.log(this._mapDriver); // удалить
        return;
      }
      this._initMapDriver();
      return;
    }

    if (this._userType === 'driver') {
      this._userType = 'passenger';
      if (this._mapPassenger !== undefined) {
        console.log(this._mapPassenger); // удалить
        return;
      }
      this._initMapPassenger();
    }
  }
}
