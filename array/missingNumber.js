// Missing number

// https://leetcode.com/problems/missing-number/
// easy
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array

// O(n)
function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// The sum of the first n terms of an arithmetic progression:
// S = ((a1 + an) * n) / 2
// S = (n * (n + 1)) / 2

console.log(missingNumber([3, 0, 1])); //2

// O(n)
function missingNumber2(nums) {
  let missing = nums.length;

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
}

console.log(missingNumber2([3, 0, 1])); //2
