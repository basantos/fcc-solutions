// Find the symmetric difference of the two arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  var arr1Copy = arr1;
  arr1 = arr1.filter((num1) => {
    return !arr2.some((num2) => num1 === num2);
  });
  arr2 = arr2.filter((num1) => {
    return !arr1Copy.some((num2) => num1 === num2);
  });
  return newArr.concat(arr1).concat(arr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
