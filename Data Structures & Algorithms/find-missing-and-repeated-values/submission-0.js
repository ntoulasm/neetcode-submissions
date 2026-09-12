class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const seen = new Map();
        let duplicate = 0;
        let missing = 0;
        for(let i = 0; i < grid.length; ++i) {
            for(let j = 0; j < grid[i].length; ++j) {
                if(seen.has(grid[i][j])) {
                    duplicate = grid[i][j]
                }
                seen.set(grid[i][j], 1);
            }
        }
        for(let i = 1; i < grid.length * grid.length + 1; ++i) {
            if(!seen.has(i)) {
                missing = i;
            }
        }
        return [duplicate, missing];

    }
}
