// Intuition
// due to the fact that you cant skip cards and have to start from the beggining
// or the end of the array, sliding window tech seems like a good way to solve this


// Approach
// I wasn't understanding it at first and thought as long as you didnt jump values
// you could form any window within the array, not just ones attached to the ends
// we simply start a the back of the array and work our way to the beggining
// checking each time if the max as increased


// Complexity
// Time complexity:
// O(k)


// Space complexity:
// O(k)


// Code
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let start = -k; // end starts at idx 0, so the rest is at the back
    let sum = 0;
    for (let i = start; i < 0; i++) sum += cardPoints.at(i);
    let max = sum;

    for (let end = 0; end < k; end++) {
        sum += (cardPoints.at(end) - cardPoints.at(start));
        max = Math.max(max, sum);
        start++;
    }

    return max;
};
