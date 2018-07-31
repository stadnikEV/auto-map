import PubSub from 'pubsub-js';
import hashConfig from './hash-config';

export default class Router {
  constructor() {
    this.onHashChange = this.onHashChange.bind(this);
    window.addEventListener('hashchange', this.onHashChange);
  }


  isCorrectHash({ currentRouteHash }) {
    let isCorrectHash = false;
    hashConfig.forEach((referenceRouteHash) => {
      if (referenceRouteHash === currentRouteHash) {
        isCorrectHash = true;
      }
    });
    return isCorrectHash;
  }

  onHashChange() {
    const currentRouteHash = Router.getRouteHash();
    if (this.isCorrectHash({ currentRouteHash })) {
      PubSub.publish('routeHashChange', { routeHash: currentRouteHash });
      return;
    }
    Router.setRouteHash({ routeHash: 'badHash' });
  }

  static getRouteHash() {
    const routeHash = window.location.hash;
    return routeHash.slice(1);
  }

  static setRouteHash({ routeHash }) {
    if (Router.getRouteHash() === routeHash) {
      return;
    }
    window.location.hash = `#${routeHash}`;
  }
}
