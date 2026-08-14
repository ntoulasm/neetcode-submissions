class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const frequencies = new Map();
        const frequencyBuckets = new Array(nums.length + 1);

        for(const num of nums) {
            const frequency = frequencies.get(num) ?? 0;
            frequencies.set(num, frequency + 1)
        }

        for(const [num, frequency] of frequencies.entries()) {
            if(frequencyBuckets[frequency] === undefined) {
                frequencyBuckets[frequency] = [];
            }
            frequencyBuckets[frequency].push(num)
        }

        return frequencyBuckets.flatMap(b => b ?? []).slice(-k);
    }
}
