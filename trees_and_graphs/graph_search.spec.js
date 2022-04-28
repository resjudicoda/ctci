// for graph

const {depth_first_search, breadth_first_search} = require('./graph_search');
const {DirectedGraph} = require('./directed_graph')

describe('depth first search', function () {
    let graph;
    beforeEach(function () {
        graph = new DirectedGraph();
    });

    it('can search nodes', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node0 = graph.nodes[0];
        depth_first_search(node0, visiter);
        expect(visited).toEqual([0]);
    })

    it('searches nodes in a depth first manner', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node1 = graph.nodes[1];
        depth_first_search(node1, visiter);
        expect(visited).toEqual([1, 0]);
    })

    it('searches nodes in a depth first manner', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node2 = graph.nodes[2];
        depth_first_search(node2, visiter);
        expect(visited).toEqual([2, 0, 1, 6]);
    })

    it('searches nodes in a depth first manner', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node5 = graph.nodes[5];
        depth_first_search(node5, visiter);
        expect(visited).toEqual([5, 1, 0, 3]);
    })
})

describe('breadth first search', function () {
    let graph;
    beforeEach(function () {
        graph = new DirectedGraph();
    });

    it('can search nodes', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node0 = graph.nodes[0];
        breadth_first_search(node0, visiter);
        expect(visited).toEqual([0]);
    })

    it('searches nodes in a breadth first manner', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node1 = graph.nodes[1];
        breadth_first_search(node1, visiter);
        expect(visited).toEqual([1, 0]);
    })

    it('searches nodes in a breadth first manner', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node2 = graph.nodes[2];
        breadth_first_search(node2, visiter);
        expect(visited).toEqual([2, 0, 1, 6]);
    })

    it('searches nodes in a breadth first manner', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        .add(6)
        .add(7)
        .connect(1, [0])
        .connect(2, [0, 1, 6])
        .connect(4, [6])
        .connect(5, [1, 3])
        let visited = [];
        function visiter(node) {
            visited.push(node.id)
        }
        let node5 = graph.nodes[5];
        breadth_first_search(node5, visiter);
        expect(visited).toEqual([5, 1, 3, 0]);
    })
})