/* Return true if a given string is a palindrome and 
   false if it is not. Palindromes ignore punctuation, case, and
   spacing. */
   
function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return str === str.split('').reverse().join('');
}

palindrome("eye");
