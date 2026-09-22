class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result =[];
        const path =[];
        function backtracking(start, sum){
            if(sum === target){
                result.push([...path]);
                return;
            }
            if(sum > target || start===nums.length){
                return;
            }
            for(let i=start;i<nums.length;i++){
            path.push(nums[i]);
            backtracking(i,sum+nums[i]);
            path.pop();
            //backtracking(i+1,sum)
            }
        }
        backtracking(0,0);
        return result;
    }
}
