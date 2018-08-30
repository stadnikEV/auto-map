import Page from 'components/page-driver';
import router from '../router';

new Page({ el: document.body });
router.initRouteHash();
