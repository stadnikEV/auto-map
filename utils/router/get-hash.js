export default () => {
  const route = window.location.hash;
  return route.slice(1);
};
