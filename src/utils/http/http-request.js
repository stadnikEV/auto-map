import server from '../../server/server';

export default ({ url, data }) => {
  const dataRequestJSON = JSON.stringify(data);
  const promise = new Promise((resolve) => {
    server({ url, dataRequestJSON })
      .then((responseData) => {
        resolve(responseData);
      });
  });
  return promise;
};
