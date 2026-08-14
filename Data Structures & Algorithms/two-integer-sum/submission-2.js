class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const numToIndexMap = new Map();
        
        for(let i = 0; i < nums.length; ++i) {
            const diff = target - nums[i];
            if(numToIndexMap.has(diff)) {
                const j = numToIndexMap.get(diff);
                return [j, i];
            } else {
                numToIndexMap.set(nums[i], i);
            }
        }

    }
}
