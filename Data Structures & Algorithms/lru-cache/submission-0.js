class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map();
        this.head = new DoublyLinkedListNode();
        this.tail = new DoublyLinkedListNode();
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.store.has(key)) {
            return -1;
        }
        this.use(key);
        return this.store.get(key).data.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.store.has(key)) {
            const node = this.store.get(key);
            node.data.value = value;
            this.use(key);
        } else {
            if(this.store.size === this.capacity) {
               this.evict();
            }
            const node = new DoublyLinkedListNode({ key, value });
            this.insertFront(node);
            this.store.set(key, node);
        }
    }

    use(key) {
        const node = this.store.get(key);
        this.remove(node);
        this.insertFront(node);
    }

    evict() {
        const node = this.tail.previous;
        this.store.delete(node.data.key);
        this.remove(node);
    }

    insertFront(node) {
        node.previous = this.head;
        node.next = this.head.next;
        this.head.next.previous = node;
        this.head.next = node;
    }

    remove(node) {
        node.previous.next = node.next;
        node.next.previous = node.previous;
    }
}

class DoublyLinkedListNode {
    constructor(data = null, previous = null, next = null) {
        this.data = data;
        this.previous = previous;
        this.next = next;
    }
}
