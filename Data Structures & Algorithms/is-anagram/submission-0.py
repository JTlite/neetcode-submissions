class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        counts =[0]*26

        for cha in s :
            counts[ord(cha)- ord('a')] +=1

        for cha in t :
            counts[ord(cha) -ord('a')]-=1

        sum=0
        for count in counts:
            if count != 0:
                return False
        
        
        return True
        
