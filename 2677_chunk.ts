function chunk(arr: any[], size: number): any[][] {
  const newArr: any[][] = [];

  while (arr.length > 0) {
      newArr.push(arr.splice(0, size))
  }

  return newArr;
};
