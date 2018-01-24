/* Make a function that looks through an array of objects (first argument) 
   and returns an array of all objects that have matching property and value pairs (second argument). 
   Each property and value pair of the source object has to be present in the object from the collection 
   if it is to be included in the returned array. */

// Version 2: filter
// Date: 1/24/2018
function whatIsInAName(collection, source) {
  var keys = Object.keys(source);
  return collection.filter((item) => {
    for(var i=0; i<keys.length; i++){
      if(item[keys[i]] === source[keys[i]]) continue;
      else return false;
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Version 1: for loops
// Date: 1/24/2018
function whatIsInAName(collection, source) {
  var keys = Object.keys(source);
  var collectionHasSourceProperties = false;
  var result = [];
  for(var i=0; i<collection.length; i++){
    for(var j=0; j<keys.length; j++){
      if(collection[i][keys[j]] === source[keys[j]]) collectionHasSourceProperties = true;
      else {
        collectionHasSourceProperties = false;
        break;
      }
    }
    if(collectionHasSourceProperties){
      result.push(collection[i]);
    }
  }
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
