// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
let stack1 = [];
let stack2 = [];

function push(node) {
  stack1.push(node);
}

function pop() {
  if (stack2.length === 0) {
    if (stack1.length === 0) {
      return null;
    } else {
      stack2 = stack1.reverse();
      stack1 = [];
      return stack2.pop();
    }
  } else {
    return stack2.pop();
  }
}