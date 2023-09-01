function sortBy(arr: any[], fn: Function): any[] {
  return arr.sort((a: any, b: any) => fn(a) - fn(b));
};