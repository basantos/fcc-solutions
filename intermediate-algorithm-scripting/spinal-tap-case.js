// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let separators = /[\s_]/g;
  let arr = str.split('');
  for(let i=1; i<arr.length; i++){
    if(/[a-z]/i.test(arr[i]) && arr[i] === arr[i].toUpperCase() && !separators.test(arr[i-1]) && arr[i-1] !== '-'){
      arr.splice(i,0,'-');
      i++;
    } else if(separators.test(arr[i])) arr[i] = '-'; 
  }
  return arr.join('').toLowerCase();
}
