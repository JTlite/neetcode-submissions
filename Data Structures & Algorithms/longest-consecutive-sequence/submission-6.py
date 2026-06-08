class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        no_duplicates = set(nums)
        sorted_input = sorted(list(no_duplicates));
        if(len(nums) == 0) :
            return 0
        maxLength =1
        result=1
        for i in range(len(sorted_input)):
            if i!=0:
                if  sorted_input[i] - sorted_input[i-1] == 1 :
                    maxLength+=1
                elif sorted_input[i] - sorted_input[i-1] == -1 :
                    maxLength+=1
                else :
                    maxLength=1
            
            result =max(maxLength,result)

        return result
        
