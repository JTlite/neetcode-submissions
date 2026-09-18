class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result =[];
        let path = [];
        function backtrack(i,total){
            if(total === target ){
                result.push([...path]);
                return;
            }
            if(total > target || i === nums.length) {
                return
            }
            path.push(nums[i]);
            backtrack(i,total+nums[i]);
            path.pop();
            backtrack(i+1,total);
        }
        backtrack(0,0);
        return result;
    }
}
