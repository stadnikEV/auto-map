import router from 'router';
import getBaseRouteHash from 'utils/get-base-route-hash';
import loadGoogleMaps from './load-google-maps';
import MapModule from './modules/<%applicationName%>';
import './style.scss'; // css
import template from './template.hbs';

export default class Map {
  constructor({ el }) {
    this.el = el;
    this.elements = {};
    // this.components = {};

    this.render();
    this.elements.map = document.querySelector('[data-component="map"]');

    loadGoogleMaps()
      .then(() => {
        this.GoogleMaps = window.google.maps;
        this.map = new window.google.maps.Map(this.elements.map, {
          center: {
            lat: 50.448853,
            lng: 30.513346,
          },
          zoom: 14,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          // zoomControl: false,
          clickableIcons: false,
        });
        console.log(this.map.getProjection());
        // событие инициализации Проекции. До инициализации не работает конвертация координат
        const promise = new Promise((resolve) => {
          this.map.addListener('projection_changed', () => {
            resolve();
          });
        });
        return promise;
      })
      .then(() => {
        // если поменялся routeHash до инициализации карты
        const routeHash = router.getRouteHash();
        if (getBaseRouteHash({ routeHash }) !== 'application') {
          return;
        }
        // загрузка и инициализация функционала для режима "driver/passenger"
        this.initMapModule();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    this.el.innerHTML = template();
  }

  initMapModule() {
    this.mapModule = new MapModule({
      googleMaps: this.GoogleMaps,
      map: this.map,
    });
  }

  destroy() {
    if (!this.mapModule) {
      this.mapModule.destroy();
    }
  }
}
