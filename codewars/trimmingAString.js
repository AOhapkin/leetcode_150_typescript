function trim(str, size) {
  if (str.length > size && str.length <= 3) {
    str = str.slice(0, size).trim() + '...';
  } else if (str.length > size) {
    str = str.slice(0, size - 3).trim() + '...';
  }
  return str;
}

console.log(trim("Creating kata is fun", 14) === "Creating ka...");
console.log(trim("He", 1) === "H...");
console.log(trim("Code Wars is pretty rad", 50) === "Code Wars is pretty rad");