// complete the function
function solution(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (i !== 0 && string[i] >= 'A' && string[i] <= 'Z') {
      result += ' ';
    }
    result += string[i];
  }

  return result;
}

console.log(solution('camelCasing') === 'camel Casing');
console.log(solution('camelCasingTest') === 'camel Casing Test');
console.log(solution('') === '');
console.log(solution('identifier') === 'identifier');
