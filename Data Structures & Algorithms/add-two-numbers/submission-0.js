/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let current1 = l1;
        let current2 = l2;
        
        const sumHead = new ListNode();
        let sumTail = sumHead;
        let carry = 0;

        while(current1 !== null || current2 !== null || carry !== 0) {
            const val1 = current1?.val ?? 0;
            const val2 = current2?.val ?? 0;
            const sum = val1 + val2 + carry;

            carry = Math.floor(sum / 10);

            sumTail = sumTail.next = new ListNode(sum % 10);

            current1 = current1?.next ?? null;
            current2 = current2?.next ?? null;
        }

        return sumHead.next;
    }
}
