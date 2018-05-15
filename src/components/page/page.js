import Map from '../map/map';
import login from '../login/login';
import registartion from '../registartion/registartion';
import chooseUserType from '../choose-user-type/choose-user-type';


require('./page.css');

export default class Page {
  constructor(el) {
    this._el = el;
    this._userName = 'user1';

    login({ userName: this._userName })
      .then((userData) => {
        /*
        *
        *   если пользователь не зарегистрирован
        *
        */

        if (userData.userName === false) {
          // регистрация пользователя
          registartion({ userName: this._userName })
            .then((userData) => {
              // регистрация прошла успешно
              if (userData.userName === this._userName && userData.userType === false) {
                // выбор режима приложения (passenger или driver)
                chooseUserType({ userName: userData.userName })
                  .then((userData) => {
                    // инициализация компонета "map"
                    this._map = new Map({
                      el: document.querySelector('[data-component="map"]'),
                      userData,
                    });
                  });
              }
            });
          return;
        }

        /*
        *
        *   если пользователь зарегистрирован но нет данных "userType"
        *
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

          return;
        }

        /*
        *
        *   если сервер отдал данные "passenger" или "driver"
        *
        */

        this._map = new Map({
          el: document.querySelector('[data-component="map"]'),
          userData,
        });

        // this._buttonSwitch = document.querySelector('.switch');
        // this._buttonSwitch.addEventListener('click', this._map.switchUserType.bind(this._map));
      });
  }
}
