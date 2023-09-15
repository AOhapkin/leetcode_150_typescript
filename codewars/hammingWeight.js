function hammingWeight(x) {
  let count = 0;
  while (x !== 0) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}

console.log(hammingWeight(10) === 2)
console.log(hammingWeight(21) === 3)