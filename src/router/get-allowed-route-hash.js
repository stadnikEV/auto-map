export default ({ userStatus }) => {
  let allowedRouteHash = [];

  if (userStatus === 'login') {
    allowedRouteHash = [
      'application',
      'application/search',
      'badHash',
    ];
  }

  if (userStatus === 'logout'
  || userStatus === 'unknown') {
    allowedRouteHash = [
      'login',
      'registration',
      'badHash',
    ];
  }

  return allowedRouteHash;
};
