function findTheOddInt(arr) {
  let result = 0;
  for (let value in arr) {
    console.log(value);
    result = result ^ value;
  }
  console.log(result);
  return result;
}

console.log(findTheOddInt([7]) === 7);
// console.log(findTheOddInt([0]) === 0);
// console.log(findTheOddInt([1, 1, 2]) === 2);
// console.log(findTheOddInt([0, 1, 0, 1, 0]) === 0);
// console.log(findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) === 4);
