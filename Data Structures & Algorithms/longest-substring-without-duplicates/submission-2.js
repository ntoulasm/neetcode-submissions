class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let maxLength = 0;
        let left = 0;
        let right = left + 1;
        const seen = new Set();

        if(s.length !== 0) {
            seen.add(s[left]);
        }

        while(right < s.length) {
            const rightCharacter = s[right];
            if(seen.has(rightCharacter)) {
                maxLength = Math.max(maxLength, seen.size);
                do {
                    seen.delete(s[left]);
                    ++left;
                } while(seen.has(rightCharacter));
            } else {
                ++right;
                seen.add(rightCharacter);
            }
        }
        
        return Math.max(maxLength, seen.size);;
    
    }
}
