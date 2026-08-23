class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        right = 0
        maxLen = 0
        letterToCountMap = {}
        maxWindowCount = 0

        while right < len(s):
            rightCharacter = s[right]
            windowLen = right - left + 1
            letterToCountMap[rightCharacter] = letterToCountMap.get(rightCharacter, 0) + 1
            maxWindowCount = max(maxWindowCount, letterToCountMap[rightCharacter])
            if windowLen - maxWindowCount <= k:
                maxLen = max(maxLen, windowLen)
            else:
                letterToCountMap[s[left]] -= 1
                left += 1
            right += 1

        return maxLen

        