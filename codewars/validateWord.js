function validateWord(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i].toLowerCase(), 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  let set = new Set(Array.from(map.values()));
  return set.size === 1;
}

console.log(validateWord("abcabc") === true);
console.log(validateWord("abc:abc") === false);