const {is_palindrome, is_palindrome_helper} = require('./is_palindrome');
const {LinkedList, ListNode} = require('../linked_list');
describe('is_palindrome', function() {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });
  xit('expects a linked list', function() {
    expect(is_palindrome_helper('test')).toEqual(false);
  });
  xit('returns false for empty list', function() {
    expect(is_palindrome_helper(list)).toEqual(false);
  });
  xit('considers a single element list to be a palindrome', function() {
    list.addToTail(1);
    expect(is_palindrome_helper(list)).toEqual(true);
  });
  xit('works', function() {
    list.addToTail(1).addToTail(1);
    expect(is_palindrome_helper(list)).toEqual(true);
  });
  xit('works', function() {
    list.addToTail(1).addToTail(0).addToTail(1);
    expect(is_palindrome_helper(list)).toEqual(true);
  });
  xit('catches non palindromes', function() {
    list.addToTail(1).addToTail(2);
    expect(is_palindrome_helper(list)).toEqual(false);
  });
  xit('works with longer lists', function() {
    list.addToTail(4).addToTail(3).addToTail(2).addToTail(1)
    .addToTail(0)
    .addToTail(1).addToTail(2).addToTail(3).addToTail(4);
    expect(is_palindrome_helper(list)).toEqual(true);
  });
});
