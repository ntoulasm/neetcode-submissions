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
        
        let totalFleets = 0;
        let leadFleetArrivalTime = -Infinity;
        const cars = position.map((p, i) => [p, speed[i]]);
        
        cars.sort((a, b) => b[POSITION_INDEX] - a[POSITION_INDEX]);

        for(const [position, speed] of cars) {
            const arrivalTime = (target - position) / speed;
            if(arrivalTime > leadFleetArrivalTime) {
                ++totalFleets;
                leadFleetArrivalTime = arrivalTime;
            }
        }

        return totalFleets;
    }
}
