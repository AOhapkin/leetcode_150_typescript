const LETTERS_NUMBER = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

function isPangram(string) {
  const booleanArray = new Array(26).fill(false);
  for (const char of string) {
    if (char >= 'a' && char <= 'z') {
      let index = char.charCodeAt(0) - 97;
      booleanArray[index] = true;
    } else if (char >= 'A' && char <= 'Z') {
      let index = char.charCodeAt(0) - 65;
      booleanArray[index] = true;
    }
  }
  let counter = 0;
  for (const isContainTheChar of booleanArray) {
    if (isContainTheChar) counter++;
  }
  console.log("counter " + counter);
  return counter === 26;
  // const chars = string.toLowerCase().split('').filter(item => (item >= 'a' && item <= 'z'));
  // const charsSet = new Set(chars);
  // return charsSet.size === LETTERS_NUMBER;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog.") === true);
console.log(isPangram("This is not a pangram.") === false);
