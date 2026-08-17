class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const triplets = [];
        const target = 0;

        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length - 1; ++i) {
            
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            const num1 = nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            while(left < right) {

                const num2 = nums[left];
                const num3 = nums[right];
                const sum = num1 + num2 + num3;

                if(sum === target) {
                    triplets.push([num1, num2, num3]);
                    do { ++left } while(nums[left] === nums[left - 1]);
                    do { --right } while(nums[right] === nums[right + 1]);
                } else if(sum < target) {
                    do { ++left } while(nums[left] === nums[left - 1]);
                } else {
                    do { --right } while(nums[right] === nums[right + 1]);
                }

            }
        }

        return triplets;

    }
}
