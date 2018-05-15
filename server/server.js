
const server = ({ url, dataRequestJSON }) => {
  const promise = new Promise((resolve) => {
    const dataRequest = JSON.parse(dataRequestJSON);

    let userDataDBJson = localStorage.getItem(dataRequest.userName);
    const userDataDB = JSON.parse(userDataDBJson);


    /*
    *
    *   вход в приложение
    *
    */


    if (url === './login') {
      // если пользователь не зарегистрирован
      if (userDataDBJson === null) {
        setTimeout(() => {
          resolve(JSON.stringify({ userName: false }));
        }, 1000);

        return;
      }


      // не данных о режиме приложения (passenger или driver), приложением еще не пользовались
      if (!userDataDB.userType) {
        userDataDB.userType = false;
        localStorage.setItem(dataRequest.userName, userDataDB);

        setTimeout(() => {
          resolve(localStorage.getItem(dataRequest.userName));
        }, 1000);

        return;
      }

      // отдать данные приложению если на сервере инициализирован режим 'passenger'
      if (userDataDB.userType === 'passenger') {
        const responseData = {
          userName: dataRequest.userName,
          userType: 'passenger',
          passenger: userDataDB.passenger,
        };

        setTimeout(() => {
          resolve(JSON.stringify(responseData));
        }, 1000);
        return;
      }

      // отдать данные приложению если на сервере инициализирован режим 'driver'
      // if (userData.userType !== 'driver') {
      //   const data = {
      //     userType: 'driver',
      //     passenger: userData.driver,
      //   };
      //   response = JSON.stringify(data);
      //   setTimeout(() => {
      //     resolve(response);
      //   }, 1000);
      //   return;
      // }
    }

    /*
    *
    *   регистрация пользователя
    *
    */


    if (url === './registartion') {
      localStorage.setItem(dataRequest.userName, `{ "userName": "${dataRequest.userName}", "userType": false }`);
      setTimeout(() => {
        resolve(localStorage.getItem(dataRequest.userName));
      }, 1000);

      return;
    }


    /*
    *
    *   сохранение данных в базу
    *
    */

    // сохранение данных о выбрвнном режиме "userType"
    if (url === './userType') {
      userDataDB.userType = dataRequest.userType;

      userDataDBJson = JSON.stringify(userDataDB);

      localStorage.setItem(dataRequest.userName, userDataDBJson);

      setTimeout(() => {
        resolve(localStorage.getItem(dataRequest.userName));
      }, 1000);

      return;
    }

    // сохранение данных для режтма "passenger"
    if (url === './passenger/save-data') {
      userDataDB.userType = 'passenger';
      userDataDB.passenger = dataRequest.passenger;

      userDataDBJson = JSON.stringify(userDataDB);
      localStorage.setItem(dataRequest.userName, userDataDBJson);

      setTimeout(() => {
        resolve(localStorage.getItem(dataRequest.userName));
      }, 1000);
    }
  });
  return promise;
};

module.exports = server;
