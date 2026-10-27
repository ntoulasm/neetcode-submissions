class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let slowIndex = 0;
        let fastIndex = 0;
        
        while(true) {
            slowIndex = nums[slowIndex];
            fastIndex = nums[nums[fastIndex]];
            if(slowIndex === fastIndex) break; 
        }

        slowIndex = 0;

        while(slowIndex !== fastIndex) {
            slowIndex = nums[slowIndex];
            fastIndex = nums[fastIndex];
        }

        return slowIndex;

    }
}
