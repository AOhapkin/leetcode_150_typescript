function solve(s) {
  const regExp = /[aeiou]+/g;
  let maxLen = 0;
  const matches = s.match(regExp).forEach(element => {
    if (element.length > maxLen) {
      maxLen = element.length;
    }
  });
  return maxLen;
}


console.log(solve("codewarriors") === 2);
console.log(solve("suoidea") === 3);
console.log(solve("ultrarevolutionariees") === 3);
console.log(solve("strengthlessnesses") === 1);
console.log(solve("cuboideonavicuare") === 2);
console.log(solve("chrononhotonthuooaos") === 5);
console.log(solve("iiihoovaeaaaoougjyaw") === 8);