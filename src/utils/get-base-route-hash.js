export default ({ routeHash }) => {
  const result = routeHash.match(/^[a-z]*/)[0];
  return result;
};
