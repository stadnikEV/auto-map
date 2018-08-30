import httpRequest from 'utils/http-request';

const initSimbiozApi = () => {
  if (window.simbiozApi) {
    return window.simbiozApi;
  }

  class SimbiozApi {
    userStatus() {
      return new Promise((resolve, reject) => {
        httpRequest({
          url: 'http://localhost:8080/userStatus',
          method: 'get',
        })
          .then((userStatus) => {
            const { status } = userStatus;
            return resolve(status);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

    registration({ userName, email, password }) {
      return new Promise((resolve, reject) => {
        httpRequest({
          url: 'http://localhost:8080/registration',
          method: 'post',
          data: JSON.stringify({
            userName,
            email,
            password,
          }),
        })
          .then((json) => {
            resolve(json);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

    login({ email, password }) {
      return new Promise((resolve, reject) => {
        httpRequest({
          url: 'http://localhost:8080/login',
          method: 'post',
          data: JSON.stringify({
            email,
            password,
          }),
        })
          .then((json) => {
            resolve(json);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }

  window.simbiozApi = new SimbiozApi();
  return window.simbiozApi;
};

export default initSimbiozApi();
