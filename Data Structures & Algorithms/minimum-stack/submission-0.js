class MinStack {
    constructor() {
        this.items = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const item = {
            value: val,
            previousMin: this.min
        };
        if(this.min === null || val <= this.min.value) {
            this.min = item;
        }
        this.items.push(item);
    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.items.pop();
        if(popped === this.min) {
            this.min = popped.previousMin;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1].value
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min.value;
    }
}
