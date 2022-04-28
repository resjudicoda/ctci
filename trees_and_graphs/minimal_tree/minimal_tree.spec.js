const minimal_tree = require('./minimal_tree');
const BinarySearchTree = require('../binary_search_tree.js');
const {depth_first_search, breadth_first_search} = require('../tree_search.js');
describe('minimal_tree', function() {
  let tree;
  let array;
  beforeEach(function () {
      array = [1, 3, 6, 9, 13, 18, 25, 37, 38, 55, 60];
      tree = new BinarySearchTree(2);
  });

  xit('is created with the correct value', function () {
    expect(tree.value).toBe(2);
    const tree2 = new BinarySearchTree('A');
    expect(tree2.value).toBe('A');
  });

  xit('inserts values to the left and right', function () {
    tree
    .insert(1).insert(3)
    expect(tree.left.value).toBe(1)
    expect(tree.right.value).toBe(3)
  })

  xit('turns and array into a BST', function () {
    let minTree = minimal_tree(array)
    expect(minTree).toBeInstanceOf(BinarySearchTree)
    expect(minTree.value).toBe(18)
  })

  xit('adds all values from array to the BST', function () {
    let minTree2 = minimal_tree(array)
    expect(minTree2).toBeInstanceOf(BinarySearchTree)
    let dfs = depth_first_search(minTree2)
    expect(dfs.length).toBe(11)
  })

  xit('is minimal height', function () {
    let minTree2 = minimal_tree(array)
    expect(minTree2).toBeInstanceOf(BinarySearchTree)
    let dfs = depth_first_search(minTree2)
    let bfs = breadth_first_search(minTree2)
    expect(dfs).toEqual([18,  6,  3,  1, 13, 9, 38, 37, 25, 60, 55])
    expect(bfs).toEqual([18,  6, 38, 3, 13, 37, 60,  1, 9, 25, 55])
  })

});

