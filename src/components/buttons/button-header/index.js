import Router from 'router';
import BaseComponent from 'components/__shared/base-component';
import 'components/__shared/button/style.scss'; // css
import './style.scss'; // css
import template from './template.hbs';


export default class ButtonHeader extends BaseComponent {
  constructor({
    el,
    value,
    publishRouteHash,
    componentName,
    tabindex,
  }) {
    super({ el });
    this.eventsPubSub = {};

    this.render({ value, componentName, tabindex });
    this.elements.button = document.querySelector(`[data-component="${componentName}"]`);

    this.setRouteHash = Router.setRouteHash.bind(null, { routeHash: publishRouteHash });
    this.addEvents();
  }

  render({ value, componentName, tabindex }) {
    this.el.innerHTML = template({ value, componentName, tabindex });
  }

  addEvents() {
    this.elements.button.addEventListener('click', this.setRouteHash);
    this.elements.button.onmousedown = () => false; // запрет outline при клике
  }

  removeEvents() {
    this.elements.button.removeEventListener('click', this.setRouteHash);
    this.elements.button.onmousedown = null;
  }

  selectButton() {
    this.elements.button.classList.add('button-header_selected');
  }

  deselectButton() {
    this.elements.button.classList.remove('button-header_selected');
  }
}
