import regEexpPatterns from './pattern-reg-exp';

export default ({ value }) => {
  if (value.search(regEexpPatterns.empty) === 0) {
    return {
      message: 'Введите пароль',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.minLengthPassword) === -1) {
    return {
      message: 'Пароль не должен быть короче 8 символов',
      isValid: false,
    };
  }
  if (value.search(regEexpPatterns.maxLengthPassword) === -1) {
    return {
      message: 'Пароль не должен быть длиннее 100 символов',
      isValid: false,
    };
  }
  return {
    message: null,
    isValid: true,
  };
};
