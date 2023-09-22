function unluckyDays(year) {
  //your code here
  let counter = 0;

  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    console.log(date)
    if (date.getDay() == 5) {
      counter++;
    }
  }

  return counter;
}

console.log(unluckyDays(2015) == 3)