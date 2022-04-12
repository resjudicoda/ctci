const remove_dups = function(list) {
  // keep a cache of values seen
  let cache = {};
  let current = list.head;
  while (current) {
    if (!cache[current.item]) cache[current.item] = 1;
    else {
      // special case if current is the tail
      if (current == list.tail) current.prev.next = null;
      else {
        // change the pointers as if the current is not there
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    current = current.next;
  }

  return list;
}
module.exports = remove_dups
