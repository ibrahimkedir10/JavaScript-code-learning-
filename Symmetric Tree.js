class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


var isSymmetric = function (root) {
    //base case 

    if (!root) {
        return true;
    }

    function symmetric(left, right) {
        if (!left && !right) {
            return true;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }
        return symmetric(left.left, right.right) && symmetric(left.right, right.left);
    }
    return symmetric(root.left, root.right);
}







// Example usage
const symmetricTree =
    new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3))
    );


console.log(isSymmetric(symmetricTree)); // Output: true