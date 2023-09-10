snail = function (array) {
  let newArr = [];
  let i = 0, j = 0;
  let left = 0;
  let right = array[0].length - 1;
  let top = 0;
  let bottom = array.length - 1;
  while (left <= right && top <= bottom) {
    i = left;
    while (i <= right) {
      newArr.push(array[top][i]);
      i++;
    }
    top++;
    j = top;
    while (j <= bottom) {
      newArr.push(array[j][right]);
      j++;
    }
    right--;
    i = right;
    while (i >= left) {
      newArr.push(array[bottom][i]);
      i--;
    }
    bottom--;
    j = bottom;
    while (j >= top) {
      newArr.push(array[j][left]);
      j--;
    }
    left++;
  }
  return newArr;
}

let array = [[1, 2, 3],
[8, 9, 4],
[7, 6, 5]];
console.log(snail(array));