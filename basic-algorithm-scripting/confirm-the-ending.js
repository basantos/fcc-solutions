// Check if the provided string ends with the provided target string
// Do not use endsWith()
function confirmEnding(str, target) {
  return str.includes(target, str.length-target.length);
}

confirmEnding("Bastian", "n");
