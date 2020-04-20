function twoSum(nums, target) {
  let set = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in set) {
      return [set[target - nums[i]], i];
    }
    set[nums[i]] = i;
  }
}
