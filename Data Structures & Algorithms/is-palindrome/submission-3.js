class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length - 1;
        const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]$/;
        const isAlphanumeric = c => ALPHANUMERIC_REGEX.test(c);

        while(left < right) {
            if(!isAlphanumeric(s[left])) {
                ++left;
                continue;
            }
            if(!isAlphanumeric(s[right])) {
                --right;
                continue;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            ++left;
            --right;
        }

        return true;

    }
}
