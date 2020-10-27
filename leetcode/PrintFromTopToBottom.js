// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function PrintFromTopToBottom(root) {
  let result = [];
  let arr = [];

  if (root !== null) {
    arr.push(root);
  }

  while (arr.length) {
    let node = arr.shift();
    node.left && arr.push(node.left);
    node.right && arr.push(node.right);

    result.push(node.val);
  }
  return result;
}

// 思路：模拟栈结构，出栈后再推入左右节点，反复直到遍历完每一层节点