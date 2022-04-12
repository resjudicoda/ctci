const remove_dups = require('./remove_dups')
const {LinkedList, ListNode} = require('../linked_list')
describe('remove_dups', function() {

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
  })

  it('can call a function on each node', function() {
    list.addToTail(testItem).addToTail({id: 002}).addToTail({id: 003});
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item.id)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003])
  })

  it('can remove duplicates', function() {
    list.addToTail(001).addToTail(002).addToTail(003).addToTail(002);
    remove_dups(list)
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003])
  });

  it('can remove duplicates from middle of list', function() {
    list.addToTail(001).addToTail(002).addToTail(003).addToTail(002).addToTail(004);
    remove_dups(list)
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003, 004])
  });

  it('can remove multiple duplicates', function() {
    list.addToTail(001).addToTail(002).addToTail(003).addToTail(002).addToTail(004).addToTail(002);
    remove_dups(list)
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003, 004])
  });

  it('can remove multiple duplicates', function() {
    list.addToTail(001).addToTail(002).addToTail(001).addToTail(003).addToTail(002).addToTail(004).addToTail(002);
    remove_dups(list)
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003, 004])
  });
});
