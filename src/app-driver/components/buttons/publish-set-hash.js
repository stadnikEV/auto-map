import PubSub from 'pubsub-js';

export default ({ hash }) => {
  PubSub.publish('setHash', { hash });
};
