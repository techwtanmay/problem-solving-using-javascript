/*
Problem - https://leetcode.com/problems/merge-intervals/description/
*/

function mergeForSort(leftArr, rightArr){
    const len_of_leftArr = leftArr.length, len_of_rightArr = rightArr.length;
    var leftIdx = rightIdx = 0;

    var mergedArr = [];
    
    while (leftIdx < len_of_leftArr && rightIdx < len_of_rightArr){
        if (leftArr[leftIdx][0] <= rightArr[rightIdx][0]){
            mergedArr.push(leftArr[leftIdx]);
            leftIdx = leftIdx + 1;
        }
        else{
            mergedArr.push(rightArr[rightIdx]);
            rightIdx = rightIdx + 1;
        }
    } 
    
    while (leftIdx < len_of_leftArr){
        mergedArr.push(leftArr[leftIdx]);
        leftIdx = leftIdx + 1;
    }

    while (rightIdx < len_of_rightArr){
        mergedArr.push(rightArr[rightIdx]);
        rightIdx = rightIdx + 1;
    }

    return mergedArr;
}

function mergeSort(arr){
    const len_of_arr = arr.length;
    if (len_of_arr <= 1) {
        return arr;
    }

    const mid_of_arr = Math.ceil(len_of_arr/2);

    const leftArr = mergeSort(arr.slice(0, mid_of_arr));
    const rightArr = mergeSort(arr.slice(mid_of_arr, len_of_arr));

    return mergeForSort(leftArr, rightArr);
}

var merge = function(intervals) {
    let sortedArr =  mergeSort(intervals);

    let resultArr = [];

    let len_of_sortedArr = sortedArr.length, iterIdx = 0, startIdx = sortedArr[0][0], endIdx = sortedArr[0][1];
    while (iterIdx < (len_of_sortedArr - 1)) {
        if ((endIdx < sortedArr[iterIdx+1][0])) {  
            resultArr.push([startIdx, endIdx]);
            startIdx = sortedArr[iterIdx+1][0];
            endIdx = sortedArr[iterIdx+1][1];
        }
        else if ((endIdx < sortedArr[iterIdx+1][1])) {
            endIdx = sortedArr[iterIdx+1][1];
        }
        iterIdx = iterIdx + 1;
    }
    resultArr.push([startIdx, endIdx]);
    return resultArr;
};

// let arra = [[2,60],[8,10],[1,3],[15,18]];

// console.log(merge(arra))
