// Remove all falsy values from an array.
function bouncer(arr) {
  return arr.filter(function(item){
    return item;
  });
}

bouncer([7, "ate", "", false, 9]);
