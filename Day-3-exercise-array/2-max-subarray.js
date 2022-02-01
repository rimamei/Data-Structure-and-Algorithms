/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    num = Math.max(num, nums[i]);
  }
  return num;
};

console.log(maxSubArray([-1, -2, 10, 5, 10, -4, 5]))
