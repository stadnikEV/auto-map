
const getClickCoord = (e) => {
  const lat = e.latLng.lat();
  const lng = e.latLng.lng();

  return { lat, lng };
};

module.exports = getClickCoord;
