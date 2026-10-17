class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([
            value,
            timestamp
        ]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) {
            return '';
        }
        let result = '';
        const records = this.keyStore.get(key);
        let start = 0;
        let end = records.length - 1;
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            const [value, storedTimestamp] = records[mid];
            if(timestamp < storedTimestamp) {
                end = mid - 1;
            } else {
                result = value;
                start = mid + 1;
            }
        }
        return result;
    }
}
