class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function isSameTree(p, q) {
    if (!p && !q) {
      // Both nodes are null, they are the same
      return true;
    }
  
    if (!p || !q || p.val !== q.val) {
      // One of the nodes is null, or their values are different
      return false;
    }
  
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  
  // Example usage:
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  
  const tree2 = new TreeNode(1);
  tree2.left = new TreeNode(2);
  tree2.right = new TreeNode(3);
  
  console.log(isSameTree(tree1, tree2)); // Output: true
  