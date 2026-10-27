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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const sentinel = new ListNode(0, head);
        const nthPrev = this.findNthFromEnd(sentinel, n + 1);
        const nth = nthPrev.next;
        nthPrev.next = nth.next;
        return sentinel.next;
    }

    findNthFromEnd(head, n) {
        let slow = head;
        let fast = head;
        let remaining = n - 1;

        while(remaining > 0) {
            fast = fast.next;
            remaining -= 1;
        }
        
        while(fast != null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}
