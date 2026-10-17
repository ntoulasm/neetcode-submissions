class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length - 1;
        let maxIndex = end;

        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] > nums[maxIndex]) {
                maxIndex = mid;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        if(maxIndex === nums.length - 1) {
            return nums[0];
        } else {
            return nums[maxIndex + 1];
        }


    }
}
