function digitalRoot(n) {
  // ...
  let result = 0;
  let arr = n.toString().split('');

  while (arr.length > 1) {
    result = arr.reduce((accum, current) => accum + +current, 0);
    arr = result.toString().split('');
  }

  return result;
}

digitalRoot(456);

console.log(digitalRoot(16) === 7);
console.log(digitalRoot(456) === 6);
