class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // checkValidString(s) {

    //     const strMap = new Map();
    //     function countStars(s){
    //         let stars = 0;
    //         for(let i=0;i<s.length;i++){
    //             if(s[i] === "*"){
    //                 stars+=1;
    //             }
    //         }
    //         return stars;
    //     }
        
    //     function validString(s) {
    //         let stack = [];

    //         for (let i = 0; i < s.length; i++) {
    //             if (s[i] === "(") {
    //                 stack.push("(");
    //             } else if (s[i] === ")") {
    //                 if (stack.length === 0) {
    //                     return false; // no matching "("
    //                 }
    //                 stack.pop();
    //             }
    //         }
    //         return stack.length === 0;
    //     }

    //     function stringPermutation(s){
    //         if (strMap.has(s)) {
    //             return strMap.get(s);
    //         }

    //         if(countStars(s) === 0){
    //             const result = validString(s);
    //             strMap.set(s, result);
    //             return result;
    //         }

    //         let newStr1 ="";
    //         let newStr2="";
    //         let newStr3="";
    //         for(let i=0;i<s.length;i++){
    //             if(s[i] === "*"){
    //                  newStr1 = s.slice(0,i)+"("+s.slice(i+1,s.length);
    //                  newStr2 = s.slice(0,i)+")"+s.slice(i+1,s.length);
    //                  newStr3 =s.slice(0,i)+""+s.slice(i+1,s.length);
                    
    //                  console.log(newStr1, newStr2,newStr3);
    //                 break;
    //             }               
    //         }
    //        const result =
    //         stringPermutation(newStr1) ||
    //         stringPermutation(newStr2) ||
    //         stringPermutation(newStr3);

    //         strMap.set(s, result);
    //         return result;
    //     }
    //    const result = stringPermutation(s);
    //    return result;
    // }

    checkValidString = function(s) {
    const memo = new Map();

    function dfs(index, open) {
        // Too many ')' encountered
        if (open < 0) {
            return false;
        }

        // Reached the end
        if (index === s.length) {
            return open === 0;
        }

        const key = index + "," + open;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let result;

        if (s[index] === "(") {
            // '(' must increase open count
            result = dfs(index + 1, open + 1);

        } else if (s[index] === ")") {
            // ')' must decrease open count
            result = dfs(index + 1, open - 1);

        } else {
            // '*' can be:
            // 1. '('
            // 2. ')'
            // 3. empty

            result =
                dfs(index + 1, open + 1) ||
                dfs(index + 1, open - 1) ||
                dfs(index + 1, open);
        }

        memo.set(key, result);

        return result;
    }

    return dfs(0, 0);
};

}
