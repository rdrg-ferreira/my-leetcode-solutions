// Intuition
// kinda like 3 sum it feels like. We sort the array, fix a and the do the 2 pointer tech


// Approach
// if we sort the array we remove the amount of verifications we need to do
// then set the fixed value starting from the end of the array
// when we find a valid triplet, we can assume that all the numbers between left and right-1 as
// left would also form valid triplets, so we add the all in one go


// Complexity
// Time complexity:
// O(n^2), loop is O(n) and inside the loop is O(n)


// Space complexity:
// O(1)


// Code
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let total = 0;
    const sorted = nums.sort((a, b) => a - b);

    for (let i = sorted.length - 1; i > 1; i--) {
        let left = 0, right = i - 1;

        while (left < right) {
            if (sorted[left] + sorted[right] > sorted[i]) {
                total += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    return total;
};
