
export default ({ waypoints }) => {
  let firstStopoverIndex;
  let lastStopoverIndex;

  waypoints.forEach((waypoint, i) => {
    if (firstStopoverIndex === undefined) {
      if (waypoint.stopover === true) {
        firstStopoverIndex = i;
      }
      return;
    }

    if (waypoint.stopover === true) {
      lastStopoverIndex = i;
    }
  });

  return [
    firstStopoverIndex,
    lastStopoverIndex,
  ];
};
