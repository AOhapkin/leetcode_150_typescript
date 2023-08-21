function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  
  let missingnum = 0;

  for (let i = 0; i < nums.length; i++) {
      if (i !== nums[i]) {
          missingnum = i;
          break;
      } else if (i === nums.length - 1) {
          missingnum = i + 1;
      }
  }

  return missingnum;
;
};