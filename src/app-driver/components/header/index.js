import PubSub from 'pubsub-js';
import BaseComponent from 'sharedDriver/js/base/base-component';
import Logo from '../logo';
import ButtonHeader from '../buttons/button-header';
import template from './template.hbs';
import './style.scss'; // css

export default class Header extends BaseComponent {
  constructor({ el, hash }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.header = document.querySelector('[data-component="header"]');
    this.elements.logoContainer = this.elements.header.querySelector('[data-element="header__logo-container"]');
    this.elements.buttonLoginContainer = this.elements.header.querySelector('[data-element="header__button-header-login-container"]');
    this.elements.buttonRegistrationContainer = this.elements.header.querySelector('[data-element="header__button-header-registration-container"]');

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
    this.unsubscribe();
  }

  onHashChange(msg, { hash }) {
    if (hash === 'login' || hash === 'registration') {
      if (this.lastHash === 'login' || this.lastHash === 'registration') {
        return;
      }
      this.buttonRegistrationInit();
      this.buttonLoginInit();
      this.elements.header.classList.remove('header_application');
    }

    if (hash === 'application') {
      if (this.components.buttonLoginPage) {
        this.removeComponent({ componentName: 'buttonLoginPage' });
      }
      if (this.components.buttonRegistrationPage) {
        this.removeComponent({ componentName: 'buttonRegistrationPage' });
      }
      this.elements.header.classList.add('header_application');
    }

    if (!this.components.logo) {
      this.logoInit();
    }
    this.lastHash = hash;
  }

  logoInit() {
    this.components.logo = new Logo({ el: this.elements.logoContainer });
  }

  buttonLoginInit() {
    this.components.buttonLoginPage = new ButtonHeader({
      el: this.elements.buttonLoginContainer,
      value: 'ВХОД',
      hashName: 'login',
      componentName: 'button-header-login',
      tabindex: 'tabindex="2"',
    });
  }

  buttonRegistrationInit() {
    this.components.buttonRegistrationPage = new ButtonHeader({
      el: this.elements.buttonRegistrationContainer,
      value: 'СОЗДАТЬ АККАУНТ',
      hashName: 'registration',
      componentName: 'button-header-registration',
      tabindex: 'tabindex="3"',
    });
  }
}
