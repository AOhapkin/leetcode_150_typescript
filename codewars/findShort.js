function findShort(s) {
  const words = s.split(' ');
  let shortestLen = words[0].length;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestLen)
      shortestLen = words[i].length;
  }
  return shortestLen;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps") === 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones") === 3);
console.log(findShort("Let's travel abroad shall we") === 2);