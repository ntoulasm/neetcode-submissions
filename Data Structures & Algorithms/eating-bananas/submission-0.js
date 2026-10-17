class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
        const minBPH = 1;
        const maxBPH = Math.max(...piles);

        let start = minBPH;
        let end = maxBPH;

        const howManyHours = (piles, k) => {
            return piles.reduce((acc, pile) => {
                return acc + Math.ceil(pile / k);
            }, 0);
        }

        let result = Infinity;

        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            const hours = howManyHours(piles, mid);
            if(h < hours) {
                start = mid + 1;
            } else {
                result = Math.min(result, mid);
                end = mid - 1;
            }
        }

        return result;

    }
}
