import BaseComponent from 'sharedDriver/js/base/base-component';
import 'sharedDriver/css/components/login-registration.scss'; // css
import FormLogin from '../forms/form-login';
import template from './template.hbs';


class Login extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.login = document.querySelector('[data-component="login"]');
    this.elements.FormContainer = this.elements.login.querySelector('[data-element="login__form-container"]');

    this.components.formLogin = new FormLogin({
      el: this.elements.FormContainer,
    });
  }

  render() {
    this.el.innerHTML = template();
  }
}

module.exports = Login;
