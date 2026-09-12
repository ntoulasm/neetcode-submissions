class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        
        let maximumElementPerWindow = [];
        const deque = new DoubleEndedQueue();
        const createItem = (index, value) => ({ index, value });

        for(let i = 0; i < nums.length; ++i) {

            while(!deque.isEmpty() && deque.peekBack().value < nums[i]) {
                deque.pop();
            }

            deque.push(createItem(i, nums[i]));

            if(i >= k - 1) {
                if(i - (k - 1) > deque.peekFront().index) {
                    deque.shift();
                }
                maximumElementPerWindow.push(deque.peekFront().value);
            }

        }

        return maximumElementPerWindow;
    
    }
}

class DoubleEndedQueue {

    items = new Map();
    head = 0;
    tail = 0;

    push(value) {
        this.items.set(this.tail, value);
        ++this.tail;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        --this.tail;
        const value = this.items.get(this.tail);
        this.items.delete(this.tail);
        return value;
    }

    shift() {
        if(this.isEmpty()) return undefined;
        const value = this.items.get(this.head);
        this.items.delete(this.head);
        ++this.head;
        return value;
    }

    unshift(value) {
        --this.head;
        this.items.set(this.head, value);
    }

    peekFront() {
        if(this.isEmpty()) return undefined;
        return this.items.get(this.head);
    }

    peekBack() {
        if(this.isEmpty()) return undefined;
        return this.items.get(this.tail - 1);
    }

    isEmpty() {
        return this.tail === this.head;
    }

}