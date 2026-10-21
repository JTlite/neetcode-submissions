class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const checkDup = new Set(nums);
        return checkDup.size !== nums.length;
    }
}
