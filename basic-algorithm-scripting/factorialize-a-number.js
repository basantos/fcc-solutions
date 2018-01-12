// Return the factorial of the provided integer

// Solution v2: recursion
// Date: 1/12/2018
function factorialize(num) {
  if(num === 0){
    return 1;
  } 
  else {
    return num * factorialize(num-1);
  }
}

factorialize(5);


// Solution v1: while loop
// Date: 1/12/2018
function factorialize(num) {
  if(num === 0){
    return 1;
  } 
  else {
    var product = num;
    
    while (num !== 1){
      num -= 1;
      product *= num;
    }
  return product;
  }
}

factorialize(5);
