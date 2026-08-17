class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const MAX_ROWS = 9;
        const MAX_COLUMNS = 9;
        const seen = new Set();
        
        for(let i = 0; i < MAX_ROWS; ++i) {
            for(let j = 0; j < MAX_COLUMNS; ++j) {
                const c = board[i][j];
                if(c === '.') continue;
                if(seen.has(c)) return false;
                seen.add(c)
            }
            seen.clear();
        }

        for(let j = 0; j < MAX_COLUMNS; ++j) {
            for(let i = 0; i < MAX_ROWS; ++i) {
                const c = board[i][j];
                if(c === '.') continue;
                if(seen.has(c)) return false;
                seen.add(c);
            }
            seen.clear();
        }

        for(let left = 0; left < 3; ++left) {
            for(let top = 0; top < 3; ++top) {
                for(let i = 0; i < 3; ++i) {
                    for(let j = 0; j < 3; ++j) {
                        const c = board[left * 3 + i][top * 3 + j];
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
