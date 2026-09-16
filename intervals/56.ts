// Time: O(n log n)
// Space: O(n)

function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res.at(-1)[1]) {
            res.at(-1)[1] = Math.max(intervals[i][1], res.at(-1)[1]);
        } else res.push(intervals[i]);
    }

    return res;
};
