// 操作给定的二叉树，将其变换为源二叉树的镜像。

// 二叉树的镜像定义：源二叉树 
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11
//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5

let tree = {
  val: 8,
  left: {
    val: 6,
    left: 5,
    right: 7
  },
  right: {
    val: 10,
    left: 9,
    right: 11
  }
}


function Mirror(root) {
  if (root == null) {
    return null;
  }
  let cache = null;
  cache = root.left;
  root.left = root.right;
  root.right = cache;

  Mirror(root.left);

  Mirror(root.right);
}

Mirror(tree);
console.log(tree);

