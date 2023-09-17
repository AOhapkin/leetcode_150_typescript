function checkLogs(log) {
  if (log.length === 0) {
    return 0;
  }

  let days = 1;
  let prev = log[0];

  for (let i = 1; i < log.length; i++) {
    const curr = log[i];
    if (prev >= curr) {
      days++;
    }
    prev = curr;
  }

  return days;
}

console.log(checkLogs(["12:12:12"]) === 1);
console.log(checkLogs([]) === 0);
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]) === 1);
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]) === 2);
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"]) === 3);
