const dateSerial = require('./tools/dateSerial');
const md5 = require('./tools/md5')
const utils = require('./tools/utils')
const dataURLToBlob = require('./tools/dataURLToBlob')
const base64ImageToFile = require('./tools/base64ImageToFile')

module.exports = {
  ...md5,
  dateSerial,
  timeReminder: require('./tools/timeReminder'),
  numberFormater: require('./tools/formatNumber'),
  ...utils,
  dataURLToBlob,
  base64ImageToFile
}