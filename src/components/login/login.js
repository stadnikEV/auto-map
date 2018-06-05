import httpRequest from '../../services/http-request';

export default ({ userName }) => {
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
