import PubSub from 'pubsub-js';
import template from './template.hbs';

require('./style.css');

export default class Footer {
  constructor({ el }) {
    this.el = el;
    this.eventsPubSub = {};
    this.components = {};

    this.render();

    this.footer = document.querySelector('[data-component="footer"]');

    // this.addEvents();
    //
    // this.onHashChange(null, { hash });
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    this.eventsPubSub.hashChange = PubSub.subscribe('hashChange', this.onHashChange.bind(this));
  }

  removeEvents() {
    PubSub.unsubscribe(this.eventsPubSub.hashChange);
  }

  // onHashChange(msg, { hash }) {
  //
  // }

  removeComponent({ componentName }) {
    this.components[componentName].destroy();
    delete this.components[componentName];
  }

  removeAllComponents() {
    const componentNames = Object.keys(this.components);
    componentNames.forEach((componentName) => {
      this.removeComponent({ componentName });
    });
  }

  destroy() {
    // this.removeEvents();
    this.removeAllComponents();
    this.el.innerHTML = '';
  }
}
