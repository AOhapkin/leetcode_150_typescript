function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z]/g, '').toLowerCase();

  let result = true;
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }

  return result;
};

console.log(isPalindrome('A man, a plan, a canal: Panama') === true);
console.log(isPalindrome('race a car') === false);
console.log(isPalindrome(' ') === true);