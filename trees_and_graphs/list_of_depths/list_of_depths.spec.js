const list_of_depths = require('./list_of_depths')
const BinaryTree = require('../binary_search_tree.js');
const {depth_first_search, breadth_first_search} = require('../tree_search.js');
describe('list_of_depths', function() {
  let tree;
  beforeEach(function () {
      tree = new BinaryTree(1);
  });
  it('returns an array', function() {
    expect(list_of_depths(tree)).toBeInstanceOf(Array);
  });
  it('returns an array of length equal to tree depth', function () {
    tree
    .insert(2).insert(3)
    .insert(4)
    .insert(5)
    .insert(6).insert(7)
    .insert(8).insert(9)
    .insert(10).insert(11)
    expect(list_of_depths(tree).length).toBe(4);
})
});
