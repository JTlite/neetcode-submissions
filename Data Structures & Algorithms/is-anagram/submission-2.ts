class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const alphaIndex = new Array(26).fill(0);

        for(let i=0; i<s.length;i++){
            const charIndex = s[i].charCodeAt(0)-97;
            alphaIndex[charIndex] +=1; 
            
        }
        console.log(alphaIndex)

        for(let i=0; i<t.length;i++){
            const charIndex = t[i].charCodeAt(0)-97;
            alphaIndex[charIndex] -=1; 
            
        }
        console.log(alphaIndex)

        for(let i=0; i<alphaIndex.length;i++){
           if(alphaIndex[i] !=0){
                return false
           }
            
        }
        return true
        
    }
}
