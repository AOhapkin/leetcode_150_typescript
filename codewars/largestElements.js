function largest(n, array) {
  // Find the n highest elements in a list
  return array.sort((a, b) => a - b).slice(array.length - n);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))