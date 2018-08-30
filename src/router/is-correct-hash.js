import routeHashConfig from './route-hash-config';

export default ({ currentRouteHash }) => {
  let isCorrectHash = false;
  routeHashConfig.forEach((referenceRouteHash) => {
    if (referenceRouteHash === currentRouteHash) {
      isCorrectHash = true;
    }
  });
  return isCorrectHash;
};
