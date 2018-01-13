function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = str[0];
  
  for(var i = 1; i < words.length; i++){
    if (longestWord.length < words[i].length) { longestWord = words[i]; }
  }
  
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
