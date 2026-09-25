class Solution {
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const result = [];
        const path = [];

        function backtracking(start) {
            result.push([...path]);

            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                path.push(nums[i]);
                backtracking(i + 1);
                path.pop();
            }
        }

        backtracking(0);

        return result;
    }
}