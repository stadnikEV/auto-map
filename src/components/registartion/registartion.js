const httpRequest = require('../../services/http-request');

const registartion = (userName) => {
  const promise = new Promise((resolve) => {
    httpRequest({
      url: './registartion',
      data: userName,
    })
      .then((userDataJson) => {
        console.log('server response - registartion:', userDataJson);
        resolve(JSON.parse(userDataJson));
      });
  });
  return promise;
};

module.exports = registartion;
