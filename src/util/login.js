const httpRequest = require('../services/http-request');

const login = ({ userName }) => {
  const promise = new Promise((resolve) => {
    httpRequest({
      url: './login',
      data: { userName },
    })
      .then((userDataJson) => {
        const userData = JSON.parse(userDataJson);
        console.log('server response - login:', userData);
        resolve(userData);
      });
  });
  return promise;
};

module.exports = login;
