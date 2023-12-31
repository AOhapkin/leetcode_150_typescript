function moveZeros(arr) {
  let pointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pointer] = arr[i];
      pointer++;
    }
  }

  while (pointer < arr.length) {
    arr[pointer++] = 0;
  }

  return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))