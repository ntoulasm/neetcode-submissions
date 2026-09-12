class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const nextWarmerDay = new Array(temperatures.length).fill(0);
        for(let i = temperatures.length - 2; i >= 0; --i) {
            for(let j = i + 1; j <= temperatures.length - 1; ++j) {
                if(temperatures[i] >= temperatures[j]) {
                    if(nextWarmerDay[j] === 0) break;
                    j = j + nextWarmerDay[j] - 1;
                } else {
                    nextWarmerDay[i] = j - i;
                    break;
                }
            }
        }
        return nextWarmerDay;
    }
}
