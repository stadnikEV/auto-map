import BaseComponent from 'sharedDriver/js/base/base-component';
import 'sharedDriver/css/components/button.scss'; // css
import './style.scss'; // css
import template from './template.hbs';


export default class ButtonSubmit extends BaseComponent {
  constructor({
    el,
    value,
    componentName,
  }) {
    super({ el });
    this.eventsPubSub = {};

    this.render({ value, componentName });
    this.elements.button = document.querySelector(`[data-component="${componentName}"]`);

    this.addEvents();
  }

  render({ value, componentName }) {
    this.el.innerHTML = template({ value, componentName });
  }

  addEvents() {
    this.elements.button.onmousedown = () => false; // запрет outline при клике
  }

  removeEvents() {
    this.elements.button.onmousedown = null;
  }
}
