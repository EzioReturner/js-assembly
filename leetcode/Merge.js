// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

function Merge(pHead1, pHead2) {
  if (pHead1 == null) {
    return pHead2;
  } else if (pHead2 == null) {
    return pHead1;
  }

  let _head = checkVal();

  function checkVal() {
    let back;
    if (pHead1.val > pHead2.val) {
      back = pHead2;
      pHead2 = pHead2.next;
    } else {
      back = pHead1;
      pHead1 = pHead1.next;
    }
    return back;
  }

  _head.next = Merge(pHead1, pHead2);

  return _head;
}