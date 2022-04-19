'use strict'

const {DirectedGraph, Node } = require('./directed_graph');

describe('A Graph', function() {
    let graph;
    beforeEach(function () {
        graph = new DirectedGraph();
    });

    it('can add nodes', function () {
        graph.add(0)
        expect(graph.nodes.length).toBe(1);
        expect(graph.nodes[0].id).toBe(0);
        expect(graph.nodes[0].value).toBe(0);
      });

    it('can add multiple nodes', function () {
        graph.add(0)
        .add(1)
        expect(graph.nodes.length).toBe(2);
        expect(graph.nodes[0].id).toBe(0);
        expect(graph.nodes[1].id).toBe(1);
    })

    it('can add many nodes', function () {
        graph.add(0)
        .add(1)
        .add(2)
        .add(3)
        .add(4)
        .add(5)
        expect(graph.nodes.length).toBe(6);
        expect(graph.nodes[0].id).toBe(0);
        expect(graph.nodes[1].id).toBe(1);
        expect(graph.nodes[2].id).toBe(2);
        expect(graph.nodes[3].id).toBe(3);
        expect(graph.nodes[4].id).toBe(4);
        expect(graph.nodes[5].id).toBe(5);
    })

    it('can connect nodes', function () {
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
        expect(graph.nodes[1].children.length).toBe(1);
        expect(graph.nodes[2].children.length).toBe(3);
        expect(graph.nodes[4].children.length).toBe(1);
        expect(graph.nodes[5].children.length).toBe(2);
    })

})
