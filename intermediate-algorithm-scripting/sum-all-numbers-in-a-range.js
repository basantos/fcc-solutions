// Given an array of two numbers, 
// return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var largerNum = Math.max(...arr);
  var smallerNum = Math.min(...arr);
  var sum = 0;
  for(var i=smallerNum; i<=largerNum; i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
