// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        const copies = new Map();
        let current = head;

        while(current !== null) {
            const copy = new Node(current.val);
            copies.set(current, copy);
            current = current.next;
        }

        current = head;
        
        while(current !== null) {
            const copy = copies.get(current);
            copy.next = copies.get(current.next) ?? null;
            copy.random = copies.get(current.random);
            current = current.next;
        }

        return copies.get(head) ?? null;
    }
}
