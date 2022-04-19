const depth_first_search = function (node, visiter) {
    visiter(node)
    node.visited = true;
    if (node.children && node.children.length) {
        node.children.forEach((child) => {
            if (!child.visited) depth_first_search(child, visiter)
        })
    }
    return;
}

module.exports = depth_first_search