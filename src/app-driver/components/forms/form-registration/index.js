import template from './template.hbs';

require('../style.css');

export default class FormRegistration {
  constructor({ el }) {
    this.el = el;
    this.render();
  }

  render() {
    this.el.innerHTML = template();
  }

  destroy() {
    this.el.innerHTML = '';
  }
}
