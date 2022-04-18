'use strict'

const {Graph, Node } = require('./graph');

describe('A Graph', function() {
    let graph;
    beforeEach(function () {
        graph = new Graph();
    });

    it('can add nodes', function () {
        graph.add(1)
        expect(graph.nodes.length).toBe(1);
        expect(graph.nodes[0].id).toBe(1);
        expect(graph.nodes[0].value).toBe(1);
      });

    it('can add multiple nodes', function () {
        graph.add(1)
        .add(2, [1])
        expect(graph.nodes.length).toBe(2);
        expect(graph.nodes[0].id).toBe(1);
        expect(graph.nodes[1].id).toBe(2);
        expect(graph.nodes[0].children).toEqual([]);
        expect(graph.nodes[1].children.length).toBe(1);
    })

    it('can add many nodes', function () {
        graph.add(1)
        .add(2, [1])
        .add(3, [1, 2])
        .add(4, [2])
        .add(5, [1])
        .add(6, [1, 2, 3, 4, 5])
        expect(graph.nodes.length).toBe(6);
        expect(graph.nodes[0].id).toBe(1);
        expect(graph.nodes[1].id).toBe(2);
        expect(graph.nodes[2].id).toBe(3);
        expect(graph.nodes[3].id).toBe(4);
        expect(graph.nodes[4].id).toBe(5);
        expect(graph.nodes[5].id).toBe(6);
        expect(graph.nodes[0].children).toEqual([]);
        expect(graph.nodes[1].children.length).toBe(1);
        expect(graph.nodes[2].children.length).toBe(2);
        expect(graph.nodes[5].children.length).toBe(5);
    })

})
