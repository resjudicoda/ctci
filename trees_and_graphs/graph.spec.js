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
        expect(graph.nodes[1].children).toBe(false);
    })

})
