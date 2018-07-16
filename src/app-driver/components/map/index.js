// import PubSub from 'pubsub-js';
import loadGoogleMapsApi from 'load-google-maps-api';
import template from './template.hbs';

require('./style.css');


export default class Map {
  constructor({ el }) {
    this.el = el;
    this.components = {};

    this.render();
    this.map = document.querySelector('[data-component="map"]');

    // инициализация google map API
    loadGoogleMapsApi({
      key: 'AIzaSyA1aqVDTGme-a6qPTdHG3aIqGRbjHHs8MM',
    })
      .then((googleMaps) => {
        this._googleMaps = googleMaps;
        this._map = new googleMaps.Map(this.map, {
          center: {
            lat: 50.448853,
            lng: 30.513346,
          },
          zoom: 14,
        });

        // событие инициализации Проекции. До инициализации не работает конвертация координат
        // const promiseProjectionChanged = new Promise((resolve) => {
        //   this._map.addListener('projection_changed', () => {
        //     resolve();
        //   });
        // });


        // загрузка и инициализация функционала для режима "driver"
        // if (this._userType === 'driver') {
        //   Promise.all([
        //     promiseProjectionChanged,
        //     // this._initMapDriver(),
        //   ]).then(() => {
        //     PubSub.publish('initUserDataMap');
        //   });
        // }
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    this.el.innerHTML = template();
  }
  destroy() {
    this.el.innerHTML = '';
  }

  /*
  *   загрузка и инициализация функционала для режима "driver"
  */

  // _initMapDriver() {
  //   const promise = new Promise((resolve) => {
  //     import('./driver-mode/driver-mode.js')
  //       .then((module) => {
  //         const DriverMode = module.default;
  //         this._mapDriver = new DriverMode({
  //           googleMaps: this._googleMaps,
  //           map: this._map,
  //           userData: this._userData,
  //         });
  //         resolve();
  //       });
  //   });
  //   return promise;
  // }
}
