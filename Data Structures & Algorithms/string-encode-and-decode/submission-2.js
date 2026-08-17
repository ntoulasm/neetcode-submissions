class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(const str of strs) {
            result += str.length;
            result += '#';
            result += str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let current = 0;

        while(current < str.length) {
            let lengthText = '';
            while(str[current] != '#') {
                lengthText += str[current];
                ++current;
            }
            const length = Number(lengthText);
            const currentStr = str.slice(current + 1, current + 1 + length);
            strs.push(currentStr);
            current += length + 1;
        }

        return strs;
    }
}
