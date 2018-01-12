// Return the factorial of the provided integer
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
