function getWordScore(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += (word.charCodeAt(i) - 96);
  }
  console.log(score);
  return score;
}

function high(x) {
  let result = '';
  let score = 0;
  const arr = x.split(' ').forEach(element => {
    if (score < getWordScore(element)) {
      result = element;
      score = getWordScore(element);
    }
  });
  return result;
}

// console.log(high('man i need a taxi up to ubud') === 'taxi');
// console.log(high('take me to semynak') === 'semynak');
// console.log(high('aa b') === 'aa');
console.log(high('b aa') === 'b');