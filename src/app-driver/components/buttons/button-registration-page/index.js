import PubSub from 'pubsub-js';
import getHash from 'router/get-hash';
import template from '../template.hbs';
import publishSetHash from '../publish-set-hash';

require('../style.css');

export default class ButtonRegistrationPage {
  constructor({ el }) {
    this.el = el;
    this.eventsPubSub = {};

    this.render();
    this.button = document.querySelector('[data-component="button-registration-page"]');

    this.onClick = this.onClick.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
    this.addEvents();

    this.lightButton({ hash: getHash() });
  }

  render() {
    this.el.innerHTML = template({
      value: 'СОЗДАТЬ АККАУНТ',
      className: 'button-registration-page',
      componentName: 'button-registration-page',
      tabindex: 'tabindex="3"',
    });
  }

  addEvents() {
    this.eventsPubSub.onHashChange = PubSub.subscribe('hashChange', this.onHashChange.bind(this));
    this.button.addEventListener('click', this.onClick);
  }

  removeEvents() {
    PubSub.unsubscribe(this.eventsPubSub.onHashChange);
    this.button.removeEventListener('click', this.onClick);
  }

  onHashChange(msg, { hash }) {
    this.lightButton({ hash });
  }

  onClick() {
    publishSetHash({ hash: 'registration' });
    this.button.blur();
  }

  lightButton({ hash }) {
    if (hash === 'registration') {
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
