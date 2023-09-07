function findUniq(arr) {
  const map = new Map();
  let uniq = null;

  for (const element of arr) {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }

  map.forEach((key, value) => {
    if (key === 1) {
      uniq = value;
    }
  });

  return uniq;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]) === 2);
console.log(findUniq([0, 0, 0.55, 0, 0]) === 0.55);