function add(a, b) {
  // return (Number(a) + Number(b)).toString(); // Fix me!
  let result = [];
  const aArr = a.split('');
  const bArr = b.split('');

  let i = aArr.length - 1;
  let j = bArr.length - 1;

  let temp = 0;

  while (i >= 0 || j >= 0) {
    let sum = +((i >= 0) ? aArr[i] : 0)
      + +((j >= 0) ? bArr[j] : 0) + temp;
    temp = 0;
    if (sum >= 10) {
      temp = 1;
      sum -= 10;
    }
    result.push(sum);
    i--;
    j--;
  }

  if (temp) {
    result.push(temp);
  }

  console.log(result)

  return result.reverse().join('');
}

console.log(add("1372", "69") === "1441")