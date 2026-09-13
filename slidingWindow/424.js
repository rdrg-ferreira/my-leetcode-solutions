// Intuition
// my first idea would be to store how many times each char as appeared
// and everytime we find a different char from the one at start
// we would still count it as long as we dont go over k counts like this
// if so, we would advance start to the next letter


// Approach
// had to check solution :(
// we loop through the array and count how many times each char as appeared
// we also store the maximum amount of times any char as appeared in the window
// then, when the current size of the window - max times any char as appeared
// is larger than k, that means that we have used more than k operations
// on that window, meaning its not valid, so we shrink it by incrementing start


// Complexity
// Time complexity:
// O(n)


// Space complexity:
// O(1)


// Code
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const frequency = {};
    let start = 0, max = 0, maxFreq = 0;

    for (let end = 0; end < s.length; end++) {
        frequency[s[end]] = (frequency[s[end]] ?? 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[s[end]]);

        if ((end - start + 1) - maxFreq > k) {
            frequency[s[start]]--;
            start++;
        }

        max = Math.max(max, end - start + 1);
    }

    return max;
};
