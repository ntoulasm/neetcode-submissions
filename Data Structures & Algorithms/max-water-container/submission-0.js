class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right) {

            const height1 = heights[left];
            const height2 = heights[right];
            const width = right - left;
            const area = width * Math.min(height1, height2);
            
            maxArea = Math.max(maxArea, area);
            
            if(height1 < height2) {
                ++left;
            } else {
                --right;
            }

        }

        return maxArea;

    }
}
