// function findOdd(arr) {
//   let result = 0;
//   arr.forEach(element => { result ^= element; });
//   return result;
// }

function findOdd(arr) {
  let result = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  console.log(map)

  map.forEach((key, value) => {
    if (key % 2 !== 0) {
      result = value;
    };
  });
  console.log(result)
  return result;
}

console.log(findOdd([7]) === 7);
console.log(findOdd([0]) === 0);
console.log(findOdd([1, 1, 2]) === 2);
console.log(findOdd([0, 1, 0, 1, 0]) === 0);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) === 4);
