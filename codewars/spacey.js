function spacey(array) {
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i] = temp + array[i];
    temp = array[i];
  }
  return array;
}

console.log(spacey(['kevin', 'has', 'no', 'space']));
console.log(['kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);