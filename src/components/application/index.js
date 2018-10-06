import PubSub from 'pubsub-js';
import getBaseRouteHash from 'utils/get-base-route-hash';
import BaseComponent from 'components/__shared/base-component';
import Map from '../map';
import Search from '../menu/menu-search';
import './style.scss'; // css
import template from './template.hbs';


class Application extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.application = document.querySelector('[data-component="application"]');
    this.elements.mapContainer = this.elements.application.querySelector('[data-element="application__map-container"]');
    this.elements.searchContainer = this.elements.application.querySelector('[data-element="application__menu-search-container"]');

    this.addEvents();
    this.initMap();
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    this.eventsPubSub.hashChange = PubSub.subscribe('routeHashChange', this.onHashChange.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onHashChange(msg, { routeHash }) {
    if (getBaseRouteHash({ routeHash }) !== 'application') {
      return;
    }
    if (this.currentShowedContainerName) {
      this.hideElem({ el: this.elements[this.currentShowedContainerName] });
    }
    if (routeHash === 'application/search') {
      if (!this.components.search) {
        console.log('search');
        this.initSearch();
      }
      this.components.search.show();
    }
  }

  initSearch() {
    this.components.search = new Search({ el: this.elements.searchContainer });
    this.currentShowedContainerName = 'searchContainer';
  }

  initMap() {
    this.map = new Map({
      el: this.elements.mapContainer,
    });
  }
}

module.exports = Application;
