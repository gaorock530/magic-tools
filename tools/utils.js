function map (value, in_min, in_max, out_min, out_max) {
  return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

function range (lower, upper) {
  return Math.floor(Math.random() * (upper - lower)) + lower
}

function checkPass (v) {
  let secureLevel = 0;
  // Minimum eight characters, at least one letter and one number:
  if (v.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,128}$/)) secureLevel = 1;
  // Minimum eight characters, at least one letter, one number and one special character
  if (v.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,128}$/) || 
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
      v.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,128}$/)) secureLevel = 2;
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/
  if (v.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,128}$/) ||
  // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
      v.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,128}$/)) secureLevel = 3;
  return secureLevel;
}

module.exports = {
  map,
  range,
  checkPass
}