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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const result = [];
        function inorder(root,result){
            if(root==null){
                return null;
            }
            inorder(root.left,result);
            result.push(root.val);
            inorder(root.right,result);
        }
        inorder(root,result);
        return result[k-1];
    }
}
