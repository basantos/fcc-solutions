// Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
  var arrOfMaxNums = [];
  for(var i=0; i<arr.length; i++){
    var max = null;
    for(var j=0; j<arr[i].length; j++){
      max = Math.max(max,arr[i][j]);
    }
    arrOfMaxNums.push(max);
  }
  return arrOfMaxNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
