const route_between_nodes = require('./route_between_nodes')
const {DirectedGraph, Node} = require('../directed_graph.js')
describe('route_between_nodes', function() {
  let graph;
  beforeEach(function () {
      graph = new DirectedGraph();
  });
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
it('works', function () {
  graph.add(0)
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
  .add(7)
  .connect(1, [0])
  .connect(2, [1, 6])
  .connect(4, [5, 6])
  .connect(5, [1, 3])
  const clearVisitedValues = (array) => {
    array.forEach((node) => {
      node.visited = false
    })
  } 
  expect(route_between_nodes(graph.nodes[2], graph.nodes[6])).toBe(true);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[2], graph.nodes[0])).toBe(true);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[4], graph.nodes[6])).toBe(true);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[4], graph.nodes[1])).toBe(true);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[4], graph.nodes[3])).toBe(true);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[4], graph.nodes[0])).toBe(true);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[7], graph.nodes[3])).toBe(false);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[2], graph.nodes[3])).toBe(false);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[4], graph.nodes[2])).toBe(false);
  clearVisitedValues(graph.nodes)
  expect(route_between_nodes(graph.nodes[5], graph.nodes[3])).toBe(true);
})
it('doesnt work if start and end are swapped', function () {
  graph.add(0)
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
  .add(7)
  .connect(1, [0])
  .connect(2, [1, 6])
  .connect(4, [5, 6])
  .connect(5, [1, 3])
  expect(route_between_nodes(graph.nodes[6], graph.nodes[2])).toBe(false);
  expect(route_between_nodes(graph.nodes[0], graph.nodes[2])).toBe(false);
  expect(route_between_nodes(graph.nodes[6], graph.nodes[4])).toBe(false);
  expect(route_between_nodes(graph.nodes[3], graph.nodes[4])).toBe(false);
  expect(route_between_nodes(graph.nodes[0], graph.nodes[4])).toBe(false);
})
it('only works in direction of graph', function () {
  graph.add(0)
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
  .add(7)
  .connect(1, [0, 5])
  .connect(2, [1, 6])
  .connect(4, [5, 6])
  .connect(5, [1, 3])
  const clearVisitedValues = (array) => {
    array.forEach((node) => {
      node.visited = false
    })
  } 
  expect(route_between_nodes(graph.nodes[4], graph.nodes[1])).toBe(true);
  clearVisitedValues(graph.nodes);
  expect(route_between_nodes(graph.nodes[1], graph.nodes[4])).toBe(false);
})
});
