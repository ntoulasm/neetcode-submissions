const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
]);

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for(const c of s) {
            if(pairs.has(c)) {
                const current = stack.pop();
                if(current !== pairs.get(c)) {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;

    }
}
