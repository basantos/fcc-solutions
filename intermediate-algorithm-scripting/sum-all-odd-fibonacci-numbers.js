// Given a positive integer (num), return the sum of all odd Fibonacci numbers that are less than or equal to (num).
function sumFibs(num) {
  let prevFib = 1;
  let currFib = 1;
  let sum = prevFib + currFib;
  let temp = 0;
  while(currFib <= num){
    if(currFib%2 === 1 && currFib !== 1) sum += currFib;
    temp = prevFib;
    prevFib = currFib;
    currFib += temp;
  }
  return sum;
}
