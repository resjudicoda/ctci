const three_in_one = require('./three_in_one');
const Stack = require('../stack');
describe('three_in_one', function() {
  let stack;
  let testObj = {id: 001};
  beforeEach(() => {
    stack = new Stack();
  });

  it('stack class adds and removes an item', function () {
    stack.add(testObj);
    expect(stack.remove()).toBe(testObj);
  });

  it('stack class removes the top first', function () {
    stack.add(001).add(002).add(003).add(004);
    expect(stack.remove()).toBe(004);
    expect(stack.remove()).toBe(003);
    expect(stack.remove()).toBe(002);
  });

  it('three in one can add an item to the array', function () {
    let arr = [];
    three_in_one(arr, 001, 1);
    expect(arr.length).toBe(1);
    expect(arr[0]).toEqual(
      jasmine.objectContaining({
        value: 001,
        stack: 1,
        next: null
      })
    )
  });

  it('three in one can add multiple items to the array', function () {
    let arr = [];
    three_in_one(arr, 001, 1);
    three_in_one(arr, 002, 2);
    three_in_one(arr, 003, 3);
    expect(arr.length).toBe(3);
    expect(arr[0]).toEqual(
      jasmine.objectContaining({
        value: 003,
        stack: 3,
        next: null
      })
    )
    expect(arr[1]).toEqual(
      jasmine.objectContaining({
        value: 002,
        stack: 2,
        next: null
      })
    )
    expect(arr[2]).toEqual(
      jasmine.objectContaining({
        value: 001,
        stack: 1,
        next: null
      })
    )
  });

});
