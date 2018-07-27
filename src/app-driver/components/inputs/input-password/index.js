import PubSub from 'pubsub-js';
import BaseInput from 'sharedDriver/js/base/base-input';
import 'sharedDriver/css/components/input.scss'; // css
import './style.scss'; // css
import validationPassword from './validation-password';
import ButtonEye from '../../buttons/button-eye';
import template from './template.hbs'; // template


export default class InputPassword extends BaseInput {
  constructor({
    el,
    componentName,
    id,
    events,
  }) {
    super({ el });
    this.components = {};

    this.render({ componentName, id });
    this.elements.mainContainer = document.querySelector(`[data-component="${componentName}"]`);
    this.elements.input = this.elements.mainContainer.querySelector(`[data-element="${componentName}__inputField"]`);
    this.elements.buttonEyeContainer = this.elements.mainContainer.querySelector(`[data-element="${componentName}__button-eye-container"]`);

    this.initComponentButtonEye({ componentName });

    this.addEvents({ events, componentName });
  }

  render({ componentName, id }) {
    this.el.innerHTML = template({ componentName, id });
  }

  addEvents({ events, componentName }) {
    this.eventsPubSub.validation = PubSub.subscribe(events.subscribeValidation, this.onValidation.bind(this, { events }));
    this.eventsPubSub.setFocus = PubSub.subscribe(events.subscribeSetFocus, this.onSetFocus.bind(this));
    this.eventsPubSub.showPassword = PubSub.subscribe(`showPassword-${componentName}`, this.onShowPassword.bind(this));
    this.eventsPubSub.hidePassword = PubSub.subscribe(`hidePassword-${componentName}`, this.onHidePassword.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onValidation({ events }) {
    const emailStatus = validationPassword({ value: this.elements.input.value });
    PubSub.publish(events.publishValidation, {
      status: emailStatus,
      data: this.elements.input.value,
    });
    this.backlightValid({ isValid: emailStatus.isValid });
  }

  onShowPassword() {
    this.elements.input.type = 'text';
  }

  onHidePassword() {
    this.elements.input.type = 'password';
  }

  initComponentButtonEye({ componentName }) {
    this.components.buttonEye = new ButtonEye({
      el: this.elements.buttonEyeContainer,
      componentName: 'button-eye-password',
      publishEventShow: `showPassword-${componentName}`,
      publishEventHide: `hidePassword-${componentName}`,
    });
  }
}
