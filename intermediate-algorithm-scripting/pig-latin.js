// Translate the provided string to pig latin.

// Version 2: works on sentences
// Date: 1/26/2018
function translatePigLatin(str) {
  var vowels = /[aeiouy]/i;
  var separators = /[^A-Z']/i;
  var firstIsCapital = null;
  var separator = null;
  var separatorPresent = null;
  var apostropheInFront = null;
  var firstVowelIndex = null;
  var words = str.split(' ');
  var translatedWord = '';
  var translation = [];
  
  for(var i=0; i<words.length; i++){
    if(separators.test(words[i])){
      separator = words[i][words[i].length-1];
      words[i] = words[i].slice(0,words[i].length-1);
      separatorPresent = true;
    } else separatorPresent = false;
    
    if(words[i][0] === "'"){
      words[i] = words[i].slice(1);
      apostropheInFront = true;
    } else apostropheInFront = false;
    
    if(/[A-Z]/.test(words[i][0])) firstIsCapital = true;
    else firstIsCapital = false;
    
    if(/[y]/i.test(words[i][0])){
      firstVowelIndex = words[i].indexOf(vowels.exec(words[i].slice(1)));
      translatedWord = words[i].slice(firstVowelIndex) + words[i][0].toLowerCase() + words[i].slice(1,firstVowelIndex) + 'ay';
    } else if(/[qu]/i.test(words[i].slice(0,2))){
      firstVowelIndex = words[i].indexOf(vowels.exec(words[i].slice(2)));
      translatedWord = words[i].slice(firstVowelIndex) + words[i][0].toLowerCase() + words[i].slice(1,firstVowelIndex) + 'ay';
    } else if(!vowels.test(words[i][0])){
      firstVowelIndex = words[i].indexOf(vowels.exec(words[i]));
      translatedWord = words[i].slice(firstVowelIndex) + words[i][0].toLowerCase() + words[i].slice(1,firstVowelIndex) + 'ay';
    } else translatedWord = words[i] + 'way';
    
    if(apostropheInFront) translatedWord = "'" + translatedWord;
    if(separatorPresent) translatedWord = translatedWord + separator;
    if(firstIsCapital) translatedWord = translatedWord[0].toUpperCase() + translatedWord.slice(1);
    
    translation.push(translatedWord);
  }
  return translation.join(' ');
}

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
