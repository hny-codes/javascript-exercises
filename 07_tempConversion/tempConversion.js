const ftoc = function (temp) {
  const newTemp = ((temp - 32) * 5) / 9;
  return parseFloat(newTemp.toFixed(1));
};

const ctof = function (temp) {
  const newTemp = temp * 1.8 + 32;
  return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
