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
        const groupTails = [];
        let current = head;
        let totalProcessed = 0;

        while(current !== null) {
            totalProcessed += 1;
            if(totalProcessed % k === 0) {
                groupTails.push(current);
            }
            current = current.next;
        }

        const breakpoints = groupTails.map(t => t.next);

        if(breakpoints.length === 0) { return head; }

        const remaining = breakpoints[breakpoints.length - 1];
        let tail = new ListNode();

        for(let i = 0; i < breakpoints.length; ++i) {
            const h = i !== 0 ? breakpoints[i - 1] : head;
            const breakpoint = breakpoints[i];
            tail.next = groupTails[i];
            this.reverse(h, breakpoint);
            tail = h;
        }
        
        tail.next = remaining;

        return groupTails[0];
    }

    reverse(head, breakpoint) {
        let current = head.next;
        let previous = head;
        head.next = breakpoint;
        while(current != breakpoint) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
    }
}
