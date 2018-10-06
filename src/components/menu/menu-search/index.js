// import router from 'router';
import BaseComponent from 'components/__shared/base-component';
import './style.scss'; // css
import template from './template.hbs';


export default class ButtonHeader extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.eventsPubSub = {};

    this.render();
    this.elements.menuSearch = document.querySelector('[data-component="menu-search"]');

    // this.setRouteHash = router.setRouteHash.bind(router, { routeHash: publishRouteHash });
    this.addEvents();
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    // this.elements.button.addEventListener('click', this.setRouteHash);
    // this.elements.button.onmousedown = () => false; // запрет outline при клике
  }

  removeEvents() {
    // this.elements.button.removeEventListener('click', this.setRouteHash);
    // this.elements.button.onmousedown = null;
  }
}
