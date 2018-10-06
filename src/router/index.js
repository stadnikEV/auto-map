import PubSub from 'pubsub-js';
import simbiozApi from 'simbioz-api/<%applicationName%>-api';
import getAllowedRouteHash from './get-allowed-route-hash';
import isCorrectHash from './is-correct-hash';


const initRouter = () => {
  if (window.router) {
    return window.router;
  }

  class Router {
    constructor() {
      this.onHashChange = this.onHashChange.bind(this);
      window.addEventListener('hashchange', this.onHashChange);
    }


    onHashChange() {
      const currentRouteHash = this.getRouteHash();

      if (!isCorrectHash({ currentRouteHash })) {
        this.setRouteHash({ routeHash: 'badHash' });
        return;
      }

      const allowedRouteHash = getAllowedRouteHash({
        currentRouteHash,
        userStatus: this.userStatus,
      });

      const isAllowedRouteHash = allowedRouteHash.some((route) => {
        const result = (currentRouteHash === route);
        return result;
      });

      if (!isAllowedRouteHash) {
        if (allowedRouteHash.length === 0) {
          return;
        }
        this.setRouteHash({ routeHash: allowedRouteHash[0] });
        return;
      }

      if (this.lastRouteHash === currentRouteHash) {
        return;
      }
      this.lastRouteHash = currentRouteHash;
      PubSub.publish('routeHashChange', { routeHash: currentRouteHash });
    }

    initRouteHash() {
      simbiozApi.userStatus()
        .then((response) => {
          this.userStatus = response.status;

          this.onHashChange();
        })
        .catch((err) => {
          console.warn(err);
        });
    }

    getRouteHash() {
      const routeHash = window.location.hash;
      return routeHash.slice(1);
    }

    setRouteHash({ routeHash }) {
      const currentRouteHash = this.getRouteHash();
      if (currentRouteHash === routeHash) {
        return;
      }
      window.location.hash = `#${routeHash}`;
    }

    setUserStatus(userStatus) {
      this.userStatus = userStatus;
    }
  }

  window.router = new Router();
  return window.router;
};

export default initRouter();
