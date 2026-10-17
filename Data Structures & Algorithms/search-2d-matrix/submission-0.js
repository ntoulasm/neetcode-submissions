class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        function searchRow(rows, start, end) {
            const mid = start + Math.floor((end - start) / 2);
            if(start > end) return - 1;
            if(target < rows[mid][0]) {
                return searchRow(rows, start, mid - 1);
            }
            if(target <= rows[mid][rows[mid].length - 1]) {
                return mid;
            }
            return searchRow(rows, mid + 1, end);

        }

        function searchCol(row, start, end) {
            const mid = start + Math.floor((end - start) / 2);
            if(start > end) return -1;
            if(target === row[mid]) { return mid; }
            if(target < row[mid]) {
                return searchCol(row, start, mid - 1);
            }
            return searchCol(row, mid + 1, end);
        }

        const row = searchRow(matrix, 0, matrix.length - 1);
        
        if(row === -1) return false;

        const col = searchCol(matrix[row], 0, matrix[row].length - 1);

        return col !== -1;

    }
}
