import PubSub from 'pubsub-js';
import BaseComponent from 'sharedDriver/js/base/base-component';
import 'sharedDriver/css/components/form.scss'; // css
import './style.scss'; // css
import TipInline from '../../tip-inline';
import template from './template.hbs'; // template
import ButtonSubmit from '../../buttons/button-submit';
import InputName from '../../inputs/input-name';
import InputEmail from '../../inputs/input-email';
import InputPassword from '../../inputs/input-password';

export default class FormRegistration extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.form = document.querySelector('[data-component="form-registration"]');
    this.elements.tipNameContainer = this.elements.form.querySelector('[data-element="form-registration__tip-name-container"]');
    this.elements.nameContainer = this.elements.form.querySelector('[data-element="form-registration__name-container"]');
    this.elements.tipEmailContainer = this.elements.form.querySelector('[data-element="form-registration__tip-email-container"]');
    this.elements.emailContainer = this.elements.form.querySelector('[data-element="form-registration__email-container"]');
    this.elements.tipPasswordContainer = this.elements.form.querySelector('[data-element="form-registration__tip-password-container"]');
    this.elements.passwordContainer = this.elements.form.querySelector('[data-element="form-registration__password-container"]');
    this.elements.buttonSubmitContainer = this.elements.form.querySelector('[data-element="form-registration__submit-container"]');

    this.initComponentInputName();
    this.initComponentInputEmail();
    this.initComponentInputPassword();
    this.initComponentButtonSubmit();

    this.onClick = this.onClick.bind(this);
    this.addEvents();
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    this.elements.form.addEventListener('click', this.onClick);
    this.eventsPubSub.responseValidationName = PubSub.subscribe('responseValidationName', this.onValidation.bind(this));
    this.eventsPubSub.responseValidationEmail = PubSub.subscribe('responseValidationEmail', this.onValidation.bind(this));
    this.eventsPubSub.responseValidationPassword = PubSub.subscribe('responseValidationPassword', this.onValidation.bind(this));
  }

  removeEvents() {
    this.elements.form.removeEventListener('click', this.onClick);
    this.unsubscribe();
  }

  onClick(e) {
    const submit = e.target.closest('[data-component="button-submit-registration"]');

    if (submit) {
      if (!this.elements.form.contains(submit)) {
        return;
      }
      e.preventDefault(); // запрещает срабатывание события "submit"

      PubSub.publish('requestValidationPassword');
      PubSub.publish('requestValidationEmail');
      PubSub.publish('requestValidationName');

      console.log('click');
    }
  }

  onValidation(msg, { status }) {
    if (msg === 'responseValidationName') {
      this.isValidName = status.isValid;
      this.tipNameHendler({
        isValid: status.isValid,
        message: status.message,
      });
    }

    if (msg === 'responseValidationEmail') {
      this.isValidEmail = status.isValid;
      this.tipEmailHendler({
        isValid: status.isValid,
        message: status.message,
      });
    }

    if (msg === 'responseValidationPassword') {
      this.isValidPassword = status.isValid;
      this.tipPasswordHendler({
        isValid: status.isValid,
        message: status.message,
      });
    }

    if (this.isValidName === undefined // сработали все события
    || this.isValidEmail === undefined
    || this.isValidPassword === undefined) {
      return;
    }

    this.setFocus();

    if (this.isValidName
    && this.isValidEmail // если поля валидные
    && this.isValidPassword) {
      console.log('submit');
    }

    delete this.isValidName;
    delete this.isValidEmail;
    delete this.isValidPassword;
  }

  setFocus() {
    if (!this.isValidName) {
      PubSub.publish('setFocusName');
      return;
    }
    if (!this.isValidEmail) {
      PubSub.publish('setFocusEmail');
      return;
    }
    if (!this.isValidPassword) {
      PubSub.publish('setFocusPassword');
      return;
    }
    document.activeElement.blur();
  }

  tipNameHendler({ isValid, message }) {
    if (isValid && this.components.tipName) {
      PubSub.publish('showTipName', { message: '' });
    }
    if (!isValid) {
      if (!this.components.tipName) {
        this.initComponentTipName();
      }
      PubSub.publish('showTipName', { message });
    }
  }

  tipEmailHendler({ isValid, message }) {
    if (isValid && this.components.tipEmail) {
      PubSub.publish('showTipEmail', { message: '' });
    }
    if (!isValid) {
      if (!this.components.tipEmail) {
        this.initComponentTipEmail();
      }
      PubSub.publish('showTipEmail', { message });
    }
  }

  tipPasswordHendler({ isValid, message }) {
    if (isValid && this.components.tipPassword) {
      PubSub.publish('showTipPassword', { message: '' });
    }
    if (!isValid) {
      if (!this.components.tipPassword) {
        this.initComponentTipPassword();
      }
      PubSub.publish('showTipPassword', { message });
    }
  }

  initComponentInputName() {
    this.components.inputName = new InputName({
      el: this.elements.nameContainer,
      componentName: 'input-name',
      id: 'name',
      events: {
        subscribeValidation: 'requestValidationName',
        subscribeSetFocus: 'setFocusName',
        publishValidation: 'responseValidationName',
      },
    });
  }

  initComponentInputEmail() {
    this.components.inputEmail = new InputEmail({
      el: this.elements.emailContainer,
      componentName: 'input-email',
      id: 'email',
      events: {
        subscribeValidation: 'requestValidationEmail',
        subscribeSetFocus: 'setFocusEmail',
        publishValidation: 'responseValidationEmail',
      },
    });
  }

  initComponentInputPassword() {
    this.components.inputPassword = new InputPassword({
      el: this.elements.passwordContainer,
      componentName: 'input-password',
      id: 'password',
      events: {
        subscribeValidation: 'requestValidationPassword',
        subscribeSetFocus: 'setFocusPassword',
        publishValidation: 'responseValidationPassword',
      },
    });
  }

  initComponentTipName() {
    this.components.tipName = new TipInline({
      el: this.elements.tipNameContainer,
      componentName: 'tip-inline-Name',
      subscribeEvent: 'showTipName',
    });
  }

  initComponentTipEmail() {
    this.components.tipEmail = new TipInline({
      el: this.elements.tipEmailContainer,
      componentName: 'tip-inline-email',
      subscribeEvent: 'showTipEmail',
    });
  }

  initComponentTipPassword() {
    this.components.tipPassword = new TipInline({
      el: this.elements.tipPasswordContainer,
      componentName: 'tip-inline-password',
      subscribeEvent: 'showTipPassword',
    });
  }

  initComponentButtonSubmit() {
    this.components.buttonSubmit = new ButtonSubmit({
      el: this.elements.buttonSubmitContainer,
      componentName: 'button-submit-registration',
      value: 'ДАЛЕЕ',
    });
  }
}
