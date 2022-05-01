const {LinkedList} = require('../../linked_lists/linked_list.js')

//dfs version
const list_of_depths = (tree, table = [], level = 0) => {
  if (tree == null) {
    return;
  }
  let list = null;
  if (table.length == level) {
    list = new LinkedList;
    table.push(list)
  } else {
    list = table[level]
  }
  list.addToTail(tree)
  list_of_depths(tree.left, table, level + 1);
  list_of_depths(tree.right, table, level + 1);
  return table;
}

// bfs version
// const list_of_depths = (tree, table = []) => {
//   if (!tree) {
//     return false;
//   }
//   let list;
//   let level;
//   let current;
//   let queue = [];
//   queue.push(tree)
//   while (queue.length) {
//     current = queue.shift()
//     if (!current.level) {
//       current.level = 0
//     }
//     level = current.level;
//     if (table.length == level) {
//       list = new LinkedList;
//       table.push(list);
//     } else {
//       list = table[level];
//     }
//     list.addToTail(current)
//     if (current.left) {
//       current.left.level = level + 1;
//       queue.push(current.left)
//     }
//     if (current.right) {
//       current.right.level = level + 1;
//       queue.push(current.right)
//     }
//   }
//   return table;
// }

module.exports = {list_of_depths}

