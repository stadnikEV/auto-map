
export default ({ elements }) => {
  if (elements.length === 0) return 0;

  const arrId = [];

  elements.forEach((id) => {
    arrId[id] = true;
  });

  let i;
  for (i = 0; i < arrId.length; i += 1) {
    if (arrId[i] !== true) {
      return i;
    }
  }
  return i;
};
