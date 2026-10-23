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
     * @return {void}
     */
    reorderList(head) {
        let current = head;
        const nodes = [];
        while(current !== null) {
            nodes.push(current);
            current = current.next;
        }
        for(let i = 0; i < nodes.length / 2; ++i) {
            if(i !== 0) {
                nodes[nodes.length - 1 - i + 1].next = nodes[i];
            }
            nodes[i].next = nodes[nodes.length - 1 - i];
            nodes[nodes.length - 1 - i].next = null;
        }
        return head;
    }
}
