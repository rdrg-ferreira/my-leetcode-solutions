// Using Hello Interview structure instead of Leetcode's since the problem there is exclusive to Premium users
// Intuition
// Since we want to check if the intervals overlap, we should sort them by s1


// Approach
// Sort the intervals by start time. Then check if there is any metting that
// starts before the previous one ends. If so, they overlap


// Complexity
// Time complexity:
// O(n log n)


// Space complexity:
// O(n)


// Code
class Solution {
    canAttendMeetings(intervals) {
        if (intervals.length === 0) {
            return true;
        }
        
        intervals.sort((a, b) => a[0] - b[0]);

        for (let i = 1; i < intervals.length; i++) {
            // if the next metting starts before the previous one ends
            if (intervals[i][0] < intervals[i-1][1]) {
                return false;
            }
        }
        
        return true;
    }
}
