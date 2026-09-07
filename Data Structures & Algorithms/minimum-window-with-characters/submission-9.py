class Solution:
    def minWindow(self, s: str, t: str) -> str:
        left = 0
        right = 0
        shortestLength=0
        shortestLeft=0
        shortestRight=0
        found = 0
        tCharacters = {}
        windowCharacters = {}

        if len(t) > len(s): return ""

        for character in t:
            tCharacters[character] = tCharacters.get(character, 0) + 1

        while right < len(s):
            windowCharacters[s[right]] = windowCharacters.get(s[right], 0) + 1
            if windowCharacters[s[right]] == tCharacters.get(s[right], -1):
                found += 1
            while found == len(tCharacters) and left <= right:
                windowLength = right - left + 1
                if not shortestLength or shortestLength > windowLength:
                    shortestLength = windowLength
                    shortestLeft = left
                    shortestRight = right + 1
                windowCharacters[s[left]] = windowCharacters[s[left]] - 1 
                if s[left] in tCharacters and windowCharacters[s[left]] < tCharacters[s[left]]:
                    found -= 1
                left += 1
            else:
                right += 1
        
        return s[shortestLeft:shortestRight]