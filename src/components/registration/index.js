import PubSub from 'pubsub-js';
import router from 'router';
import simbiozApi from 'simbioz-api';
import HttpError from 'utils/http-error';
import BaseComponent from 'components/__shared/base-component';
import 'components/__shared/login-registration/style.scss'; // css
import FormRegistration from '../forms/form-registration';
import template from './template.hbs';


class Registration extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.registration = document.querySelector('[data-component="registration"]');
    this.elements.FormContainer = this.elements.registration.querySelector('[data-element="registration__form-container"]');

    this.components.formRegistration = new FormRegistration({
      el: this.elements.FormContainer,
    });

    this.addEvents();
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    this.eventsPubSub.formRegistratioData = PubSub.subscribe('form-registration-data', this.onSendData.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onSendData(msg, { userName, email, password }) {
    this.components.formRegistration.formDisable();
    simbiozApi.registration({ userName, email, password })
      .then(() => {
        router.setRouteHash({ routeHash: 'application' });
        router.setUserStatus('login');
        console.log('аккаунт создан');
      })
      .catch((err) => {
        this.components.formRegistration.formEnable();
        if (err instanceof HttpError) {
          if (err.status === 403) {
            this.components.formRegistration.tipHendler({
              isValid: false,
              message: 'email уже зарегистрирован',
              tipName: 'tipEmail',
            });
          }
          if (err.status === 500) {
            console.log('ошибка на сторне сервера');
          }
        }
        console.warn(err);
      });
  }
}

module.exports = Registration;
