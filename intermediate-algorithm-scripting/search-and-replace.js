/* Search for a word(before) in the provided string(str) and replace it with (after).
   Preserve casing of the original word after replacing it.
   ex: if (before) is 'Dog' and (after) is 'cat,' replace 'Dog' with 'Cat.'*/
function myReplace(str, before, after) {
  if(before[0].match(/[A-Z]/)) return str.replace(before, after[0].toUpperCase() + after.slice(1));
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
