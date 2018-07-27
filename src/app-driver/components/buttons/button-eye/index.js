import PubSub from 'pubsub-js';
import BaseComponent from 'sharedDriver/js/base/base-component';
import 'sharedDriver/css/components/button.scss'; // css
import './style.scss'; // css
import eyeShowSrc from './img/eye-show.svg';
import eyeHideSrc from './img/eye-hide.svg';
import template from './template.hbs';


export default class ButtonEye extends BaseComponent {
  constructor({
    el,
    componentName,
    publishEventShow,
    publishEventHide,
  }) {
    super({ el });

    this.publishEventShow = publishEventShow;
    this.publishEventHide = publishEventHide;

    this.render({ componentName });
    this.elements.button = document.querySelector(`[data-component="${componentName}"]`);
    this.elements.imgShow = this.elements.button.querySelector(`[data-element="${componentName}__img-show"]`);
    this.elements.imgHide = this.elements.button.querySelector(`[data-element="${componentName}__img-hide"]`);

    this.onClick = this.onClick.bind(this);
    this.addEvents();
  }

  render({ componentName }) {
    this.el.innerHTML = template({
      componentName,
      imgShowUrl: eyeShowSrc,
      imgHideUrl: eyeHideSrc,
    });
  }

  addEvents() {
    this.elements.button.addEventListener('click', this.onClick);
    this.elements.button.onmousedown = () => false; // запрет outline при клике
  }

  removeEvents() {
    this.elements.button.removeEventListener('click', this.onClick);
    this.elements.button.onmousedown = null;
  }


  onClick() {
    if (!this.isPasswordShown) {
      PubSub.publish(this.publishEventShow);
      this.isPasswordShown = true;
      this.show({ el: this.elements.imgHide });
      this.hide({ el: this.elements.imgShow });
      return;
    }
    PubSub.publish(this.publishEventHide);
    this.isPasswordShown = false;
    this.show({ el: this.elements.imgShow });
    this.hide({ el: this.elements.imgHide });
  }
}
