const delete_middle_node = function(node) {
  if (!node.prev || !node.next) return false;
  node.prev.next = node.next;
  node.next.prev = node.prev;
  
  return 0;
}
module.exports = delete_middle_node