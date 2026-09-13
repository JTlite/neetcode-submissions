class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let answer = nums[0];
        
            let sum = 0;
            for(let j=0;j<nums.length;j++){
                
                    sum=sum+nums[j]
            answer = Math.max(answer,sum);
               if (sum < 0) {
                sum = 0;
            }


            }
            
        
        return answer;
}}
