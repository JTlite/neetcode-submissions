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
     * @return {number}
     */
    
    diameterOfBinaryTree(root) {
        let diameter =0;
       function calculateDepth(root){
        if(root == null){return 0}
        const leftMax = calculateDepth(root.left);
        const rightMax = calculateDepth(root.right);
        diameter =Math.max(diameter,leftMax+rightMax);
        return 1+ Math.max(leftMax, rightMax);
    }
        calculateDepth(root, diameter);
        return diameter;
        
    }
    
}
