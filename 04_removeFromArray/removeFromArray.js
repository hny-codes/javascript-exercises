const removeFromArray = function () {
  const args = [...arguments];
  const array = args[0];
  const value = [...args];
  value.shift();
  console.log(array);
  console.log(value);
  return array.filter((element) => {
    return !value.find((num) => num == element);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
removeFromArray([1, 2, 3, 4], 3);
