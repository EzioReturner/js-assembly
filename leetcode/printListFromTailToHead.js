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