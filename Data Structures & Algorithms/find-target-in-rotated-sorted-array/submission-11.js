class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        let start = 0;
        let end = nums.length - 1;

        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(target === nums[mid]) return mid;
            if(nums[start] <= nums[mid]) {
                if(nums[start] <= target && target < nums[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if(nums[mid] < target && target <= nums[end]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }

        return -1;

    }
}
