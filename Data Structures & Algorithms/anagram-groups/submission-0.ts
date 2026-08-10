class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result ={};
        const allChars ="abcdefghijklmonpqrstuvwxyz0123456789"
        for(let i=0;i<strs.length;i++){
            const transformedstr =strs[i].toLowerCase().split("").sort().filter((l)=>allChars.includes(l)).join("");
            if(result[transformedstr]){
                result[transformedstr] =[...result[transformedstr] ,strs[i]]
            }else{
                result[transformedstr]=[strs[i]]
             }
        }
        return Object.values(result);
    }
}
