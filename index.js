const dateFormater = require('./tools/dateFormater');
const md5 = require('./tools/md5')

module.exports = {
  ...md5,
  generateSerialNoFromDateString: dateFormater,
  dateSerial: dateFormater,
}