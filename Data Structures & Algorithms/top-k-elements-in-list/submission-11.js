class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const numToFrequency = new Map();
        const frequencyToNums = new Array(nums.length + 1);

        for(const num of nums) {
            const frequency = numToFrequency.get(num) ?? 0;
            numToFrequency.set(num, frequency + 1)
        }

        for(const [num, frequency] of numToFrequency.entries()) {
            if(frequencyToNums[frequency] === undefined) {
                frequencyToNums[frequency] = [];
            }
            frequencyToNums[frequency].push(num)
        }

        return frequencyToNums.flatMap(nums => nums ?? []).slice(-k);
    }
}
