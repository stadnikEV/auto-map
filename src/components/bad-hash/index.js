import BaseComponent from 'components/__shared/base-component';
import template from './template.hbs'; // template
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
