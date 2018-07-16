import PubSub from 'pubsub-js';
import getHash from 'router/get-hash';
import template from '../template.hbs';
import publishSetHash from '../publish-set-hash';

require('../style.css');

export default class ButtonEnter {
  constructor({ el }) {
    this.el = el;
    this.eventsPubSub = {};

    this.render();
    this.button = document.querySelector('[data-component="button-login-page"]');

    this.onClick = this.onClick.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
    this.addEvents();

    this.lightButton({ hash: getHash() });
  }

  render() {
    this.el.innerHTML = template({
      value: 'ВХОД',
      className: 'button-login-page',
      componentName: 'button-login-page',
      tabindex: 'tabindex="2"',
    });
  }

  addEvents() {
    this.eventsPubSub.onHashChange = PubSub.subscribe('hashChange', this.onHashChange);
    this.button.addEventListener('click', this.onClick);
  }

  removeEvents() {
    PubSub.unsubscribe(this.eventsPubSub.onHashChange);
    this.button.removeEventListener('click', this.onClick);
  }

  onClick() {
    publishSetHash({ hash: 'login' });
    this.button.blur();
  }

  onHashChange(msg, { hash }) {
    this.lightButton({ hash });
  }

  lightButton({ hash }) {
    if (hash === 'login') {
      this.button.classList.add('button-login-page_selected');
    } else {
      this.button.classList.remove('button-login-page_selected');
    }
  }

  destroy() {
    this.removeEvents();
    this.el.innerHTML = '';
  }
}
