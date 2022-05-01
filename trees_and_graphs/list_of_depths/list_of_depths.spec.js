const {list_of_depths} = require('./list_of_depths')
const BinaryTree = require('../binary_tree.js');
const {LinkedList} = require('../../linked_lists/linked_list.js')
const {depth_first_search, breadth_first_search} = require('../tree_search.js');
describe('list_of_depths', function() {
  let tree;
  beforeEach(function () {
      tree = new BinaryTree(1);
  });
  xit('returns an array', function() {
    expect(list_of_depths(tree)).toBeInstanceOf(Array);
  });
  xit('returns an array of linked lists', function () {
    tree
    .insert(2).insert(3)
    .insert(4)
    .insert(5)
    .insert(6).insert(7)
    .insert(8).insert(9)
    .insert(10).insert(11)
    let table = list_of_depths(tree)
    let test = table.find( (element) => {
      typeof(element) != LinkedList // check if any element in the return array is not a linked list
    }) 
    expect(test).toBe(undefined); // array.find returns undefined if nothing is found
  })
  xit('returns an array of length equal to tree depth', function () {
    tree
    .insert(2).insert(3)
    .insert(4)
    .insert(5)
    .insert(6).insert(7)
    .insert(8).insert(9)
    .insert(10).insert(11)
    expect(list_of_depths(tree).length).toBe(4);
  })
  xit('works', function () {
    tree
    .insert(2).insert(3)
    .insert(4)
    .insert(5)
    .insert(6).insert(7)
    .insert(8).insert(9)
    .insert(10).insert(11)
    let table = list_of_depths(tree);
    let testArray = [];
    table.forEach((list) => {
      let subArray = [];
      list.forEach((node) => {
        subArray.push(node.item.value); // each LL node has an item which stores the BT node which has a value
      })
      testArray.push(subArray);
    })
    expect(testArray.length).toBe(4);
    expect(testArray).toEqual([[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11]])
  })
});
