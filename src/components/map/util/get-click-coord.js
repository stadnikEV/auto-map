
const getCoord = (obj) => {
  const lat = obj.latLng.lat();
  const lng = obj.latLng.lng();

  return { lat, lng };
};

module.exports = getCoord;
