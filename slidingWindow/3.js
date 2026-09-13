// Intuition
// we have to find the the longest substring in an array that meets the given
// conditions. We can use a variable-length sliding window.


// Approach
// we iterate through the string, adding each character to the window and updating
// max when needed. When we add a character that was already in the window
// we remove characters from the start of the window until it becomes valid again


// Complexity
// Time complexity:
// O(n)


// Space complexity:
// O(min(n, max))


// Code
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const reps = new Map();
    let start = 0;
    let max = 0;

    for (let end = 0; end < s.length; end++) {
        reps.set(s[end], (reps.get(s[end]) ?? 0) + 1);

        while (reps.get(s[end]) > 1) {
            reps.set(s[start], reps.get(s[start]) - 1);
            if (reps.get(s[start]) === 0) reps.delete(s[start]);
            start++;
        }

        max = Math.max(max, reps.size);
    }

    return max;
};
