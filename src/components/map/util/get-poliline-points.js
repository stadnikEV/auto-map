
function getPolilinePoints({ route }) {
  const myRoute = route.routes[0].legs[0];
  const points = [];
  for (let i = 0; i < myRoute.steps.length; i += 1) {
    for (let j = 0; j < myRoute.steps[i].lat_lngs.length; j += 1) {
      points.push(myRoute.steps[i].lat_lngs[j]);
    }
  }

  return points;
}

module.exports = getPolilinePoints;
