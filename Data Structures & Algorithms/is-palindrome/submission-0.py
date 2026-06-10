class Solution:
    def isPalindrome(self, s: str) -> bool:
        reformed_str = ""
        for ch in s:
            if ch.isalnum():
                reformed_str+=ch.lower()
        return reformed_str == reformed_str[::-1]