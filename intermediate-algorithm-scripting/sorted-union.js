// Write a function that takes two or more arrays and returns a new array 
// of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  for(let i=0; i<arguments.length; i++){
    arr = arr.concat(arguments[i]);
  }
  return arr.reduce((array,curr) => {
    if(!array.includes(curr)) array.push(curr);
    return array;
  }, []);
}
