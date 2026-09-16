// Time Complexity: O(n log n)
// Space Complexity: O(1)

function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1];
    let count = 1;

    for (let i = 1; i < intervals.length; i++) {
        // if non-overlapping
        if (intervals[i][0] >= end) {
            end = intervals[i][1];
            count++;
        }
    }

    return intervals.length - count;
};
