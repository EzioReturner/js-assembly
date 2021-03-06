// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{ 1, 2, 4, 7, 3, 5, 6, 8 } 和中序遍历序列{ 4, 7, 2, 1, 5, 3, 8, 6 } ，则重建二叉树并返回。

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

const pre = [1, 2, 4, 7, 3, 5, 6, 8];
const vin = [4, 7, 2, 1, 5, 3, 8, 6];

function reConstructBinaryTree(pre, vin) {
  let result = null;
  if (pre.length > 1) {
    console.log('pre:'+pre, 'vin:'+vin);
  
    const rootVal = pre[0];
    const middleIndex = vin.indexOf(rootVal);
    const vinLeft = vin.slice(0, middleIndex);
    const vinRight = vin.slice(middleIndex + 1, vin.length);
    pre.shift();
    const preLeft = pre.slice(0, vinLeft.length);
    const preRight = pre.slice(vinLeft.length)
    console.log('rootVal:'+rootVal);
    console.log('preLeft:'+JSON.stringify(preLeft), 'preRight:'+JSON.stringify(preRight));
    console.log('vinLeft:'+JSON.stringify(vinLeft), 'vinRight:'+JSON.stringify(vinRight));
  
    result = {
      val: rootVal,
      left: reConstructBinaryTree(preLeft, vinLeft),
      right: reConstructBinaryTree(preRight, vinRight)
    }
  } else if (pre.length === 1) {
    result = {
      val: pre[0],
      left: null,
      right: null
    }
  }

  return result;
}

console.log(reConstructBinaryTree(pre, vin));
