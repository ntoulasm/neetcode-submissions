class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        const nextProduct = [ ]
        const previousProduct = [ ];

        nextProduct[nums.length - 1] = 1;
        previousProduct[0] = 1;

        for(let i = 1; i < nums.length; ++i) {
            previousProduct[i] = previousProduct[i - 1] * nums[i - 1];
        }

        for(let i = nums.length - 2; i >= 0; --i) {
            nextProduct[i] = nextProduct[i + 1] * nums[i + 1];
        }

        for(let i = 0; i < nums.length; ++i) {
            output[i] = previousProduct[i] * nextProduct[i];
        }

        return output;
    }
}
