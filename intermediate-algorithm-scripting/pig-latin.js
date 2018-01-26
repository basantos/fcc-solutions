// Translate the provided string to pig latin.

// Version 1: only works if provided string is one word
// Date: 1/25/2018
function translatePigLatin(str) {
  var vowels = /[aeiou]/;
  if(!vowels.test(str[0])){
    var firstVowelIndex = str.indexOf(vowels.exec(str));
    return str.slice(firstVowelIndex) + str.slice(0,firstVowelIndex) + 'ay';
  }
  return str + 'way';
}

translatePigLatin("consonant");
