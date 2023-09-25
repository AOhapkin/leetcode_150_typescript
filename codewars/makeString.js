function makeString(s) {
  // ...
  return s.split(' ').map(w => w[0]).join('');
}

console.log(makeString("sees eyes xray yoat") === "sexy");