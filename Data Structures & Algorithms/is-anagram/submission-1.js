class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const letterCounts = new Map();
        for(let i = 0; i < s.length; ++i) {
            if(!letterCounts.has(s[i])) {
                letterCounts.set(s[i], 0);
            }
            letterCounts.set(s[i], letterCounts.get(s[i]) + 1);
        }
        for(let i = 0; i < s.length; ++i) {
            if(!letterCounts.has(t[i])) {
                return false;
            }
            const total = letterCounts.get(t[i]);
            if(!total) {
                return false;
            }
            letterCounts.set(t[i], total - 1);
        }
        return true;
    }
}
