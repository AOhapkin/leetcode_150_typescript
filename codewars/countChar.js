function count(string) {
  // TODO
  const chars = new Map();

  for (let i = 0; i < string.length; i++) {
    if (!chars.has(string[i])) {
      chars.set(string[i], 1);
    } else {
      chars.set(string[i], chars.get(string[i]) + 1);
    }
  }

  const resultObj = {};

  for (const [key, val] of chars) {
    resultObj[key] = val;
  }

  return resultObj;
}

console.log(count('aba'));
console.log(count('abCCcca'));
console.log(count('eeeeebbb'));
console.log(count(''));