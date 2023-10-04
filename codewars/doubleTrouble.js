function trouble(x, t) {
  let resultArr = [x[0]];

  for (let i = 1; i < x.length; i++) {
    if (x[i - 1] + x[i] !== t) {
      resultArr.push(x[i]);
    }
  }

  return resultArr;
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7) === [1, 3, 5, 6, 7, 4]);
console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7));