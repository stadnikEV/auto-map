import validationEmail from '../validation-email';
import validationPassword from '../validation-password';
import TipForm from '../../tip-form';
import template from './template.hbs';
import templateContainer from '../../template-container.hbs';


require('../style.css');

export default class FormLogin {
  constructor({ el }) {
    this.el = el;
    this.components = {};
    this.elements = {};

    this.render();
    this.elements.form = document.querySelector('[data-component="form-login"]');
    this.elements.submit = this.elements.form.submit;
    this.elements.email = this.elements.form.email;
    this.elements.password = this.elements.form.password;

    this.onClick = this.onClick.bind(this);
    this.addEvents();
  }


  addEvents() {
    this.elements.form.addEventListener('click', this.onClick);
  }

  removeEvents() {
    this.elements.form.removeEventListener('click', this.onClick);
  }

  onClick(e) {
    const submit = e.target.closest('[data-element="form-login__submit"]');

    if (submit) {
      if (!this.elements.form.contains(submit)) {
        return;
      }
      e.preventDefault();
      submit.blur();

      const emailStatus = validationEmail({ value: this.elements.email.value });
      const passwordStatus = validationPassword({ value: this.elements.password.value });

      this.tipHendler({ emailStatus, passwordStatus });

      if (!emailStatus.isValid || !passwordStatus.isValid) {
        return;
      }
      console.log('click');
    }
  }

  tipHendler({ emailStatus, passwordStatus }) {
    if (this.elements.tipEmail) {
      this.removeTipContainer({
        tipName: 'tipEmail',
      });
    }
    if (this.elements.tipPassword) {
      this.removeTipContainer({
        tipName: 'tipPassword',
      });
    }
    if (!emailStatus.isValid) {
      this.renderTipContainer({
        beforeElemName: 'email',
        tipName: 'tip-email-container',
      });
      this.elements.tipEmail = this.elements.form.querySelector('[data-element="form-login__tip-email-container"]');
      this.components.tipEmail = new TipForm({
        el: this.elements.tipEmail,
        message: emailStatus.message,
      });
    }
    if (!passwordStatus.isValid) {
      this.renderTipContainer({
        beforeElemName: 'password',
        tipName: 'tip-password-container',
      });
      this.elements.tipPassword = this.elements.form.querySelector('[data-element="form-login__tip-password-container"]');
      this.components.tipPassword = new TipForm({
        el: this.elements.tipPassword,
        message: passwordStatus.message,
      });
    }
  }


  render() {
    this.el.innerHTML = template();
  }

  renderTipContainer({ beforeElemName, tipName }) {
    this.elements[beforeElemName].insertAdjacentHTML('beforeBegin', templateContainer({
      className: `form-login__${tipName}`,
      elemName: `form-login__${tipName}`,
    }));
  }


  removeTipContainer({ tipName }) {
    this.components[tipName].destroy();
    this.elements.form.removeChild(this.elements[tipName]);
    delete this.elements[tipName];
  }


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
    this.removeEvents();
    this.removeAllComponents();
    this.el.innerHTML = '';
  }
}
