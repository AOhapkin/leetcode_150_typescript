function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let k: number = 1;

  for (let i: number = 1; i < nums.length; i++) {
      if (nums[k - 1] !== nums[i]) {
          nums[k] = nums[i];
          k++;
      }
  }
  return k;
};