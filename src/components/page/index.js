import router from 'router';
import PubSub from 'pubsub-js';
import getBaseRouteHash from 'utils/get-base-route-hash';
import BaseComponent from 'components/__shared/base-component';
import 'components/__shared/css/reset.scss'; // css
import 'components/__shared/css/base.scss'; // css
import './style.scss'; // css
import Header from '../header';
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

    if (!this.components.header) {
      this.initHeader();
    }

    if (this.currentMainComponentName !== getBaseRouteHash({ routeHash })
    && this.currentMainComponentName !== undefined) {
      this.removeComponent({ componentName: this.currentMainComponentName });
    }

    if (getBaseRouteHash({ routeHash }) === 'application') {
      if (this.components.app) {
        return;
      }
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
    import(/* webpackChunkName: "application-<%applicationName%>" */ '../application')
      .then((Module) => {
        if (router.getRouteHash() !== 'application') {
          return;
        }
        this.components.app = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.currentMainComponentName = 'application';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  initLogin() {
    import(/* webpackChunkName: "login-<%applicationName%>" */ '../login')
      .then((Module) => {
        if (router.getRouteHash() !== 'login') {
          return;
        }
        this.components.login = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.currentMainComponentName = 'login';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  initRegistration() {
    import(/* webpackChunkName: "registration-<%applicationName%>" */ '../registration')
      .then((Module) => {
        if (router.getRouteHash() !== 'registration') {
          return;
        }
        this.components.registration = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.currentMainComponentName = 'registration';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  initBadHash() {
    import(/* webpackChunkName: "bad-hash" */ '../bad-hash')
      .then((Module) => {
        if (router.getRouteHash() !== 'badHash') {
          return;
        }
        this.removeAllComponents();
        this.components.badHash = new Module({ el: this.elements.mainContainer });
        this.showOnlyMainContainer();
        this.currentMainComponentName = 'badHash';
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  showOnlyMainContainer() {
    this.hideElem({ el: this.elements.headerContainer });
    this.elements.mainContainer.classList.add('page__main-container_show-main');
    this.elements.mainContainer.classList.remove('page__main-container_show-main-header');
  }

  showMainAndHeaderContainers() {
    this.showElem({ el: this.elements.headerContainer });
    this.elements.mainContainer.classList.remove('page__main-container_show-main');
    this.elements.mainContainer.classList.add('page__main-container_show-main-header');
  }
}
