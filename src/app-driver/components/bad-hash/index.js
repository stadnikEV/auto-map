import template from './template.hbs';

require('./style.css');

export default class Header {
  constructor({ el }) {
    this.el = el;
    this.components = {};

    this.render();
  }

  render() {
    this.el.innerHTML = template();
  }

  destroy() {
    this.el.innerHTML = '';
  }
}
