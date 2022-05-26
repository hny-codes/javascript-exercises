const reverseString = function (string) {
  if (string === "") {
    return "";
  }
  const stringCopy = [...string];
  
  return stringCopy.reduce((sum, element) => {
    return element + sum;
  });
};

// Do not edit below this line
module.exports = reverseString;
