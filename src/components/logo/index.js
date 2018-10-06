import BaseComponent from 'components/__shared/base-component';
import imgDriver from './img/<%applicationName%>.svg'; // svg
import template from './template.hbs'; // template
import './style.scss'; // css


export default class Logo extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.eventsPubSub = {};

    this.render();
    this.elements.logo = document.querySelector('[data-component="logo"]');
    this.elements.logoImg = this.elements.logo.querySelector('[data-element="logo__img"]');

    this.onMouseDown = this.onMouseDown.bind(this);
    this.addEvents();
  }

  render() {
    this.el.innerHTML = template({
      imgUrl: imgDriver,
      tabindex: 'tabindex="1"',
    });
  }

  addEvents() {
    this.elements.logo.addEventListener('mousedown', this.onMouseDown); // запрет outline при клике
    this.elements.logoImg.ondragstart = () => false; // запрет dragstart
  }

  removeEvents() {
    this.elements.logo.removeEventListener('mousedown', this.onMouseDown);
    this.elements.logoImg.ondragstart = null;
  }

  onMouseDown(e) {
    const linkElem = e.target.closest('[data-element="logo__link"]');
    if (!linkElem) {
      return;
    }
    if (!this.elements.logo.contains(linkElem)) {
      return;
    }
    e.preventDefault();
  }
}
