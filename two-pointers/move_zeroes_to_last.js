/*
Problem - https://leetcode.com/problems/move-zeroes/
*/

/* Solution */
var moveZeroes = function(nums) {
    let array_length = nums.length;

    let index_to_fill = 0;
    for (let i = 0; i < array_length; i++) {
        if (nums[i] != 0) {
                nums[index_to_fill] = nums[i];
                index_to_fill = index_to_fill + 1
            }
    }
    nums.fill(0, index_to_fill)

};

/* Test Cases */
/*
let nums_1 = [0, 2, 0], nums_2 = [0], nums_3 = [1, 2, 3, 0];

console.log(nums_3);

moveZeroes(nums_3);

console.log(nums_3);
*/

