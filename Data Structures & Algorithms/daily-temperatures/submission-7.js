class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(nums) {
        const result = new Array(nums.length).fill(0);
        const stack =[]
        for(let i=0;i<nums.length;i++){
            while(stack.length && nums[i] > nums[stack[stack.length-1]]){
                const popped = stack.pop();
                result[popped] = i-popped;

            }
            stack.push(i);
        }
        return result;
    }
}
