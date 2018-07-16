import getHash from 'router/get-hash';

export default ({ hash }) => {
  if (getHash() === hash) {
    return;
  }
  window.location.hash = `#${hash}`;
};
