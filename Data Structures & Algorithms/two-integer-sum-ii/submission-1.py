class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hm = {}
        for i in range(len(nums)):
            req = target - nums[i]
            if req in hm:
                return [ hm[req],i+1]
            else: 
                hm[nums[i]] = i+1
    
