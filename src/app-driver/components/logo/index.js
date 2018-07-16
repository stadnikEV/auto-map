// import PubSub from 'pubsub-js';
import imgDriver from 'logo/driver.svg';
import template from './template.hbs';

require('./style.css');


export default class Logo {
  constructor({ el }) {
    this.el = el;
    this.eventsPubSub = {};

    this.render();

    this.logo = document.querySelector('[data-component="logo"]');

    // this.onClick = onClick.bind(this);
    // this.addEvents();
  }

  // addEvents() {
  //   this.logo.addEventListener('click', this.onClick);
  // }
  //
  // removeEvents() {
  //   this.button.removeEventListener('click', this.onClick);
  // }

  render() {
    this.el.innerHTML = template({
      imgUrl: imgDriver,
      tabindex: 'tabindex="1"',
    });
  }

  destroy() {
    // this.removeEvents();
    this.el.innerHTML = '';
  }
}
