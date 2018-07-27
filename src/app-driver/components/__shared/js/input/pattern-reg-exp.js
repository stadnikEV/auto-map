export default {
  empty: new RegExp('^$'),
  minLengthPassword: new RegExp('^.{8,}$'),
  maxLengthPassword: new RegExp('^.{0,100}$'),
  maxLengthName: new RegExp('^.{0,20}$'),
  symbolsBeforeAt: new RegExp('^[^@].+$'),
  symbolsAfterAt: new RegExp('^.*@.+$'),
  atOnlyOne: new RegExp('^[^@]*@[^@]*$'),
  maxLengthEmail: new RegExp('^.{0,254}$'),
};
