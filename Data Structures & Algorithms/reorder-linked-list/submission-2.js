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
        if(head === null || head.next === null) return head;
        const middle = this.findMiddle(head);
        this.split(head, middle);
        const reversedMiddle = this.reverse(middle);
        return this.merge(head, reversedMiddle);
    }

    findMiddle(head) {
        let slow = head;
        let fast = head;
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    split(head, splitPoint) {
        let current = head;
        while(current.next !== splitPoint) {
            current = current.next;
        }
        current.next = null;
    }

    reverse(head) {
        let previous = null;
        let current = head;
        while(current !== null) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }

    merge(l1, l2) {
        let current1 = l1;
        let current2 = l2;
        while(current1 !== null) {
            const next1 = current1.next;
            const next2 = current2.next;
            current1.next = current2;
            if(next1 !== null) {
                current2.next = next1;
            }
            current1 = next1;
            current2 = next2;
        }
        return l1;
    }
}
