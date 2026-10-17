class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0;
        const stack = [];
        const leftBoundaries = [];
        const rightBoundaries = [];

        const top = stack => stack[stack.length - 1];
        const isEmpty = stack => stack.length === 0;

        for(let i = 0; i < heights.length; ++i) {
            while(!isEmpty(stack) && heights[top(stack)] >= heights[i]) {
                stack.pop();
            }
            leftBoundaries[i] = isEmpty(stack) ? 0 : top(stack) + 1;
            stack.push(i);
        }

        stack.length = 0;

        for(let i = heights.length - 1; i >= 0; --i) {
            while(!isEmpty(stack) && heights[top(stack)] >= heights[i]) {
                stack.pop();
            }
            rightBoundaries[i] = isEmpty(stack) ? heights.length - 1 : top(stack) - 1;
            stack.push(i);
        }

        for(let i = 0; i < heights.length; ++i) {
            const height = heights[i];
            const width = rightBoundaries[i] - leftBoundaries[i] + 1;
            maxArea = Math.max(maxArea, width * height);
        }

        return maxArea;

    }
}
