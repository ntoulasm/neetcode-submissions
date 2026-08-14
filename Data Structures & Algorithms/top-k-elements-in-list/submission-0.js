class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const frequencies = new Map();

        for(const num of nums) {
            const frequency = frequencies.get(num) ?? 0;
            frequencies.set(num, frequency + 1)
        }

        return Array.from(frequencies.entries()).
            sort((a, b) => b[1] - a[1]).
            slice(0, k).
            map(x => x[0]);

    }
}
