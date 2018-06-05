import httpRequest from '../../services/http-request';

export default (userName) => {
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
