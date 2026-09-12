class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operations = {
            '+': (lhs, rhs) => lhs + rhs,
            '-': (lhs, rhs) => lhs - rhs,
            '*': (lhs, rhs) => lhs * rhs,
            '/': (lhs, rhs) => Math.trunc(lhs / rhs)
        };
        const operands = [];
        for(const token of tokens) {
            if(!operations.hasOwnProperty(token)) {
                operands.push(Number(token));
            } else {
                const rhs = operands.pop();
                const lhs = operands.pop();
                const result = operations[token](lhs, rhs);
                operands.push(result);
            }
        }
        return operands.pop();
    }
}
