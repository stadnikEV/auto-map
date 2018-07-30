import regEexpPatterns from 'components/__shared/base-input/pattern-reg-exp';

export default ({ value }) => {
  if (value.search(regEexpPatterns.empty) === 0) {
    return {
      message: 'Введите имя',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.maxLengthName) === -1) {
    return {
      message: 'Имя не должно превышать 20 символов',
      isValid: false,
    };
  }
  return {
    message: null,
    isValid: true,
  };
};
