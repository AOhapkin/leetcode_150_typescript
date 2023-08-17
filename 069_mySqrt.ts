function mySqrt(x: number): number {
  let result: number = x;
  const accuracy: number = 0.0001;
  while (Math.abs(x - result * result) > accuracy) {
      result = 0.5 * (result + x / result);
  }

  return Math.floor(result);
};