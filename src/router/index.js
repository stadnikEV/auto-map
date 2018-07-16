import PubSub from 'pubsub-js';
import onSetHash from './on-set-hash';
import onHashChange from './on-hash-change';

export default class Router {
  constructor() {
    window.addEventListener('hashchange', onHashChange);
    PubSub.subscribe('setHash', onSetHash.bind(this));
  }
}
