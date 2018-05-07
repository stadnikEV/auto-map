const server = require('../../server/server');

const httpRequest = ({ url, data }) => {
  const dataRequestJSON = JSON.stringify(data);
  const promise = new Promise((resolve) => {
    server({ url, dataRequestJSON })
      .then((responseData) => {
        resolve(responseData);
      });
  });
  return promise;
};

module.exports = httpRequest;
