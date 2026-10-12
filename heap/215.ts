// MinHeap from datastructures-js lib

function findKthLargest(nums: number[], k: number): number {
    const heap: MinHeap<number> = new MinHeap();

    for (let i = 0; i < k; i++) {
        heap.push(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap.root()) {
            heap.pop();
            heap.push(nums[i]);
        }
    }

    return heap.root();
};
