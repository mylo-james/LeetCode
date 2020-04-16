//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicates(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }
  console.log(nums);
  return nums.length;
}

//Here it go mad at me becuase I used slice and reassigned instead of splice
console.log(removeDuplicates([1]));
