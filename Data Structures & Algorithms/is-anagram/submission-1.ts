class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(this.normalise(s) === this.normalise(t)){
            return true
        }else{
            return false
        }
    }

    normalise(s:string): string{
        const expectedChars:string ="abcdefghijklmnopqrstuvwxyz"
        const transformedStr:string = s.toLowerCase().split("").filter((l)=> expectedChars.includes(l)).sort().join("")
        console.log(transformedStr)
        return transformedStr
    }
}
