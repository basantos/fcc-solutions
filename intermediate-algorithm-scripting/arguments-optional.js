// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
  let args = [];
  for(let i=0; i<arguments.length; i++){
    if(typeof arguments[i] !== 'number'){ return undefined; }
    args.push(arguments[i]);
  }
  
  if(args.length === 2){ return args[0] + args[1]; }
  else if(args.length === 1){ 
    return (b) => {
      if(typeof b === 'number'){ return args[0] + b; }
      return undefined;
    };
  }
  return undefined;
}
