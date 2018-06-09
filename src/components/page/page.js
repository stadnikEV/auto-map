import PubSub from 'pubsub-js';
import login from '../login/login';
import registartion from '../registartion/registartion';
import chooseUserType from '../choose-user-type/choose-user-type';
import Map from '../map/map';

require('./page.css');

export default class Page {
  constructor(el) {
    this._el = el;
    this._userName = 'user2';

    login({ userName: this._userName })
      .then((userData) => {
        /*
        *   если пользователь не зарегистрирован
        */

        if (userData.userName === false) {
          // регистрация пользователя
          registartion({ userName: this._userName })
            .then((userData) => {
              // регистрация прошла успешно
              if (userData.userName === this._userName && userData.userType === false) {
                // выбор режима приложения (passenger или driver)
                chooseUserType({ userName: userData.userName, userType: 'passenger' }) // пока установил по дефолту passenger!!!
                  .then((userData) => {
                    // инициализация компонета "map"
                    this._map = new Map({
                      el: document.querySelector('[data-component="map"]'),
                      userData,
                    });
                  });
              }
            });
        }

        /*
        *   если пользователь зарегистрирован но нет данных "userType"
        */

        if (userData.userType === false) {
          chooseUserType({ userName: userData.userName })
            .then((userData) => {
              // инициализация компонета "map"
              this._map = new Map({
                el: document.querySelector('[data-component="map"]'),
                userData,
              });
            });
        }

        /*
        *   если сервер отдал данные "passenger" или "driver"
        */

        if (userData.userType) {
          this._map = new Map({
            el: document.querySelector('[data-component="map"]'),
            userData,
          });
        }

        /*
        *   кнопка переключение между режимами "passenger" и "driver"
        */

        this._buttonSwitch = document.querySelector('.switch');
        this._buttonSwitch.addEventListener('click', () => {
          PubSub.publish('clickButtonSwitch');
        });

        /*
        *   кнопка поиска совпадения маршрутов passenger и driver
        */

        this._buttonSwitch = document.querySelector('.start-search');
        this._buttonSwitch.addEventListener('click', () => {
          PubSub.publish('startSearch');
        });
      });
  }
}
