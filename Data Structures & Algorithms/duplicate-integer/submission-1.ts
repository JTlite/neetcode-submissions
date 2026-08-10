class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        //key values pairs
        //if only one number is repeating once then n=n(n+1)/2
        if(nums.length <=1){
            return false
        }
        let countMap = new Map();
        for(let i=0;i<nums.length;i++){
            if(countMap.has(nums[i])){
                return true
            }else{
                countMap.set(nums[i],1)
            }
        }
        return false

    }
}
