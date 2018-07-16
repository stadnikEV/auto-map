import PubSub from 'pubsub-js';
import Login from '../login-registration/login';
import Registration from '../login-registration/registration';
import Header from '../header';
import Footer from '../footer';
import Map from '../map';
import BadHash from '../bad-hash';
import template from './template.hbs';

require('./style.css');

export default class Page {
  constructor({ el }) {
    this.el = el;
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.page = document.querySelector('[data-component="page"]');
    this.headerContainer = this.page.querySelector('[data-element="page__header-container"]');
    this.mainContainer = this.page.querySelector('[data-element="page__main-container"]');
    this.footerContainer = this.page.querySelector('[data-element="page__footer-container"]');

    this.addEvents();
  }

  addEvents() {
    this.eventsPubSub.hashChange = PubSub.subscribe('hashChange', this.onHashChange.bind(this));
  }

  removeEvents() {
    PubSub.unsubscribe(this.eventsPubSub.hashChange);
  }

  onHashChange(msg, { hash }) {
    if (hash === 'badHash') {
      this.initBadHash();
      return;
    }

    if (this.mainComponentName) {
      this.removeComponent({ componentName: this.mainComponentName });
    }

    if (!this.components.header) {
      this.initHeader({ hash });
    }

    if (hash === 'application') {
      this.initApplication();
      return;
    }

    if (hash === 'login' || hash === 'registration') {
      if (this.lastHash === 'application') {
        this.removeComponent({ componentName: 'footer' });
      }
      if (hash === 'login') {
        this.initLogin();
        return;
      }
      if (hash === 'registration') {
        this.initRegistration();
      }
    }
  }

  initBadHash() {
    this.removeAllComponents();
    this.components.badHash = new BadHash({ el: this.mainContainer });
    this.setCssMainContainer();
    this.lastHash = 'badHash';
    this.mainComponentName = 'badHash';
  }

  initHeader({ hash }) {
    this.components.header = new Header({
      el: this.headerContainer,
      hash,
    });
  }

  initApplication() {
    this.components.map = new Map({ el: this.mainContainer });
    this.components.footer = new Footer({ el: this.footerContainer });
    this.setCssAllContainers();
    this.lastHash = 'application';
    this.mainComponentName = 'map';
  }

  initLogin() {
    this.components.login = new Login({ el: this.mainContainer });
    this.setCssMainHeaderContainers();
    this.lastHash = 'login';
    this.mainComponentName = 'login';
  }

  initRegistration() {
    this.components.registration = new Registration({ el: this.mainContainer });
    this.setCssMainHeaderContainers();
    this.lastHash = 'registration';
    this.mainComponentName = 'registration';
  }

  setCssMainContainer() {
    this.headerContainer.classList.add('hidden');
    this.footerContainer.classList.add('hidden');
    this.mainContainer.classList.add('page__main-container_show-main');
    this.mainContainer.classList.remove('page__main-container_show-main-header');
    this.mainContainer.classList.remove('page__main-container_show-main-header-footer');
  }

  setCssMainHeaderContainers() {
    this.headerContainer.classList.remove('hidden');
    this.footerContainer.classList.add('hidden');
    this.mainContainer.classList.remove('page__main-container_show-main');
    this.mainContainer.classList.add('page__main-container_show-main-header');
    this.mainContainer.classList.remove('page__main-container_show-main-header-footer');
  }

  setCssAllContainers() {
    this.headerContainer.classList.remove('hidden');
    this.footerContainer.classList.remove('hidden');
    this.mainContainer.classList.remove('page__main-container_show-main');
    this.mainContainer.classList.remove('page__main-container_show-main-header');
    this.mainContainer.classList.add('page__main-container_show-main-header-footer');
  }

  render() {
    this.el.innerHTML = template();
  }

  removeComponent({ componentName }) {
    this.components[componentName].destroy();
    delete this.components[componentName];
  }

  removeAllComponents() {
    const componentNames = Object.keys(this.components);
    componentNames.forEach((componentName) => {
      this.removeComponent({ componentName });
    });
  }

  destroy() {
    this.removeEvents();
    this.removeAllComponents();
    this.el.innerHTML = '';
  }
}
