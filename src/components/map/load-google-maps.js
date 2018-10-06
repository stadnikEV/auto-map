export default () => {
  const promise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA1aqVDTGme-a6qPTdHG3aIqGRbjHHs8MM&callback=initMap';
    document.body.appendChild(script);

    window.initMap = () => {
      resolve();
    };
  });

  return promise;
};
