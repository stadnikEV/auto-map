import PubSub from 'pubsub-js';
import router from 'router';
import simbiozApi from 'simbioz-api/<%applicationName%>-api';
import HttpError from 'utils/http-error.js';
import BaseComponent from 'components/__shared/base-component';
import 'components/__shared/login-registration/style.scss'; // css
import FormLogin from '../forms/form-login';
import template from './template.hbs';


class Login extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.components = {};
    this.eventsPubSub = {};

    this.render();
    this.elements.login = document.querySelector('[data-component="login"]');
    this.elements.FormContainer = this.elements.login.querySelector('[data-element="login__form-container"]');

    this.components.formLogin = new FormLogin({
      el: this.elements.FormContainer,
    });

    this.addEvents();
  }

  render() {
    this.el.innerHTML = template();
  }

  addEvents() {
    this.eventsPubSub.formLoginData = PubSub.subscribe('form-login-data', this.onSendData.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onSendData(msg, { email, password }) {
    simbiozApi.login({
      data: { email, password },
    })
      .then(() => {
        router.setRouteHash({ routeHash: 'application' });
        router.setUserStatus('login');
      })
      .catch((err) => {
        this.components.formLogin.formEnable();
        if (err instanceof HttpError) {
          if (err.status === 403) {
            this.components.formLogin.tipHendler({
              isValid: false,
              message: 'Не верная почта или пароль',
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

module.exports = Login;
