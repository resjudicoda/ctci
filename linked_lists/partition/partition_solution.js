const partition = function(list, value) {
  // conceptualize two lists, left and right
  // add pointers to their heads and tails
  // move tail pointer as you traverse and update values of current
  let leftListHead = null;
  let leftListTail = null;
  let rightListHead = null;
  let rightListTail = null;
  let current = list.head;
  while (current) {
    if (current.item < value) {
      if (leftListHead == null) {
        leftListHead = current;
        leftListTail = current;
      } 
      else {
        leftListTail.next = current;
        leftListTail = current;
      }
    }
    if (current.item >= value) {
      if (rightListHead == null) {
        rightListHead = current;
        rightListTail = current;
      } 
      else {
        rightListTail.next = current;
        rightListTail = current;
      }
    }
    current = current.next;
  }
  leftListHead.prev = null;
  leftListTail.next = rightListHead;
  rightListHead.prev = leftListTail;
  rightListTail.next = null;
  return list;
}
module.exports = partition
