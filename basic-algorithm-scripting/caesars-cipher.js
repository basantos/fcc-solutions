// Perform a caesar cipher on the given string
function rot13(str) {
  return str.split('')
    .map(function(char){
      if(char.match(/[^A-Z]/i)) return char;
      var code = char.charCodeAt(0);
      return code <= 77 ? String.fromCharCode(code+13) 
                        : String.fromCharCode(code-13);
    })
    .join('');
}

rot13("SERR PBQR PNZC");
