'use strict'

const BinaryTree = require('./binary_tree');

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

    it('can search', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        expect(tree.contains(6)).toBe(true)
        expect(tree.contains(11)).toBe(true)
    })

    it('has in-order traversal', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        let vals = [];
        tree.in_order_traverse((value) => {
          vals.push(value);
        });
        expect(vals).toEqual([8, 4, 9, 2, 10, 5, 11, 1, 6, 3, 7]);
      });

      it('has pre-order traversal', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        let vals = [];
        tree.pre_order_traverse((value) => {
          vals.push(value);
        });
        expect(vals).toEqual([1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 7]);
      });

      it('has post-order traversal', function () {
        tree
        .insert(2).insert(3)
        .insert(4)
        .insert(5)
        .insert(6).insert(7)
        .insert(8).insert(9)
        .insert(10).insert(11)
        let vals = [];
        tree.post_order_traverse((value) => {
          vals.push(value);
        });
        expect(vals).toEqual([8, 9, 4, 10, 11, 5, 2, 6, 7, 3, 1]);
      });
})
