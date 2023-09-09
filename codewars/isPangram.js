const LETTERS_NUMBER = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

function isPangram(string) {
  const chars = string.toLowerCase().split('').filter(item => (item >= 'a' && item <= 'z'));
  const charsSet = new Set(chars);
  return charsSet.size === LETTERS_NUMBER;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog.") === true);
console.log(isPangram("This is not a pangram.") === false);
