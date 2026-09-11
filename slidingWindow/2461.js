// Intuition
// use the sliding window tech; but need to store number of times each num appears
// using like a map


// Approach
// sliding window tech but use a map to keep track of duplicates
// remove the key if the count is 0 so that we can use the size of the map
// to determine if the window has duplicates or not. If size === k, its valid
// if not, one of the entries has a duplicate on the window

// Complexity
// Time complexity:
// O(n)

// Space complexity:
// O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let start = 0;
    const win = new Map();
    let sum = 0;
    for (let i = 0; i < k; i++) {
        win.set(nums[i], (win.get(nums[i]) || 0) + 1);
        sum += nums[i];
    }
    let max = win.size === k ? sum : 0;
    

    for (let end = k; end < nums.length; end++) {
        sum += nums[end] - nums[start];
        win.set(nums[end], (win.get(nums[end]) || 0) + 1);
        win.set(nums[start], win.get(nums[start]) - 1);
        if (win.get(nums[start]) === 0) win.delete(nums[start]);

        if (win.size === k) max = Math.max(sum, max);
        start++;
    }

    return max;
};
