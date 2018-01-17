// Repeat the given string the given number of times
// If the given number is negative, return an empty string

function repeatStringNumTimes(str, num) {
  return num < 0 ? '' : str.repeat(num);
}

repeatStringNumTimes("abc", 3);
