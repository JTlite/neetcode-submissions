/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        if(root == null){return result;}
        const q = [root];
        while(q.length > 0){
            const len =q.length;
            const level =[];
            for(let i=0;i<len;i++){
                const curr = q.shift();
                level.push(curr.val);
                if(curr.left){
                    q.push(curr.left)

                }
                if(curr.right){
                    q.push(curr.right)

                }
            }
            result.push(level[level.length-1])

        }
        return result;
        
    }
}
