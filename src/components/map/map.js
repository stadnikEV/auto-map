import PubSub from 'pubsub-js';
import loadGoogleMapsApi from 'load-google-maps-api';
import chooseUserType from '../choose-user-type/choose-user-type';

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
        this._subscribe = {};
        this._googleMaps = googleMaps;
        this._map = new googleMaps.Map(document.querySelector('[data-component="map"]'), {
          center: {
            lat: 50.448853,
            lng: 30.513346,
          },
          zoom: 14,
        });

        // событие инициализации Проекции. До инициализации не работает конвертация координат
        const promiseProjectionChanged = new Promise((resolve) => {
          this._map.addListener('projection_changed', () => {
            resolve();
          });
        });

        // загрузка и инициализация функционала для режима "passenger"
        if (this._userType === 'passenger') {
          Promise.all([
            promiseProjectionChanged,
            this._initMapPassenger(),
          ]).then(() => {
            PubSub.publish('initUserDataMap');
            this._subscribe.clickButtonSwitch = PubSub.subscribe('clickButtonSwitch', this._switchUserType.bind(this));
          });
        }

        // загрузка и инициализация функционала для режима "driver"
        if (this._userType === 'driver') {
          Promise.all([
            promiseProjectionChanged,
            this._initMapDriver(),
          ]).then(() => {
            PubSub.publish('initUserDataMap');
            this._subscribe.clickButtonSwitch = PubSub.subscribe('clickButtonSwitch', this._switchUserType.bind(this));
          });
        }
      }).catch((error) => {
        console.error(error);
      });
  }

  /*
  *   загрузка и инициализация функционала для режима "passenger"
  */

  _initMapPassenger() {
    const promise = new Promise((resolve) => {
      import('./passenger-mode/passenger-mode.js')
        .then((module) => {
          const PassengerMode = module.default;
          this._mapPassenger = new PassengerMode({
            googleMaps: this._googleMaps,
            map: this._map,
            userData: this._userData,
          });
          resolve();
        });
    });
    return promise;
  }

  /*
  *   загрузка и инициализация функционала для режима "driver"
  */

  _initMapDriver() {
    const promise = new Promise((resolve) => {
      import('./driver-mode/driver-mode.js')
        .then((module) => {
          const DriverMode = module.default;
          this._mapDriver = new DriverMode({
            googleMaps: this._googleMaps,
            map: this._map,
            userData: this._userData,
          });
          resolve();
        });
    });
    return promise;
  }

  /*
  *   переключение между режимами приложения: "driver" и "passenger"
  */

  _switchUserType() {
    if (this._inSwitсhProcess) return;
    this._inSwitсhProcess = true;

    if (this._userType === 'passenger') {
      this._userType = 'driver';

      PubSub.publish('destroyMap');
      this._mapPassenger = null;
      chooseUserType({ userName: this._userData.userName, userType: 'driver' })
        .then((userData) => {
          this._userData = userData;
          this._initMapDriver()
            .then(() => {
              PubSub.publish('initUserDataMap');
              this._inSwitсhProcess = false;
            });
        });

      return;
    }

    if (this._userType === 'driver') {
      this._userType = 'passenger';

      PubSub.publish('destroyMap');
      this._mapDriver = null;
      chooseUserType({ userName: this._userData.userName, userType: 'passenger' })
        .then((userData) => {
          this._userData = userData;
          this._initMapPassenger()
            .then(() => {
              PubSub.publish('initUserDataMap');
              this._inSwitсhProcess = false;
            });
        });
    }
  }
}
