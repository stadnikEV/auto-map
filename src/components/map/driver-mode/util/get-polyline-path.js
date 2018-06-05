
export default ({ routeElem }) => {
  const myRoute = routeElem.routes[0].legs;
  const points = [];

  for (let k = 0; k < myRoute.length; k += 1) {
    for (let i = 0; i < myRoute[k].steps.length; i += 1) {
      for (let j = 0; j < myRoute[k].steps[i].lat_lngs.length; j += 1) {
        points.push(myRoute[k].steps[i].lat_lngs[j]);
      }
    }
  }

  return points;
};
