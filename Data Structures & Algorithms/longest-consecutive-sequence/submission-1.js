class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let maxSequence = 0;
        const numSet = new Set(nums);
        const sequenceStarts = nums.filter(num => !numSet.has(num - 1));

        for(const num of sequenceStarts) {
            let sequence = 1;
            let current = num + 1;
            while(numSet.has(current)) {
                ++sequence;
                ++current;
            }
            maxSequence = Math.max(maxSequence, sequence);
        }

        return maxSequence;
    }
}
