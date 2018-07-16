import template from './template.hbs';

require('./style.css');

export default class TipForm {
  constructor({ el, message }) {
    this.el = el;
    this.message = message;
    this.render();
  }

  render() {
    this.el.innerHTML = template({
      message: this.message,
    });
  }

  destroy() {
    this.el.innerHTML = '';
  }
}
