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
     * @return {ListNode}
     */
    reverseList(head, prev = null) {
        if(!head) return prev;
        const next = head.next;
        head.next = prev;
        return this.reverseList(next, head);
    }
}
