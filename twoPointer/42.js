// Intuition
// what determines if you can have water (and how much) in a square is if there is 
// space between 2 walls and the height of the smallest wall


// Approach
// Had to check the solution :(
// we start 2 pointers at each end of the array and track which side is smaller
// we move the pointer of that side inward by 1 and check the difference in heights
// if diff > 0, there is space for water; add it to total
// else we update the max value of that side to the height of the side's pointer


// Complexity
// Time complexity:
// O(n)


// Space complexity:
// O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1, total = 0;
    let leftMax = height[left], rightMax = height[right];

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            const diff = leftMax - height[left];

            if (diff > 0) total += diff;
            else leftMax = height[left];
        } else {
            right--;
            const diff = rightMax - height[right];

            if (diff > 0) total += diff;
            else rightMax = height[right];
        }
    }

    return total;
};
