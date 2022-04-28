const minimal_tree = require('./minimal_tree');
const BinarySearchTree = require('../binary_search_tree.js');
describe('minimal_tree', function() {
  let tree;
  let array = [1, 3, 6, 9, 13, 18, 25, 37, 38, 55, 60];
  beforeEach(function () {
      tree = new BinarySearchTree(2);
  });

  it('is created with the correct value', function () {
    expect(tree.value).toBe(2);
    const tree2 = new BinarySearchTree('A');
    expect(tree2.value).toBe('A');
  });

  it('inserts values to the left and right', function () {
    tree
    .insert(1).insert(3)
    expect(tree.left.value).toBe(1)
    expect(tree.right.value).toBe(3)
  })

  it('turns and array into a BST', function () {
    expect(minimal_tree(array)).toBeInstanceOf(BinarySearchTree)
  })

});
