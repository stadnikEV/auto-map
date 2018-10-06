module.exports = (source) => {
  const result = source.replace(/<%applicationName%>/g, 'passenger');
  return result;
};
