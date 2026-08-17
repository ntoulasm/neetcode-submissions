class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let suffix = 1;
        const output = [ 1 ];

        for(let i = 1; i < nums.length; ++i) {
            output[i] = output[i - 1] * nums[i - 1];
        }

        for(let i = nums.length - 2; i >= 0; --i) {
            suffix *= nums[i + 1];
            output[i] *= suffix;
        }

        return output;
    }
}
