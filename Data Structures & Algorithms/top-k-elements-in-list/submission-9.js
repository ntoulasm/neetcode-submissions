class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const topK = [];
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

        let i = frequencyBuckets.length - 1;
        let remaining = k;

        while(i >= 0 && remaining > 0) {
            const frequencyNums = frequencyBuckets[i];
            if(!!frequencyNums) {
                topK.push(...frequencyNums.slice(0, remaining));
                remaining -= frequencyNums.length;
            }
            --i;
        }

        return topK;
    }
}
