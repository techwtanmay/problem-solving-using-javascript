/*
Problem - https://leetcode.com/problems/3sum/description/
*/

var threeSum = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);

  let solutionSet = [];

  for (var i = 0; i < sortedNums.length - 1; i++) {
    while (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      i++;
    }

    let j = i + 1;
    let k = sortedNums.length - 1;

    while (j < k) {
      let triSum = sortedNums[i] + sortedNums[j] + sortedNums[k];

      if (triSum < 0) {
        j++;
      } else if (triSum > 0) {
        k--;
      } else if (triSum == 0) {
        solutionSet.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j++;
        while (sortedNums[j] === sortedNums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return solutionSet;
};

/*
Test Cases

nums_1 = [-1,0,1,2,-1,-4]

sorted_nums_1 = [-4, -1, -1, 0, 1, 2]

-4 -1 -1 0 1 2
-1 
-1 
0 
1 
2 

*/
