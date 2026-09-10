/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, left = 0, right = height.length - 1;

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        if (area > max) max = area;

        if (height[left] < height[right]) left++;
        else right--;
    }

    return max;
};
