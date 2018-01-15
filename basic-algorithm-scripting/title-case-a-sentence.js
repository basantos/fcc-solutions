// Modify the string so that the first letter in every word
// is uppercase and the rest is lower case

function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  words = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1,word.length);
  });
  return words.join(' ');
}

titleCase("I'm a little tea pot");
