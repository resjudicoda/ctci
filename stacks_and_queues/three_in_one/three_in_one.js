const three_in_one = function(array = [], value, stackNumber) {
  // incomplete
  // this should be reimplemented as a class
  // need to add remove method
  const stackAdd = {
    value: value,
    stack: stackNumber,
    next: null
  };
  // since you only add to top, the first matching item
  // is the top, so set new.next to top and add to array
  let relevantTop = null;
  let length = array.length;
  if (length == 0) {
    array.unshift(stackAdd);
    return array;
  } 
  for (let i = 0; i < length; i++) {
    if (array[i].stack == stackNumber) stackAdd.next = array[i];
    break; // break as soon as you find the first one
  }
  array.unshift(stackAdd);
  return array;
}
module.exports = three_in_one
