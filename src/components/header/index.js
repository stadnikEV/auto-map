import PubSub from 'pubsub-js';
import Router from 'router';
import BaseComponent from 'components/__shared/base-component';
import Logo from '../logo';
import ButtonHeader from '../buttons/button-header';
import template from './template.hbs';
import './style.scss'; // css

export default class Header extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.header = document.querySelector('[data-component="header"]');
    this.elements.logoContainer = this.elements.header.querySelector('[data-element="header__logo-container"]');
    this.elements.buttonLoginContainer = this.elements.header.querySelector('[data-element="header__button-header-login-container"]');
    this.elements.buttonRegistrationContainer = this.elements.header.querySelector('[data-element="header__button-header-registration-container"]');

    this.logoInit();

    this.addEvents();

    this.onHashChange(null, { routeHash: Router.getRouteHash() });
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
    if (routeHash === 'login' || routeHash === 'registration') {
      if (this.lastRouteHash !== 'login' && this.lastRouteHash !== 'registration') {
        this.buttonRegistrationInit();
        this.buttonLoginInit();
        delete this.selectedButtonName;
      }
    }

    if (routeHash === 'application') {
      if (this.components.buttonLogin) {
        this.removeComponent({ componentName: 'buttonLogin' });
      }
      if (this.components.buttonRegistration) {
        this.removeComponent({ componentName: 'buttonRegistration' });
      }
      delete this.selectedButtonName;
    }

    this.backlightButtons({ routeHash });
    this.lastRouteHash = routeHash;
  }

  logoInit() {
    this.components.logo = new Logo({ el: this.elements.logoContainer });
  }

  buttonLoginInit() {
    this.components.buttonLogin = new ButtonHeader({
      el: this.elements.buttonLoginContainer,
      value: 'ВХОД',
      publishRouteHash: 'login',
      componentName: 'button-header-login',
      tabindex: 'tabindex="2"',
    });
  }

  buttonRegistrationInit() {
    this.components.buttonRegistration = new ButtonHeader({
      el: this.elements.buttonRegistrationContainer,
      value: 'СОЗДАТЬ АККАУНТ',
      publishRouteHash: 'registration',
      componentName: 'button-header-registration',
      tabindex: 'tabindex="3"',
    });
  }

  backlightButtons({ routeHash }) {
    if (this.selectedButtonName) {
      this.components[this.selectedButtonName].deselectButton();
    }
    if (routeHash === 'login') {
      this.components.buttonLogin.selectButton();
      this.selectedButtonName = 'buttonLogin';
      return;
    }
    if (routeHash === 'registration') {
      this.components.buttonRegistration.selectButton();
      this.selectedButtonName = 'buttonRegistration';
    }
  }
}
