import BaseComponent from 'components/__shared/base-component';
import 'components/__shared/form/style.scss'; // css
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

    this.render();
    this.elements.form = document.querySelector('[data-component="form-registration"]');

    this.elements.nameContainer = this.elements.form.querySelector('[data-element="form-registration__name-container"]');
    this.elements.emailContainer = this.elements.form.querySelector('[data-element="form-registration__email-container"]');
    this.elements.passwordContainer = this.elements.form.querySelector('[data-element="form-registration__password-container"]');
    this.elements.tipNameContainer = this.elements.form.querySelector('[data-element="form-registration__tip-name-container"]');
    this.elements.tipEmailContainer = this.elements.form.querySelector('[data-element="form-registration__tip-email-container"]');
    this.elements.tipPasswordContainer = this.elements.form.querySelector('[data-element="form-registration__tip-password-container"]');
    this.elements.buttonSubmitContainer = this.elements.form.querySelector('[data-element="form-registration__submit-container"]');

    this.initComponentInputName();
    this.initComponentInputEmail();
    this.initComponentInputPassword();
    this.initComponentTipName();
    this.initComponentTipEmail();
    this.initComponentTipPassword();
    this.initComponentButtonSubmit();

    this.onClick = this.onClick.bind(this);
    this.addEvents();
  }


  render() {
    this.el.innerHTML = template();
  }


  addEvents() {
    this.elements.form.addEventListener('click', this.onClick);
  }


  removeEvents() {
    this.elements.form.removeEventListener('click', this.onClick);
  }


  onClick(e) {
    const submit = e.target.closest('[data-component="button-submit-registration"]');

    if (submit) {
      if (!this.elements.form.contains(submit)) {
        return;
      }
      e.preventDefault(); // запрещает срабатывание события "submit"

      const nameStatus = this.components.inputName.validation();
      const emailStatus = this.components.inputEmail.validation();
      const passwordStatus = this.components.inputPassword.validation();

      this.tipHendler({
        isValid: nameStatus.isValid,
        message: nameStatus.message,
        tipName: 'tipName',
      });
      this.tipHendler({
        isValid: emailStatus.isValid,
        message: emailStatus.message,
        tipName: 'tipEmail',
      });
      this.tipHendler({
        isValid: passwordStatus.isValid,
        message: passwordStatus.message,
        tipName: 'tipPassword',
      });

      this.setFocus({
        isValidName: nameStatus.isValid,
        isValidEmail: emailStatus.isValid,
        isValidPassword: passwordStatus.isValid,
      });

      if (emailStatus.isValid
      && passwordStatus.isValid) {
        console.log('submit');
      }
    }
  }


  tipHendler({ isValid, message, tipName }) {
    if (isValid) {
      this.components[tipName].showTip({ message: '' });
      return;
    }
    this.components[tipName].showTip({ message });
  }


  setFocus({ isValidName, isValidEmail, isValidPassword }) {
    if (!isValidName) {
      this.components.inputName.setFocus();
      return;
    }
    if (!isValidEmail) {
      this.components.inputEmail.setFocus();
      return;
    }
    if (!isValidPassword) {
      this.components.inputPassword.setFocus();
      return;
    }
    document.activeElement.blur();
  }


  initComponentInputName() {
    this.components.inputName = new InputName({
      el: this.elements.nameContainer,
      componentName: 'input-name',
      id: 'name',
    });
  }


  initComponentInputEmail() {
    this.components.inputEmail = new InputEmail({
      el: this.elements.emailContainer,
      componentName: 'input-email',
      id: 'email',
    });
  }


  initComponentInputPassword() {
    this.components.inputPassword = new InputPassword({
      el: this.elements.passwordContainer,
      componentName: 'input-password',
      id: 'password',
    });
  }


  initComponentTipName() {
    this.components.tipName = new TipInline({
      el: this.elements.tipNameContainer,
      componentName: 'tip-inline-name',
    });
  }


  initComponentTipEmail() {
    this.components.tipEmail = new TipInline({
      el: this.elements.tipEmailContainer,
      componentName: 'tip-inline-email',
    });
  }


  initComponentTipPassword() {
    this.components.tipPassword = new TipInline({
      el: this.elements.tipPasswordContainer,
      componentName: 'tip-inline-password',
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
