const depth_first_search = function (tree, nodes = []) {
    if (!tree) {
        return false;
    }
    nodes.push(tree.value)
    if (tree.left) {
        depth_first_search(tree.left, nodes);
    }
    if (tree.right) {
        depth_first_search(tree.right, nodes);
    }
    return nodes;
}

const breadth_first_search = function (tree) {
    let queue = [];
    let nodes = [];
    queue.push(tree)
    let current;
    while (queue.length) {
      current = queue.shift();
      nodes.push(current.value)
      //current.visited = true;
      if (current.left) {
          queue.push(current.left);
      }  
      if (current.right) {
          queue.push(current.right);
      }
    }
    return nodes;
}

module.exports = {depth_first_search, breadth_first_search}