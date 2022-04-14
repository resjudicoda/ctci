const delete_middle_node = require('./delete_middle_node');
const {LinkedList, ListNode} = require('../linked_list');
describe('delete_middle_node', function() {
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

  it('can call a function on each node', function() {
    list.addToTail(testItem).addToTail({id: 002}).addToTail({id: 003});
    const ids = [];
    const getIds = (node) => {
      ids.push(node.item.id)
    };
    list.forEach(getIds)
    expect(ids).toEqual([001, 002, 003])
  });

  it('works', function() {
    list.addToTail('a').addToTail('b').addToTail('c').addToTail('d').addToTail('e').addToTail('f');
    
    const items = [];
    const getItems = (node) => {
      items.push(node.item)
    };
    const getSpecific = (list, item) => {
      let current = list.head;
      while (current.next) {
        if (current.item == item) return current;
        current = current.next
      }
      return 0;
    }
    let nodeC = getSpecific(list, 'c');
    delete_middle_node(nodeC);
    list.forEach(getItems)
    expect(items).toEqual(['a', 'b', 'd', 'e', 'f'])
  });
});
