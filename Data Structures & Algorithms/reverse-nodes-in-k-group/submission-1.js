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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        
        const dummy = new ListNode(0, head);
        const length = this.computeLength(head);
        const totalGroups = Math.floor(length / k);
        let current = dummy;

        for(let i = 0; i < totalGroups; ++i) {
            const newTail = current.next;
            const newHead = this.reverseK(newTail, k);
            current.next = newHead;
            current = newTail;
        }

        return dummy.next;

    }

    computeLength(head) {

        let length = 0;
        
        for(let current = head; current !== null; current = current.next) {
            ++length;
        }

        return length;

    }

    reverseK(head, k) {

        let previous = head;
        let current = head.next;
        
        for(let i = 1; i < k; ++i) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        head.next = current;

        return previous;

    }   
}
