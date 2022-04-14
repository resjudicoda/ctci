const return_kth_to_last = require('./return_kth_to_last');
const {LinkedList, ListNode} = require('../linked_list');
describe('return_kth_to_last', function() {
  let list;
  let testItem = {id: 001};
  beforeEach(() => {
    list = new LinkedList();
  });

  it('can add items to the linked list', function() {
    list.addToTail(testItem).addToTail({id: 002});
    expect(list.head).toEqual(
      jasmine.objectContaining({
        item: testItem,
        next: list.tail,
        prev: null
      })
    );
    expect(list.tail).toEqual(
      jasmine.objectContaining({
        item: {id: 002},
        next: null,
        prev: list.head
      })
    )
  });

  xit('can call a function on each node', function() {
    list.addToTail(testItem).addToTail({id: 002}).addToTail({id: 003});
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item.id)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003])
  });

  xit('works', function() {
    list.addToTail(testItem).addToTail({id: 002}).addToTail({id: 003});
    expect(return_kth_to_last(list, 2)).toEqual(
      jasmine.objectContaining({
        item: {id: 002},
        next: list.tail,
        prev: list.head
      })
    )
  });

  xit('works', function() {
    list.addToTail(001).addToTail(002).addToTail(003).addToTail(004).addToTail(005);
    expect(return_kth_to_last(list, 2)).toEqual(
      jasmine.objectContaining({
        item: 004
      })
    )
  });

  xit('works', function() {
    list.addToTail(001).addToTail(002).addToTail(003).addToTail(004).addToTail(005);
    expect(return_kth_to_last(list, 3)).toEqual(
      jasmine.objectContaining({
        item: 003
      })
    )
  });

  xit('works', function() {
    let node1 = {id: 001};
    let node2 = {id: 002};
    let node3 = {id: 003};
    let node4 = {id: 004};
    let node5 = {id: 005};
    list.addToTail(node1).addToTail(node2).addToTail(node3).addToTail(node4).addToTail(node5);
    expect(return_kth_to_last(list, 3)).toEqual(
      jasmine.objectContaining({
        item: {id: 003}
      })
    )
  });
});
