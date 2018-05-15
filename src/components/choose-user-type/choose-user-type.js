const httpRequest = require('../../services/http-request');

const chooseUserType = (userData) => {
  const promise = new Promise((resolve) => {
    userData.userType = 'passenger';
    httpRequest({
      url: './userType',
      data: userData,
    })
      .then((response) => {
        console.log('server response - chooseUserType:', JSON.parse(response));
        resolve(JSON.parse(response));
      });
  });

  return promise;
};

module.exports = chooseUserType;
