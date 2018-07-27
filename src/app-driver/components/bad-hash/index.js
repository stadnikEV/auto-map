import BaseComponent from 'sharedDriver/js/base/base-component';
import template from './template.hbs';
import './style.scss'; // css

class BadHash extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.render();
  }

  render() {
    this.el.innerHTML = template();
  }
}

module.exports = BadHash;
