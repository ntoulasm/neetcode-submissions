class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const totalLength = nums1.length + nums2.length;
        const k = Math.floor(totalLength / 2);
        const kth = this.findKthElement(nums1, nums2, k);
        if(totalLength % 2 === 0) {
            return (
                this.findKthElement(nums1, nums2, k - 1) + 
                kth
            ) / 2;
        } else {
            return kth;
        }
    }

    findKthElement(a, b, k) {
        let startA = 0;
        let startB = 0;
        let endA = a.length - 1;
        let endB = b.length - 1;
        let remaining = k;

        while(remaining > 0 && startA < a.length && startB < b.length) {
            const step = Math.max(0, Math.floor(remaining / 2) - 1);
            const curA = Math.min(endA, startA + step);
            const curB = Math.min(endB, startB + step);

            if(a[curA] <= b[curB]) {
                const dismissable = curA - startA + 1;
                remaining -= dismissable;
                startA += dismissable;
            } else {
                const dismissable = curB - startB + 1;
                remaining -= dismissable;
                startB += dismissable;
            }

        }

        if(startA >= a.length) {
            return b[startB + remaining];
        }

        if(startB >= b.length) {
            return a[startA + remaining];
        }

        return Math.min(a[startA], b[startB]);

    }
}
