
const getElemCoord = (obj) => {
  const lat = obj.position.lat();
  const lng = obj.position.lng();

  return { lat, lng };
};

module.exports = getElemCoord;
