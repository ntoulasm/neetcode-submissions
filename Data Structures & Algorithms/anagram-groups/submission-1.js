class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const groups = new Map();

        for(const str of strs) {
            const normalizedStr = String(Array.from(str).sort());
            const group = groups.get(normalizedStr);
            if(!group) groups.set(normalizedStr, [str]);
            else group.push(str);
        }

        return Array.from(groups.values());

    }
}
