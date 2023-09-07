function inArray(array1, array2) {
  //...
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].indexOf(array1[i]) !== -1) {
        result.push(array1[i]);
        break;
      }
    }
  }
  return result.sort();
}

a1 = ["xyz", "live", "strong"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2)); //["live", "strong"]

a3 = ["tarp", "mice", "bull"];
a4 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a3, a4)); //[]