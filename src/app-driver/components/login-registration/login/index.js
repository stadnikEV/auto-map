import FormLogin from '../../forms/form-login';
import template from './template.hbs';

require('../style.css');

export default class Login {
  constructor({ el }) {
    this.el = el;

    this.eventsPubSub = {};
    this.components = {};

    this.render();
    this.login = document.querySelector('[data-component="login"]');
    this.FormContainer = this.login.querySelector('[data-element="login__form-container"]');

    this.components.formLogin = new FormLogin({
      el: this.FormContainer,
    });
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
    this.removeAllComponents();
    this.el.innerHTML = '';
  }
}
