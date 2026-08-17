class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0;
        let right = numbers.length - 1;

        while(left < right) {
            const num1 = numbers[left];
            const num2 = numbers[right];
            const sum = num1 + num2;
            if(sum === target) return [left + 1, right + 1];
            if(sum < target) {
                do { ++left } while (numbers[left] === numbers[left - 1])
            } else {
                do { --right } while (numbers[right] === numbers[right + 1])
            }
        }

    }
}
