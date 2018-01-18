// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var chunkedArr = [];
  var segment = [];
  
  for(var i=0; i<arr.length; i++){
    
    if(i%size===0){
      segment = [arr[i]];
    } else {
      segment.push(arr[i]);
    }
    
    // Add segment to array when segment size reached
    // or when last item in array is reached
    if(i%size===size-1 || i===arr.length-1){
      chunkedArr.push(segment);
    }
  }
  return chunkedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
