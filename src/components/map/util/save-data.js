const httpRequest = require('../../../services/http-request');

const saveData = ({ url, userData }) => {
  const promise = new Promise((resolve) => {
    httpRequest({
      url,
      data: userData,
    })
      .then((response) => {
        console.log(response);
        resolve(response);
      });
  });

  return promise;
};

module.exports = saveData;
