// Take each character, get its pair, and return the results as a 2d array.
function pairElement(str) {
  let pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };
  let arr = [];
  for(let i=0; i<str.length; i++){
    arr.push([ str[i], pairs[str[i]] ]);
  }
  return arr;
}

pairElement("GCG");
