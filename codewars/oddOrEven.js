function oddOrEven(array) {
  //enter code here
  let sum = array.reduce((a, b) => a + b, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0, 1, 5]) === 'even');
console.log(oddOrEven([1]) === 'odd');