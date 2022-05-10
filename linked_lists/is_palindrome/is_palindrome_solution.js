
const {LinkedList, ListNode} = require('../linked_list');

class Result {
  constructor(node, result) {
    this.node = node;
    this.result = result;
  }
}

const is_palindrome = function(head, length) {
  if (length <= 0 || head == null) {
    return new Result(head, true);
  }
  else if (length == 1) {
    return new Result(head.next, true);
  }

  let res = is_palindrome(head.next, length - 2);
  
  if (!res.result || res.node == null) {
    return res;
  }

  res.result = (head.item == res.node.item);
  res.node = res.node.next;
  
  return res;
}

const findLength = (list) => {
  let length = 0;
  let current = list.head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

const is_palindrome_helper = (list) => {
  let isList = list instanceof LinkedList;
  if (!isList) return false;
  if (!list.head) return false;
  let length = findLength(list);
  if (length == 1) return true;
  let head = list.head;
  let res = is_palindrome(head, length);
  return res.result;
}
module.exports = {is_palindrome, is_palindrome_helper}

