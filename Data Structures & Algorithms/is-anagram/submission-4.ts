class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const alphaIndex = new Array(26).fill(0);
        if(s.length !== t.length){
            return false
        }

        for(let i=0; i<s.length;i++){
            const charIndex = s[i].charCodeAt(0)-97;
            alphaIndex[charIndex] +=1; 
            
        

        
            const charIndex2 = t[i].charCodeAt(0)-97;
            alphaIndex[charIndex2] -=1; 
            
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
