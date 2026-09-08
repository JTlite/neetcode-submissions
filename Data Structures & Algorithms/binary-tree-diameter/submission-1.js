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
        let diameter = 0;
        function findDiameter(root){
            if(root == null){
                return null;
            }
            let leftdepth = findDiameter(root.left);
            let rightdepth = findDiameter(root.right);
            diameter = Math.max(leftdepth + rightdepth ,diameter);
            return 1+Math.max(leftdepth,rightdepth);
        }
        findDiameter(root);
        return diameter;

    }
}
