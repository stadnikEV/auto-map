import httpRequest from '../../services/http-request';

export default (userData) => {
  const promise = new Promise((resolve) => {
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
