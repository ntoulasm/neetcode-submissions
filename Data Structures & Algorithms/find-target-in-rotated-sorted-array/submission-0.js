class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const minIndex = this.searchMin(nums);
        let start = 0;
        let end = nums.length - 1;
        if(target < nums[minIndex]) return -1;
        if(target === nums[minIndex]) return minIndex;
        if(target > nums[end]) {
            end = minIndex;
        } else {
            start = minIndex;
        }

        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(target === nums[mid]) return mid;
            if(target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        
        return -1;
    }

    searchMin(nums) {
        let start = 0;
        let end = nums.length - 1;
        
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] < nums[end]) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }

        return end;
    } 
}
