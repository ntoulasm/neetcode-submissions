const POSITION_INDEX = 0;
const SPEED_INDEX = 1;

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[POSITION_INDEX] - a[POSITION_INDEX]);
        let totalFleets = 0;
        let lastCarTargetTime = -Infinity;
        for(let i = 0; i < cars.length; ++i) {
            const position = cars[i][POSITION_INDEX];
            const speed = cars[i][SPEED_INDEX];
            const targetTime = (target - position) / speed;
            const isNewFleet = targetTime > lastCarTargetTime;
            lastCarTargetTime = Math.max(lastCarTargetTime, targetTime);
            totalFleets += Number(isNewFleet);
        }
        return totalFleets;
    }
}
