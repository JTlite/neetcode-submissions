class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result =[];
        const path =[];
        function backtracking(i, sum){
            if(sum === target){
                result.push([...path]);
                return;
            }
            if(sum > target || i===nums.length){
                return;
            }
            path.push(nums[i]);
            backtracking(i,sum+nums[i]);
            path.pop();
            backtracking(i+1,sum)
        }
        backtracking(0,0);
        return result;
    }
}
