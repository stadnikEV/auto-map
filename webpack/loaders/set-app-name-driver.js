module.exports = (source) => {
  const result = source.replace(/<%applicationName%>/g, 'driver');
  return result;
};
