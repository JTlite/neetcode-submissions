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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root == null){return null}
        if(root == p || root ==q){return root}
        const leftlca = this.lowestCommonAncestor(root.left,p,q);
        const rightlca = this.lowestCommonAncestor(root.right,p,q);
        if(leftlca &&  rightlca){
            return root;
        }
        return leftlca? leftlca:rightlca;
    }
}
