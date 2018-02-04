// Drop the elements of an array (first argument), starting from the front, 
// until the predicate (second argument) returns true.
function dropElements(arr, func) {
  for(let i=0; i<arr.length; i++){
    if(func(arr[i])) return arr.slice(i);
  }
  return [];
}
