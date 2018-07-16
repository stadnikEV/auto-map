import regEexpPatterns from './pattern-reg-exp';

export default ({ value }) => {
  if (value.search(regEexpPatterns.empty) === 0) {
    return {
      message: 'Введите почту',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.atOnlyOne) === -1) {
    return {
      message: 'Адрес должен содержать один символ "@"',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.atNotFirst) === -1) {
    return {
      message: 'Заполните адрес до символа "@"',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.atNotLast) === -1) {
    return {
      message: 'Заполните адрес после символа "@"',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.maxLengthEmail) === -1) {
    return {
      message: 'Адрес почты не может быть больше 254 символов',
      isValid: false,
    };
  }
  return {
    message: null,
    isValid: true,
  };
};
