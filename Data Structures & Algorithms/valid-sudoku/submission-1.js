class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const BOX_SIZE = 3;
        const TOTAL_ROWS = 9;
        const TOTAL_COLUMNS = 9;
        const seen = new Set();
        
        for(let i = 0; i < TOTAL_ROWS; ++i) {
            for(let j = 0; j < TOTAL_COLUMNS; ++j) {
                const c = board[i][j];
                if(c === '.') continue;
                if(seen.has(c)) return false;
                seen.add(c)
            }
            seen.clear();
        }

        for(let j = 0; j < TOTAL_COLUMNS; ++j) {
            for(let i = 0; i < TOTAL_ROWS; ++i) {
                const c = board[i][j];
                if(c === '.') continue;
                if(seen.has(c)) return false;
                seen.add(c);
            }
            seen.clear();
        }

        for(let boxRow = 0; boxRow < TOTAL_ROWS / BOX_SIZE; ++boxRow) {
            for(let boxColumn = 0; boxColumn < TOTAL_COLUMNS / BOX_SIZE; ++boxColumn) {
                for(let i = 0; i < 3; ++i) {
                    for(let j = 0; j < 3; ++j) {
                        const c = board[boxColumn * 3 + i][boxRow * 3 + j];
                        if(c === '.') continue;
                        if(seen.has(c)) return false;
                        seen.add(c);
                    }
                }
                seen.clear();
            }
        }



        return true;

    }
}
