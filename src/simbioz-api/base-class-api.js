import httpRequest from 'utils/http-request.js';


export default class BaseClassApi {
  userStatus() {
    return this.sendToServer({
      apiName: 'userStatus',
      method: 'get',
    });
  }

  login({ data }) {
    return this.sendToServer({
      apiName: 'login',
      method: 'post',
      data,
    });
  }

  registration({ data }) {
    return this.sendToServer({
      apiName: 'registration',
      method: 'post',
      data,
    });
  }

  putMapData({ data }) {
    return this.sendToServer({
      apiName: 'putMapData',
      method: 'post',
      data,
    });
  }

  getMapData() {
    return this.sendToServer({
      apiName: 'getMapData',
      method: 'get',
    });
  }

  sendToServer({ method, apiName, data = null }) {
    const promise = httpRequest({
      url: `http://localhost:8080/<%applicationName%>/${apiName}`,
      method,
      data,
    });
    return promise;
  }
}
