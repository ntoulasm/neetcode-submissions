class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let area = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;

        while(left <= right) {

            const leftHeight = height[left];
            const rightHeight = height[right];

            if(leftMax < rightMax) {
                leftMax = Math.max(leftMax, leftHeight);
                area += leftMax - height[left];
                ++left;
            } else {
                rightMax = Math.max(rightMax, rightHeight);
                area += rightMax - height[right];
                --right;
            }

        }

        return area;

    }
}
