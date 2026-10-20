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
    reverseList(head) {
        const stack = [];
        let current = head;
        if(head === null) return null;
        while(current.next) {
            stack.push(current);
            current = current.next;
        }
        const tail = current;
        while(stack.length !== 0) {
            current = current.next = stack.pop();
        }
        current.next = null;
        return tail;
    }
}
