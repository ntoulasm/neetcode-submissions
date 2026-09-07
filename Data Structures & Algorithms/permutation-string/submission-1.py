class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:

        if len(s2) < len(s1): return False

        left = 0
        s1Characters = {}
        windowCharacters = {}

        for character in s1:
            s1Characters[character] = s1Characters.get(character, 0) + 1

        for right in range(len(s2)):
            character = s2[right]
            windowCharacters[character] = windowCharacters.get(character, 0) + 1

            if right - left >= len(s1):
                windowCharacters[s2[left]] -= 1
                if windowCharacters[s2[left]] == 0:
                    del windowCharacters[s2[left]]
                left += 1

            if s1Characters == windowCharacters:
                return True
        
        return False
            

        