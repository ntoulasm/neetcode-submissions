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
     * @return {boolean}
     */
    hasCycle(head) {
        let current = head;
        const seen = new Set();
        while(current) {
            if(seen.has(current)) {
                return true;
            }
            seen.add(current);
            current = current.next;
        }
        return false;
    }
}
