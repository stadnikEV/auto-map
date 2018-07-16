import FormRegistration from '../../forms/form-registration';
import template from './template.hbs';

require('../style.css');

export default class Registration {
  constructor({ el }) {
    this.el = el;

    this.eventsPubSub = {};
    this.components = {};

    this.render();
    this.registration = document.querySelector('[data-component="registration"]');
    this.FormContainer = this.registration.querySelector('[data-element="registration__form-container"]');

    this.components.formRegistration = new FormRegistration({
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
