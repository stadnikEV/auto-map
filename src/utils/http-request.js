import HttpError from 'utils/http-error.js';

export default ({ url, method, data }) => {
  const promise = new Promise((resolve, reject) => {
    const params = {
      method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'get') {
      params.body = JSON.stringify(data);
    }

    let response = null;

    fetch(url, params)
      .then((res) => {
        response = res;
        const json = res.json();
        return json;
      })
      .then((json) => {
        if (response.status !== 200) {
          return Promise.reject(new HttpError({
            status: json.status,
            message: json.message,
          }));
        }
        return resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
