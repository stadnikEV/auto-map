
const getLatLng = (obj) => {
  const lat = obj.lat();
  const lng = obj.lng();

  return { lat, lng };
};

module.exports = getLatLng;
