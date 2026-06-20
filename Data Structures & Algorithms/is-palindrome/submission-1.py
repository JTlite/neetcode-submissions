class Solution:
    def isPalindrome(self, s: str) -> bool:
        lowerStr ="".join(ch.lower() for ch in s if ch.isalnum())
        print(s, lowerStr)
        left = 0
        right =len(lowerStr)-1
        while left<=right :
            if lowerStr[left] == lowerStr[right] :
                left+=1
                right-=1
            else:
                return False
        return True
 