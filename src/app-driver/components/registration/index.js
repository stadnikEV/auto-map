import BaseComponent from 'sharedDriver/js/base/base-component';
import 'sharedDriver/css/components/login-registration.scss'; // css
import FormRegistration from '../forms/form-registration';
import template from './template.hbs';


class Registration extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.registration = document.querySelector('[data-component="registration"]');
    this.elements.FormContainer = this.elements.registration.querySelector('[data-element="registration__form-container"]');

    this.components.formRegistration = new FormRegistration({
      el: this.elements.FormContainer,
    });
  }

  render() {
    this.el.innerHTML = template();
  }
}

module.exports = Registration;
