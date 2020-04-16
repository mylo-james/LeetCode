function rotateArr(nums, k) {
  k = k % nums.length;
  let removeIdx = nums.length - k;
  let removed = nums.splice(removeIdx, k);
  nums.splice(0, 0, ...removed);
  return nums;
}

console.log(rotateArr([-1, 100, 3, 99], 1));
