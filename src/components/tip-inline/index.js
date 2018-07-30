import PubSub from 'pubsub-js';
import BaseComponent from 'components/__shared/base-component';
import template from './template.hbs'; // template
import './style.scss'; // css

export default class TipInline extends BaseComponent {
  constructor({ el, subscribeEvent, componentName }) {
    super({ el });
    this.eventsPubSub = {};

    this.subscribeEvent = subscribeEvent;

    this.render({ componentName });
    this.elements.TipInline = document.querySelector(`[data-component="${componentName}"]`);

    this.addEvents();
  }

  render({ componentName }) {
    this.el.innerHTML = template({
      componentName,
    });
  }

  addEvents() {
    this.eventsPubSub[this.subscribeEvent] = PubSub.subscribe(this.subscribeEvent, this.onShowTip.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onShowTip(msg, { message }) {
    this.elements.TipInline.innerHTML = message;
  }
}
