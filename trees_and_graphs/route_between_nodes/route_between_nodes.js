const route_between_nodes = function(start, end) {
  if (start == end) {
    return true;
  }
  let queue = [];
  start.visited = true;
  queue.push(start);
  while (queue.length) {
    let current = queue.shift();
    //console.log(current.id)
    if (!current.visited) {
      current.visited = true;
    }
    if (current == end) {
      return true;
    }
    else {
      if (current.children && current.children.length) {
        current.children.forEach((child) => {
          if (!child.visited) {
            child.visited = true;
            queue.push(child);
          }
        })
      }
    }
  }
  return false;
}
module.exports = route_between_nodes
