function isDivisible() {
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[0] % arguments[i] !== 0) return false
  }
  return true;
}

console.log(isDivisible(3, 3, 4) === false);
console.log(isDivisible(12, 3, 4) === true);
console.log(isDivisible(8, 3, 4, 2, 5) === false);