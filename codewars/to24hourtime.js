function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  if (hour === 12 && period === 'am') {
    hour = 0;
  } else if (hour < 12 && period === 'pm') {
    hour += 12;
  }

  if (hour < 10) {
    hour = '0' + hour;
  } else {
    hour = '' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  } else {
    minute = '' + minute;
  }

  return hour + minute
}

console.log(to24hourtime(1, 0, 'am'));