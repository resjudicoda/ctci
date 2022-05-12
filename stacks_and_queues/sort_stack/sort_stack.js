const sort_stack = function(stack) {
  let helper = []; // treat as stack
  let temp;
  while (stack.length > 0) {
    temp = stack.pop();
    while (helper.length > 0 && helper[helper.length - 1] > temp) {
      stack.push(helper.pop());
    }
    helper.push(temp);
  }
  while (helper.length > 0) {
    stack.push(helper.pop());
  }
  return stack;
}
module.exports = sort_stack
