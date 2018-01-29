// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

//Version 2: map
// Date: 1/29/2018
function convertHTML(str) {
  let pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  let targets = Object.keys(pairs);
  return str.split('').map(item => {
    if(targets.includes(item)) return pairs[item];
    return item;
  }).join('');
}

// Version 1: for loop
// Date: 1/29/2018
function convertHTML(str) {
  let targets = /[&<>"']/;
  let pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  let arr = [];
  for(let i=0; i<str.length; i++){
    if(targets.test(str[i])){
      arr.push(pairs[ str[i] ]);
    } else arr.push(str[i]);
  }
  return arr.join('');
}
