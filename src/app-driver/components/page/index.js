import PubSub from 'pubsub-js';
import BaseComponent from 'sharedDriver/js/base/base-component';
import 'sharedDriver/css/base/reset.scss'; // css
import 'sharedDriver/css/base/base.scss'; // css
import './style.scss'; // css
import Header from '../header';
import Map from '../map';
import template from './template.hbs';


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
    this.eventsPubSub.hashChange = PubSub.subscribe('hashChange', this.onHashChange.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onHashChange(msg, { hash }) {
    if (hash === 'badHash') {
      this.initBadHash();
      return;
    }
    if (this.currentMainComponentName) {
      this.removeComponent({ componentName: this.currentMainComponentName });
    }
    if (!this.components.header) {
      this.initHeader({ hash });
    }
    if (hash === 'application') {
      this.initApplication();
      return;
    }
    if (hash === 'login') {
      this.initLogin();
      return;
    }
    if (hash === 'registration') {
      this.initRegistration();
    }
  }

  initHeader({ hash }) {
    this.components.header = new Header({
      el: this.elements.headerContainer,
      hash,
    });
  }

  initApplication() {
    this.components.map = new Map({ el: this.elements.mainContainer });
    this.showMainAndHeaderContainers();
    this.lastHash = 'application';
    this.currentMainComponentName = 'map';
  }

  initLogin() {
    import(/* webpackChunkName: "login-driver" */ '../login')
      .then((Module) => {
        this.components.login = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.lastHash = 'login';
        this.currentMainComponentName = 'login';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  initRegistration() {
    import(/* webpackChunkName: "registration-driver" */ '../registration')
      .then((Module) => {
        this.components.registration = new Module({ el: this.elements.mainContainer });
        this.showMainAndHeaderContainers();
        this.lastHash = 'registration';
        this.currentMainComponentName = 'registration';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  initBadHash() {
    import(/* webpackChunkName: "bad-hash" */ '../bad-hash')
      .then((Module) => {
        this.removeAllComponents();
        this.components.badHash = new Module({ el: this.elements.mainContainer });
        this.showOnlyMainContainer();
        this.lastHash = 'badHash';
        this.currentMainComponentName = 'badHash';
      })
      .catch((err) => {
        console.log(err);
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
