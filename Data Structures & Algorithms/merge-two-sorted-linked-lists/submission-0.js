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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        
        let merged = new ListNode();
        let curr = merged;
        let curr1 = list1;
        let curr2 = list2;

        while(curr1 !== null && curr2 !== null) {
            if(curr1.val <= curr2.val) {
                curr.next = curr1;
                curr1 = curr1.next;
            } else {
                curr.next = curr2;
                curr2 = curr2.next;
            }
            curr = curr.next;
        }

        curr.next = curr1 !== null ? curr1 : curr2;

        return merged.next;
    }
}
