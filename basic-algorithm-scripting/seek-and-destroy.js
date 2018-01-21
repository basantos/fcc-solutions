// The function takes an array and additional arguments.
// Remove all elements in the array that are the same value as the arguments.
function destroyer(arr) {
  var args = arguments;
  return arr.filter(function(item){
    for(var i=0; i<args.length; i++){
      if(args[i] === item) return false; 
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
