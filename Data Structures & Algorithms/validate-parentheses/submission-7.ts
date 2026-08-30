class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let validity = true;
        let stack = [];

        for(let i=0;i<s.length;i++){
            if(s[i] == "(" || s[i]== "[" || s[i]=="{"){
                stack.push(s[i]);
            }else
            { if(
                (s[i] == ")" && stack[stack.length-1] == "(") || 
            (s[i] == "}" && stack[stack.length-1] == "{") || (s[i] == "]" && stack[stack.length-1] == "[")){
                stack.pop();
            }else{
                stack.push(s[i]);
            }}
        }
        return stack.length==0 ? validity:!validity;
    }
}
