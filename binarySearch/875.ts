// had to check solution :(
// Time: O(n log M), where M is the max tree size
// Space: O(1)

function minEatingSpeed(piles: number[], h: number): number {
    let minRate = 1, maxRate = Math.max(...piles);

    while (minRate < maxRate) {
        const midRate = Math.floor((maxRate + minRate) / 2);
        let time = 0;

        for (let i = 0; i < piles.length; i++) {
            time += Math.ceil(piles[i] / midRate);
        }

        if (time <= h) {
            maxRate = midRate;
        } else {
            minRate = midRate + 1;
        }
    }

    return minRate;
};
