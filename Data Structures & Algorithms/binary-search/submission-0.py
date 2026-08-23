import math

class Solution:
    def search(self, nums: List[int], target: int) -> int:

        def searchInternal(start: int = 0, end: int = len(nums) - 1):
            if start > end: return -1
            middle: int = start + math.floor((end - start) / 2)
            candidate: int = nums[middle]
            if candidate == target: 
                return middle
            elif target > candidate: 
                return searchInternal(middle + 1, end)
            else: 
                return searchInternal(start, middle - 1)

        return searchInternal()


            
        