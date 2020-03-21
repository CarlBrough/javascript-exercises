const ftoc = function(fahrenTemp) {
  return ( Math.round(((fahrenTemp - 32) * 5 / 9) * 10) / 10);
}

const ctof = function(centiTemp) {
  return ( Math.round ((centiTemp * 9 / 5 + 32) * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
}
