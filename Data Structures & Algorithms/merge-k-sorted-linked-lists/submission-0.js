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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const merged = new ListNode();
        const minHeap = new Heap((a, b) => a.val - b.val);
        let current = merged;

        for(const head of lists) {
            if(head === null) continue;
            minHeap.insert(head);
        }

        while(minHeap.length > 0) {
            const node = minHeap.pop();
            if(node.next !== null) {
                minHeap.insert(node.next);
            }
            current.next = new ListNode(node.val);
            current = current.next;
        }

        return merged.next;
    }
}

class Heap {
    constructor(compare) {
        this.compare = compare;
        this.elements = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1)/2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    peek() {
        return this.elements[0];
    }

    get length() {
        return this.elements.length;
    }

    insert(value) {
        let current = this.elements.length;
        this.elements.push(value);

        while(current > 0) {
            const parentIndex = this.getParentIndex(current);
            if(this.compare(this.elements[current], this.elements[parentIndex]) < 0) {
                [this.elements[current], this.elements[parentIndex]] = [this.elements[parentIndex], this.elements[current]];
                current = parentIndex;
            } else {
                break;
            }
        }
    }

    pop() {
        if(this.length === 0) return;
        let current = 0;
        const target = this.elements[0];
        this.elements[0] = this.elements[this.elements.length - 1];
        this.elements.pop();

        while(current < this.elements.length) {
            const leftChildIndex = this.getLeftChildIndex(current);
            const rightChildIndex = this.getRightChildIndex(current);
            let smallestIndex = current;

            if(leftChildIndex < this.elements.length && this.compare(this.elements[leftChildIndex], this.elements[smallestIndex]) < 0) {
                smallestIndex = leftChildIndex;
            }

            if(rightChildIndex < this.elements.length && this.compare(this.elements[rightChildIndex], this.elements[smallestIndex]) < 0) {
                smallestIndex = rightChildIndex;
            }

            if(smallestIndex === current) break;

            [this.elements[smallestIndex], this.elements[current]] = [this.elements[current], this.elements[smallestIndex]];
            current = smallestIndex

        }

        return target;
    }
}
