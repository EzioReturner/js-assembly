// 输入一个链表，输出该链表中倒数第k个结点。


function FindKthToTail(head, k) {
  let arr = [];
  let _head = head;
  while (_head) {
    arr.push(_head);
    _head = _head.next;
  }

  return arr[arr.length - k];
}

