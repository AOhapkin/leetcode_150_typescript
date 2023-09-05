function isIsogram(str) {
  //...
  let result = true;
  const set = new Set(str.toLowerCase().split(''));

  for (const element of str) {
    if (!set.has(element.toLowerCase())) {
      return false;
    } else {
      set.delete(element.toLowerCase());
    }
  }

  return result;
}

console.log(isIsogram("Dermatoglyphics") === true);
console.log(isIsogram("isogram") === true);
console.log(isIsogram("aba") === false);
console.log(isIsogram("moOse") === false);
console.log(isIsogram("isIsogram") === false);
console.log(isIsogram("") === true);