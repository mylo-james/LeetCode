function bitManipulation(nums) {
  return nums.reduce((accum, num) => accum ^ num, 0);
}

console.log(bitManipulation([1, 5, 4, 1, 5]));
