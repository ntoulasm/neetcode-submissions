class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let maxLength = 0;
        let left = 0;
        let right = 0;
        const seen = new Set();

        while(right < s.length) {
            const rightCharacter = s[right];
            while(seen.has(rightCharacter)) {
                seen.delete(s[left]);
                ++left;
            }
            seen.add(rightCharacter);
            maxLength = Math.max(maxLength, seen.size);
            ++right;
        }

        return maxLength;
    
    }
}
