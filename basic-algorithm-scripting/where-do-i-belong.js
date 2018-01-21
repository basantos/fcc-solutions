// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has been sorted.
function getIndexToIns(arr, num) {
  var index =  arr.sort(function(a,b){ return a-b; })
    .findIndex(function(item){ return item >= num; });
  
  if(index === -1) return arr.length;
  return index;
}

getIndexToIns([40, 60], 50);
