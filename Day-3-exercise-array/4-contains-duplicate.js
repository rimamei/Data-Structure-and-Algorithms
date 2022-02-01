/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums = nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

var containsDuplicate2 = function (nums) {
  let numbers = new Set();

  for (let num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }
  return false;
};


console.log(containsDuplicate([1, 4, 6, 9, 1, 2, 4]));
