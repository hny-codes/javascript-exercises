const sumAll = function (first, second) {
  if (
    Number.isInteger(first) == false ||
    Number.isInteger(second) == false ||
    first <= 0 ||
    second <= 0
  ) {
    return "ERROR";
  }

  const range = [first, second].sort((a, b) => a - b);
  let firstNumber = range[0];
  const secondNumber = range[1];
  let sum = 0;

  console.log(range);
  for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
    sum += firstNumber;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
