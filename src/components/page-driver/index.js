import PubSub from 'pubsub-js';
import BaseComponent from 'components/__shared/base-component';
import 'components/__shared/css/reset.scss'; // css
import 'components/__shared/css/base.scss'; // css
import './style.scss'; // css
import Header from '../header';
import Map from '../map-driver';
import template from './template.hbs'; // template


export default class Page extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.page = document.querySelector('[data-component="page"]');
    this.elements.headerContainer = this.elements.page.querySelector('[data-element="page__header-container"]');
    this.elements.mainContainer = this.elements.page.querySelector('[data-element="page__main-container"]');

    this.addEvents();
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
    if (routeHash === 'badHash') {
      this.initBadHash();
      return;
    }
    if (this.currentMainComponentName) {
      this.removeComponent({ componentName: this.currentMainComponentName });
    }
    if (!this.components.header) {
      this.initHeader();
    }
    if (routeHash === 'application') {
      this.initApplication();
      return;
    }
    if (routeHash === 'login') {
      this.initLogin();
      return;
    }
    if (routeHash === 'registration') {
      this.initRegistration();
    }
  }

  initHeader() {
    this.components.header = new Header({
      el: this.elements.headerContainer,
    });
  }

  initApplication() {
    this.components.map = new Map({ el: this.elements.mainContainer });
    this.showMainAndHeaderContainers();
    this.lastRouteHash = 'application';
    this.currentMainComponentName = 'map';
  }

  initLogin() {
    import(/* webpackChunkName: "login-driver" */ '../login')
      .then((Module) => {
        this.components.login = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.lastRouteHash = 'login';
        this.currentMainComponentName = 'login';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  initRegistration() {
    import(/* webpackChunkName: "registration-driver" */ '../registration')
      .then((Module) => {
        this.components.registration = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.lastRouteHash = 'registration';
        this.currentMainComponentName = 'registration';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  initBadHash() {
    import(/* webpackChunkName: "bad-hash" */ '../bad-hash')
      .then((Module) => {
        this.removeAllComponents();
        this.components.badHash = new Module({ el: this.elements.mainContainer });
        this.showOnlyMainContainer();
        this.lastRouteHash = 'badHash';
        this.currentMainComponentName = 'badHash';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  showOnlyMainContainer() {
    this.hide({ el: this.elements.headerContainer });
    this.elements.mainContainer.classList.add('page__main-container_show-main');
    this.elements.mainContainer.classList.remove('page__main-container_show-main-header');
  }

  showMainAndHeaderContainers() {
    this.show({ el: this.elements.headerContainer });
    this.elements.mainContainer.classList.remove('page__main-container_show-main');
    this.elements.mainContainer.classList.add('page__main-container_show-main-header');
  }
}
