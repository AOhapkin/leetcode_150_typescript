function solution(pairs) {
  let result = '';

  for (const [key, value] of Object.entries(pairs)) {
    result += `${key} = ${value},`
  }

  if (result[result.length - 1] === ',') {
    result = result.slice(0, result.length - 1);
  }

  return result;
}

console.log(solution({ a: 1, b: '2' }) === "a = 1,b = 2")