const successor = function(root) {
  if (root == null) return null;
  if (root.right != null) {
    return findLeftMostChild(root);
  }
  else {
    let q = root;
    let x = q.parent;
    while (x != null && x.left != q) {
      q = x;
      x = x.parent;
    }
  }
  return x;
}

const findLeftMostChild = (root) => {
  if (root == null) return null;
  while (root.left != null) root = root.left;
  return root;
}
module.exports = successor
