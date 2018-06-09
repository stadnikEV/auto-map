
export default ({ waypointIndex, stopoversIndex }) => {
  if (waypointIndex > stopoversIndex[0]
  && waypointIndex <= stopoversIndex[1]) {
    return true;
  }
  return false;
};
