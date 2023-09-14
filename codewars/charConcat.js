function charConcat(string) {
  let left = 0;
  let right = string.length - 1;
  let pairsCounter = 1;
  let result = '';

  while (left < right) {
    result += string[left] + string[right] + pairsCounter;
    left++;
    right--;
    pairsCounter++;
  }

  return result;
}

console.log(charConcat("abc def") === 'af1be2cd3');
console.log(charConcat("CodeWars") === 'Cs1or2da3eW4')