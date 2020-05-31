// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  if (pRoot1 === null || pRoot2 === null) return false;

  let result = false;
  // 判断是否相等
  if (pRoot1.val === pRoot2.val) {
    result = checkTree1HasTree2(pRoot1, pRoot2);
  } 

  // 根节点不相等 判断左右节点
  if (!result) {
    result = HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
  }

  return result;
}

function checkTree1HasTree2(root1, root2) {
  if (root2 === null) return true;

  if (root1 === null) return false;

  if (root1.val !== root2.val) return false;

  return checkTree1HasTree2(root1.left, root2.left) && checkTree1HasTree2(root1.right, root2.right);
}
