// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  let arr = [];
  let _head = pHead;
  while (_head) {
    arr.push(_head.val);
    _head = _head.next;
  }

  _head = pHead;

  while (_head) {
    _head.val = arr.pop();
    _head = _head.next;
  }


  return pHead;
}