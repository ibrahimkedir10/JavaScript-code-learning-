// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree,
//  and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at 
//  the last level h.

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function countNodes(root) {
    if (!root) {
      return 0;
    }
  
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
  
    if (leftHeight === rightHeight) {
      // Left subtree is a full binary tree
      return Math.pow(2, leftHeight) + countNodes(root.right);
    } else {
      // Right subtree is a full binary tree
      return Math.pow(2, rightHeight) + countNodes(root.left);
    }
  }
  
  function getHeight(node) {
    let height = 0;
    while (node) {
      height++;
      node = node.left;
    }
    return height;
  }
  
  // Example usage
  const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)));
  console.log(countNodes(root1)); // Output: 6
  
  const root2 = null;
  console.log(countNodes(root2)); // Output: 0
  
  const root3 = new TreeNode(1);
  console.log(countNodes(root3)); // Output: 1
  