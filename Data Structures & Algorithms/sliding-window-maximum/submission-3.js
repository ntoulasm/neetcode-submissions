class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        
        let maximumElementPerWindow = [];
        const compare = (a, b) => b.value - a.value;
        const maxHeap = new Heap(compare);
        const createHeapItem = (index, value) => ({ index, value });

        for(let i = 0; i < nums.length; ++i) {
            maxHeap.insert(createHeapItem(i, nums[i]));
            if(i >= k - 1) {
                while(maxHeap.peek().index <= i - k) {
                    maxHeap.pop();
                }
                maximumElementPerWindow.push(maxHeap.peek().value);
            }
        }

        return maximumElementPerWindow;
    
    }
}

class Heap {

    items = [];

    constructor(compare) {
        this.compare = compare;
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1)/ 2);
    }

    length() {
        return this.items.length;
    }

    peek() {
        return this.items[0];
    }

    insert(v) {
        
        let current = this.items.length;
        this.items.push(v);
        
        while(current > 0) {
            const parent = this.getParentIndex(current)
            if(this.compare(this.items[current], this.items[parent]) < 0) {
                [this.items[current], this.items[parent]] = [this.items[parent], this.items[current]];
                current = parent;
            } else {
                break;
            }
        }

    }

    pop() {

        if(this.items.length === 0) return undefined;
        
        let current = 0;
        const target = this.peek();

        this.items[0] = this.items[this.items.length - 1]
        this.items.pop();

        while(current < this.items.length) {

            let swapIndex = current;
            const leftChildIndex = this.getLeftChildIndex(current);
            const rightChildIndex = this.getRightChildIndex(current);

            if(
                leftChildIndex < this.items.length &&
                this.compare(this.items[leftChildIndex], this.items[swapIndex]) < 0 
            ) {
                swapIndex = leftChildIndex;
            }

            if(
                rightChildIndex < this.items.length &&
                this.compare(this.items[rightChildIndex], this.items[swapIndex]) < 0
            ) {
                swapIndex = rightChildIndex;
            }

            if(swapIndex === current) break;

            [this.items[current], this.items[swapIndex]] = [this.items[swapIndex], this.items[current]];
            current = swapIndex;

        }

        return target;

    }

}