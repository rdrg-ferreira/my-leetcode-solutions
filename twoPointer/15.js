// Intuition
// brute force would be 3 fors to check all iterations but too slow - O(n^3)
// another way would be to use 1 for that iterates through i
// and inside it we would do the 2 pointer technique with j and k, which would be O(n^2)
// I will try that one first

// Approach
// sort the array in order to be able to 2 pointer tech
// in a for loop that iterates i, do the usual 2 pointer technique, using target as -nums[i]
// this works since if nums[j] + nums[k] equals target, that means their sum equals 0
// we skip duplicate i values and duplicate j and k values when we find a triplet to reduce the amount of iterations


// Complexity
// Time complexity:
// O(n^2) since we use a for loop to go through every element, and the while loop inside it
// will iterate a max of n times as well


// Space complexity:
// O(1)


// Code
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue; // skip duplicate i values
        const target = -nums[i];
        let j = i + 1, k = nums.length - 1;

        while (j < k) {
            const partialSum = nums[j] + nums[k];
            if (partialSum === target) {
                res.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++; k--;
            } else if (partialSum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    
    return res;
};
