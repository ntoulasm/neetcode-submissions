class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length - 1;
        let minIndex = start;

        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] < nums[minIndex]) {
                minIndex = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return nums[minIndex];

    }
}
