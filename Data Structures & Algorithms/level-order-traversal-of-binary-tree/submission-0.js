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
     * @return {number[][]}
     */
    levelOrder(root) {
         const result = []
        const q = []
        if(root == null){return result;}
        q.push(root);
       
        while(q.length > 0){
            let len = q.length;
            let level=[]
            for(let i=0;i<len;i++){
                const current = q.shift();
                level.push(current.val);
                if(current.left !==null){
                    q.push(current.left);
                }
                if(current.right !== null){
                    q.push(current.right);
                }
            }
            result.push(level);
        }
        return result;
    }
}
