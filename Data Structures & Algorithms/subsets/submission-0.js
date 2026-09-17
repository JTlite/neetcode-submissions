class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result =[];
        const path = [];
        function backtrack(i){
            if(i ===nums.length){
                result.push([...path]);
                return;
            }
            path.push(nums[i]);
            backtrack(i+1);
            path.pop();
            backtrack(i+1);
        }
        backtrack(0);
        return result;
    }
}
