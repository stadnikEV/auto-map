import PubSub from 'pubsub-js';
import Logo from '../logo';
import ButtonLoginPage from '../buttons/button-login-page';
import ButtonRegistrationPage from '../buttons/button-registration-page';
import template from './template.hbs';

require('./style.css');

export default class Header {
  constructor({ el, hash }) {
    this.el = el;
    this.eventsPubSub = {};
    this.components = {};

    this.render();

    this.header = document.querySelector('[data-component="header"]');
    this.logoContainer = this.header.querySelector('[data-element="header__logo-container"]');
    this.buttonLoginPageContainer = this.header.querySelector('[data-element="header__button-login-page-container"]');
    this.buttonRegistrationPageContainer = this.header.querySelector('[data-element="header__button-registration-page-container"]');

    this.addEvents();

    this.onHashChange(null, { hash });
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    this.eventsPubSub.hashChange = PubSub.subscribe('hashChange', this.onHashChange.bind(this));
  }

  removeEvents() {
    PubSub.unsubscribe(this.eventsPubSub.hashChange);
  }

  onHashChange(msg, { hash }) {
    if (hash === 'login' || hash === 'registration') {
      if (this.lastHash === 'login' || this.lastHash === 'registration') {
        return;
      }
      this.buttonRegistrationPageInit();
      this.buttonLoginPageInit();
      this.header.classList.remove('header_application');
    }

    if (hash === 'application') {
      if (this.components.buttonLoginPage) {
        this.removeComponent({ componentName: 'buttonLoginPage' });
      }
      if (this.components.buttonRegistrationPage) {
        this.removeComponent({ componentName: 'buttonRegistrationPage' });
      }
      this.header.classList.add('header_application');
    }

    if (!this.components.logo) {
      this.logoInit();
    }
    this.lastHash = hash;
  }

  logoInit() {
    this.components.logo = new Logo({ el: this.logoContainer });
  }

  buttonLoginPageInit() {
    this.components.buttonLoginPage = new ButtonLoginPage({ el: this.buttonLoginPageContainer });
  }

  buttonRegistrationPageInit() {
    this.components.buttonRegistrationPage = new ButtonRegistrationPage({ el: this.buttonRegistrationPageContainer });
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
