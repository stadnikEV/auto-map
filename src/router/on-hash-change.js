import PubSub from 'pubsub-js';
import getHash from 'router/get-hash';
import routes from './routes';
import onSetHash from './on-set-hash';

export default () => {
  let changedHash = null;
  routes.forEach((route) => {
    if (route.hash === getHash()) {
      PubSub.publish('hashChange', { hash: route.hash });
      changedHash = route.hash;
    }
  });
  if (changedHash) {
    return;
  }
  onSetHash(null, { hash: 'badHash' });
};
