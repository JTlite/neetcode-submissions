class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let results =[];
        let path = [];
        function backtrack(i){
            if(i === nums.length ){
                results.push([...path]);
                return
            }
            path.push(nums[i]);
            backtrack(i+1);
            path.pop();
            backtrack(i+1);


        }
        backtrack(0);
        return results;
         
    }
}
