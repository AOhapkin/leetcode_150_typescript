function squareDigits(num) {
  let digits = num.toString().split('').map(n => n * n).join('');
  return +digits;
}

console.log(squareDigits(3212) === 9414);
console.log(squareDigits(2112) === 4114);
console.log(squareDigits(0) === 0);
