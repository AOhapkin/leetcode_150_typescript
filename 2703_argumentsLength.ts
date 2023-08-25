function argumentsLength(...args: any[]): number {
  let num: number = 0;
  for (let arg in args) {
      if (arg) {
          num++
      }
  }
  return num;
};

/**
* argumentsLength(1, 2, 3); // 3
*/