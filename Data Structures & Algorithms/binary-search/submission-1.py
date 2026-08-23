class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left: int = 0
        right: int = len(nums) - 1

        while left <= right:
            middle: int = left + (right - left) // 2
            candidate: int = nums[middle]
            if candidate == target: 
                return middle
            elif target > candidate:
                left = middle + 1
            else: 
                right = middle - 1

        return -1  