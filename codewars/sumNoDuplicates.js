function sumNoDuplicates(numList) {
  let sum = 0;
  const map = new Map();

  for (let i = 0; i < numList.length; i++) {
    if (!map.has(numList[i])) {
      map.set(numList[i], 1);
    } else {
      map.set(numList[i], 2)
    }
  }

  map.forEach((value, key) => {
    if (value === 1) {
      sum += key;
    }
  });

  return sum;
}

console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]) === 21)