function moveZeroes(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
      i = i - 1;
    }
  }

  nums.splice(nums.length, 0, ...new Array(count).fill(0));
}

let arr = [0, 0, 1];
moveZeroes(arr);

console.log(arr);
