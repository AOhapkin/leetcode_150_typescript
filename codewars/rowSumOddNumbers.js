function rowSumOddNumbers(n) {
  // TODO
  const firstInRow = (n - 1) * n + 1;
  let rowSum = 0;

  for (let i = 0; i < n; i++) {
    rowSum += firstInRow + (2 * i);
  }

  return rowSum;
}