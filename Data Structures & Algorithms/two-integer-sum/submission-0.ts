class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result:number[] = [];
        const trackMap = new Map();
        for(let i=0;i<nums.length;i++){
            let toFind = target -nums[i];
            if(trackMap.has(toFind)){
                 return [i,trackMap.get(toFind)]
            }else{
                trackMap.set(nums[i],i)
            }
        }

    }
}
