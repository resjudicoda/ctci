const {depth_first_search, breadth_first_search} = require('./tree_search.js');
const BinarySearchTree = require('./binary_search_tree.js');
const BinaryTree = require('./binary_tree.js');

describe('A Binary Search Tree', function() {
    let tree;
    beforeEach(function () {
        tree = new BinarySearchTree(5);
    });

    it('is created with the correct value', function () {
        expect(tree.value).toBe(5);
        const tree2 = new BinarySearchTree('A');
        expect(tree2.value).toBe('A');
      });

    it('inserts values', function () {
        tree
        .insert(1).insert(7)
        expect(tree.left.value).toBe(1)
        expect(tree.right.value).toBe(7)
    })

    it('depth first search works', function () {
        tree
        .insert(3).insert(2)
        .insert(4)
        .insert(8).insert(6)
        .insert(9)
        expect(depth_first_search(tree)).toEqual([ 5, 3, 2, 4, 8, 6, 9 ])
    })

    it('depth first search works', function () {
        let bigTree = new BinarySearchTree(15);
        bigTree
        .insert(7).insert(5).insert(2).insert(6)
        .insert(13).insert(12).insert(14)
        .insert(21).insert(20).insert(17)
        .insert(25).insert(23).insert(29)
        expect(depth_first_search(bigTree)).toEqual([15, 7, 5, 2, 6, 13, 12, 14, 21, 20, 17, 25, 23, 29])
    })

    it('breadth first search works', function () {
        let bigTree = new BinarySearchTree(15);
        bigTree
        .insert(7).insert(5).insert(2).insert(6)
        .insert(13).insert(12).insert(14)
        .insert(21).insert(20).insert(17)
        .insert(25).insert(23).insert(29)
        expect(breadth_first_search(bigTree)).toEqual([15, 7, 21, 5, 13, 20, 25, 2, 6, 12, 14, 17, 23, 29])
    })
})

describe('A Binary Tree', function() {
    let tree;
    beforeEach(function () {
        tree = new BinaryTree(1);
    });

    it('is created with the correct value', function () {
        expect(tree.value).toBe(1);
        const tree2 = new BinaryTree('A');
        expect(tree2.value).toBe('A');
      });

    it('inserts values', function () {
        tree
        .insert(2).insert(3)
        expect(tree.left.value).toBe(2)
        expect(tree.right.value).toBe(3)
    })

    it('inserts many values in a balanced way', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        expect(tree.value).toBe(1)
        expect(tree.left.value).toBe(2)
        expect(tree.right.value).toBe(3)
        expect(tree.left.left.value).toBe(4)
        expect(tree.left.right.value).toBe(5)
        expect(tree.right.left.value).toBe(6)
        expect(tree.right.right.value).toBe(7)
        expect(tree.left.left.left.value).toBe(8)
        expect(tree.left.left.right.value).toBe(9)
        expect(tree.left.right.left.value).toBe(10)
        expect(tree.left.right.right.value).toBe(11)
    })

    it('depth first search works', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        expect(depth_first_search(tree)).toEqual([1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 7])
    })

    it('breadth first search works', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        expect(breadth_first_search(tree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    })
})