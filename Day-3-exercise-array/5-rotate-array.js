/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  if (k === nums.length) {
    return;
  } else if (k > nums.length) {
    k = k % nums.length;
  }

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4], 0));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate2 = function(nums, k) {
    k = k % nums.length;
      
      reverse(nums, 0, nums.length - 1)
      reverse(nums, 0, k - 1)
      reverse(nums, k, nums.length - 1)
  };
  
  var reverse = function(nums, start, end) {
      while (start < end) {
          let temp = nums[start]
          nums[start] = nums[end]
          nums[end] = temp;
          start++;
          end--;
      }
  }