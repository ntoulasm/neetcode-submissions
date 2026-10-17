class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let row = -1;
        let col = -1;
        let start = 0;
        let end = matrix.length - 1;

        while (row === -1 && start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(target < matrix[mid][0]) {
                end = mid - 1;
            } else if(target > matrix[mid][matrix[mid].length - 1]) {
                start = mid + 1;
            } else {
                row = mid;
            }
        }

        if(row === -1) return false;

        start = 0;
        end = matrix[row].length - 1;

        while(col === -1 && (start <= end)) {
            const mid = start + Math.floor((end - start) / 2);
            if(target < matrix[row][mid]) {
                end = mid - 1;
            } else if(target > matrix[row][mid]) {
                start = mid + 1;
            } else {
                col = mid;
            }
        }
        
        return col !== -1;

    }
}
