// Return true if the string in the first element of the array 
// contains all of the letters of the string in the second element of the array, ignoring case.

function mutation(arr) {
  var firstStr = arr[0].toLowerCase(); 
  var secondStr = arr[1].toLowerCase();
  
  for(var i=0; i<secondStr.length; i++){
    if(!firstStr.includes(secondStr[i])){
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "hey"]);
