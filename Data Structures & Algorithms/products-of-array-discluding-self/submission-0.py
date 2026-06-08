class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix_product =[0]*len(nums)
        suffix_product =[0]*len(nums)
        result =[0]*len(nums)
        for i,num in enumerate(nums):
            if i==0 :
                prefix_product[i] = num
            else:
                prefix_product[i] = prefix_product[i-1]*num;
        
        for i,num in reversed(list(enumerate(nums))):
            if i==len(nums)-1:
                suffix_product[i] = nums[len(nums)-1]
            else:
                suffix_product[i] = suffix_product[i+1]*num

        for i in range(len(nums)):
            if i==0:
                result[i] = suffix_product[i+1]
            elif i == len(nums)-1:
                result[i] =prefix_product[i-1]
            else:
                result[i]= suffix_product[i+1]*prefix_product[i-1];

        return result



