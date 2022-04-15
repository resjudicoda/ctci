const partition = require('./partition')
const {LinkedList, ListNode} = require('../linked_list');
describe('partition', function() {
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
  })

  xit('works', function() {
    list.addToTail(001).addToTail(002).addToTail(010).addToTail(005).addToTail(007).addToTail(004).addToTail(012);
    partition(list, 5)
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 004, 010, 005, 007, 012])
  });
});
