// Time: O(log n)
// Space: O(1)

function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) left = mid + 1;
            else right = mid - 1;
        } else {
            if (target < nums[mid] || target > nums[right]) right = mid - 1;
            else left = mid + 1;
        }
    }

    return -1
}
