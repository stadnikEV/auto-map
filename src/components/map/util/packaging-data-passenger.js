
const packagingDataPassenger = ({ userName, points }) => {
  const data = {};
  data.userName = userName;
  data.passenger = {
    A: {
      lat: points.A.circle.center.lat(),
      lng: points.A.circle.center.lng(),
      radius: points.A.circle.radius,
    },
    B: {
      lat: points.B.circle.center.lat(),
      lng: points.B.circle.center.lng(),
      radius: points.B.circle.radius,
    },
  };
  this.a = null;
  return data;
};

module.exports = packagingDataPassenger;
