// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.
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
