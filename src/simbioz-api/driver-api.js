// import httpRequest from 'utils/http-request.js';
import BaseClassApi from './base-class-api';

const initSimbiozApi = () => {
  if (window.simbiozApi) {
    return window.simbiozApi;
  }

  class SimbiozApi extends BaseClassApi {}

  window.simbiozApi = new SimbiozApi();
  return window.simbiozApi;
};

export default initSimbiozApi();
