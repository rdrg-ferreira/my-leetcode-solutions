// Intuition
// brute force way would be to go through every iteration, but that would be too slow (O(n^2))
// since we need to find a pair of numbers in the array, we can use 2 pointer technique


// Approach
// standard 2 pointer technique


// Complexity
// Time complexity:
// O(n)


// Space complexity:
// O(1)


// Code
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) return [left+1, right+1];
        else if (sum > target) right--;
        else left++;
    }

    return false;
};
