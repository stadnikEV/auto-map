import PubSub from 'pubsub-js';

export default class BaseComponent {
  constructor({ el }) {
    this.el = el;
    this.elements = {};
  }

  show({ el }) {
    el.classList.remove('hidden');
  }

  hide({ el }) {
    el.classList.add('hidden');
  }

  unsubscribe() {
    const evetsNames = Object.keys(this.eventsPubSub);
    evetsNames.forEach((evetsName) => {
      PubSub.unsubscribe(this.eventsPubSub[evetsName]);
    });
  }

  removeComponent({ componentName }) {
    this.components[componentName].destroy();
    delete this.components[componentName];
  }

  removeAllComponents() {
    if (!this.components) {
      return;
    }
    const componentNames = Object.keys(this.components);
    componentNames.forEach((componentName) => {
      this.removeComponent({ componentName });
    });
  }

  destroy() {
    if (this.removeEvents) {
      this.removeEvents();
    }
    this.removeAllComponents();
    this.el.innerHTML = '';
  }
}
