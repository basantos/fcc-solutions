// Return an English translated sentence of the passed binary string.

// Version 2: map
// Date: 2/10/2018
function binaryAgent(str) {
  let values = [128,64,32,16,8,4,2,1];
  
  return str.split(' ').map(binary => {
    let sum = 0;
    for(let i=0; i<binary.length; i++){
      if(binary[i] === '1'){ sum += values[i]; }
    }
    return String.fromCharCode(sum);
  }).join('');
}

// Version 1: nested for loops
// Date: 2/10/2018
function binaryAgent(str) {
  let arr = str.split(' ');
  let values = [128,64,32,16,8,4,2,1];
  
  for(let i=0; i<arr.length; i++){
    let sum = 0;
    
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] === '1'){ sum += values[j]; }
    }
    
    arr[i] = String.fromCharCode(sum);
  }
  return arr.join('');
}
