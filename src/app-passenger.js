import Page from 'components/page';
import router from './router';

new Page({ el: document.body });
router.initRouteHash();
