import Page from './components/page';
import Router from '../router';

const page = new Page({ el: document.body });
const router = new Router();

console.log(page, router);
