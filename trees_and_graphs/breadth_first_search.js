const breadth_first_search = function (node, visiter) {
    let queue = [];
    queue.push(node)
    let current;
    while (queue.length) {
      current = queue.shift();
      visiter(current)
      current.visited = true;
      if (current.children && current.children.length) {
          current.children.forEach((child) => {
              if (!child.visited) {
                child.visited = true;
                queue.push(child)
              }
          })
      }
    }
    return;
}

module.exports = breadth_first_search