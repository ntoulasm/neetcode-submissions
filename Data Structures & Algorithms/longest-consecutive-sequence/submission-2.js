class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        const numSet = new Set(nums);
        const isSequenceStart = num => !numSet.has(num - 1);
        const computeSequenceLengthFrom = num => {
            let sequenceLength = 1;
            while(numSet.has(num + sequenceLength)) ++sequenceLength;
            return sequenceLength;
        };
        
        return Array.from(numSet)
            .filter(isSequenceStart)
            .reduce((acc, num) => Math.max(acc, computeSequenceLengthFrom(num)), 0)
    }
}
