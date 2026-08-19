class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let area = 0;
        let left = 0;
        let right = left + 1;
        let currentArea = 0;

        const suffix = [];
        let max = 0;

        for(let i = height.length - 1; i >= 0; --i) {
            suffix[i] = max;
            max = Math.max(max, height[i]);
        }

        while(left < right && right < height.length) {

            const leftHeight = height[left];
            const rightHeight = height[right];
            const wallHeight = Math.min(leftHeight, suffix[left]);

            if(wallHeight <= rightHeight) {
                area += currentArea;
                currentArea = 0;
                left = right;
                right = left + 1;
            } else {
                currentArea += wallHeight - rightHeight;
                ++right;
            }

        }

        return area;

    }
}
