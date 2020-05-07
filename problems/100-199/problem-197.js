/**
 * Company: Amazon.
 *
 * Given an array and a number k that's smaller than the length of the array, rotate
 * the array to the right k elements in-place.
 *
 * Leetcode: https://leetcode.com/problems/rotate-array/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length === k) return nums;
  rotate2(nums, k);
};

const rotateHelper = function(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

const rotate2 = function(nums, k) {
  k %= nums.length;
  rotateHelper(nums, 0, nums.length - 1);
  rotateHelper(nums, 0, k - 1);
  rotateHelper(nums, k, nums.length - 1);
};

const rotate1 = function(nums, k) {
  for (let i = 0; i < k; i++) {
    let j = nums.length - 1;
    const last = nums[j];

    while (j > 0) {
      nums[j] = nums[j - 1];
      j--;
    }

    nums[0] = last;
  }
};
