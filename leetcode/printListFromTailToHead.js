// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head) {
  let arr = [];

  let _head = head;

  while (_head) {
    arr.push(_head.val);
    _head = _head.next;
  }

  return arr.reverse();
}