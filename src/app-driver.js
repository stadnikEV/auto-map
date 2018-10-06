import loadPolyfillFetch from 'utils/polyfills/load-polyfill-fetch';
import Page from 'components/page';
import router from './router';

loadPolyfillFetch()
  .then(() => {
    new Page({ el: document.body });
    router.initRouteHash();
  })
  .catch((err) => {
    console.warn(err);
  });
