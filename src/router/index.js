import PubSub from 'pubsub-js';
import hashConfig from './hash-config';

export default class Router {
  constructor() {
    this.onHashChange = this.onHashChange.bind(this);
    window.addEventListener('hashchange', this.onHashChange);
  }


  isCorrectHash({ currentHash }) {
    let isCorrectHash = false;
    hashConfig.forEach((referenceHash) => {
      if (referenceHash === currentHash) {
        isCorrectHash = true;
      }
    });
    return isCorrectHash;
  }

  onHashChange() {
    const currentHash = Router.getHash();
    if (this.isCorrectHash({ currentHash })) {
      PubSub.publish('hashChange', { hash: currentHash });
      return;
    }
    Router.setHash({ hash: 'badHash' });
  }

  static getHash() {
    const route = window.location.hash;
    return route.slice(1);
  }

  static setHash({ hash }) {
    if (Router.getHash() === hash) {
      return;
    }
    window.location.hash = `#${hash}`;
  }
}
