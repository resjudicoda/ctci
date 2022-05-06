const sum_lists = require('./sum_lists.js');
const {LinkedList, ListNode} = require('../linked_list.js');
describe('sum_lists', function() {
  let list;
  beforeEach(() => {
    listOne = new LinkedList();
    listTwo = new LinkedList()
  });
  xit('expects two linked lists', function() {
    expect(sum_lists('test')).toEqual(false);
  });
  xit('expects two linked lists', function() {
    expect(sum_lists('test', 24)).toEqual(false);
  });
  xit('expects two linked lists and returns a linked list', function() {
    listOne.addToTail(7).addToTail(1).addToTail(6);
    listTwo.addToTail(5).addToTail(9).addToTail(2);
    expect(sum_lists(listOne, listTwo)).toBeInstanceOf(LinkedList);
  });
  xit('works', function() {
    listOne.addToTail(7).addToTail(1).addToTail(6);
    listTwo.addToTail(5).addToTail(9).addToTail(2);
    let values = [];
    const grabValues = (node) => {
      values.push(node.item);
    }
    const sumList = sum_lists(listOne, listTwo);
    sumList.forEach(grabValues);
    expect(values).toEqual([2, 1, 9]);
  });
});
