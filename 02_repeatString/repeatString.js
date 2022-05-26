const repeatString = function (input, max) {
  let output = "";
  if (max < 0) {
    return "ERROR";
  }
  for (let i = 0; i < max; i++) {
    output += input;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
