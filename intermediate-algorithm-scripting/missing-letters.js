// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  for(let i=0; i<str.length; i++){
    if(str.charCodeAt(i) !== currCharCode) return String.fromCharCode(currCharCode);
    currCharCode++;
  }
  return undefined;
}
