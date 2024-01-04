class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function inorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
       
       
      }
    }
  
    traverse(root);
    return result;
  }
  
  // Example usage:
  const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
  console.log(inorderTraversal(root1)); // Output: [1, 3, 2]
  
  const root2 = null;
  console.log(inorderTraversal(root2)); // Output: []
  
  const root3 = new TreeNode(1);
  console.log(inorderTraversal(root3)); // Output: [1]
  