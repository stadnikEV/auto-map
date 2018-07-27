import PubSub from 'pubsub-js';
import BaseComponent from 'sharedDriver/js/base/base-component';
// import getHash from 'router/get-hash';
import 'sharedDriver/css/components/button.scss'; // css
import './style.scss'; // css
import Router from '../../../../router';
import template from './template.hbs';


export default class ButtonHeader extends BaseComponent {
  constructor({
    el,
    value,
    hashName,
    componentName,
    tabindex,
  }) {
    super({ el });
    this.eventsPubSub = {};

    this.value = value;
    this.hashName = hashName;
    this.componentName = componentName;
    this.tabindex = tabindex;

    this.render();
    this.elements.button = document.querySelector(`[data-component="${componentName}"]`);

    this.onHashChange = this.onHashChange.bind(this);
    this.setHash = Router.setHash.bind(null, { hash: hashName });
    this.addEvents();

    this.onHashChange(null, { hash: Router.getHash() });
  }

  render() {
    this.el.innerHTML = template({
      value: this.value,
      componentName: this.componentName,
      tabindex: this.tabindex,
    });
  }

  addEvents() {
    this.elements.button.addEventListener('click', this.setHash);
    this.elements.button.onmousedown = () => false; // запрет outline при клике
    this.eventsPubSub.hashChange = PubSub.subscribe('hashChange', this.onHashChange);
  }

  removeEvents() {
    this.elements.button.removeEventListener('click', this.publishSetHash);
    this.elements.button.onmousedown = null;
    this.unsubscribe();
  }

  onHashChange(msg, { hash }) {
    if (hash === this.hashName) {
      this.selectButton();
      return;
    }
    this.deselectButton();
  }

  selectButton() {
    this.elements.button.classList.add('button-header_selected');
  }

  deselectButton() {
    this.elements.button.classList.remove('button-header_selected');
  }
}
