// Intuition
// we have to iterate through the intervals and check where we can insert the new 1
// the we have to check for overlaps and merge if needed


// Approach
// loop throught the intervals; while the end time of the intervals are smaller
// we add them to the res. When we find the right place, insert and
// treat possible overlaps. Then add the rest
// unfortunately had to check solution :(


// Complexity
// Time complexity:
// O(n)


// Space complexity:
// O(n)


// Code
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const merged = [];
    let i = 0;
    const n = intervals.length;

    while (i < n && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    merged.push(newInterval);
    for (let j = i; j < n; j++) {
        merged.push(intervals[j]);
    }

    return merged;
};
