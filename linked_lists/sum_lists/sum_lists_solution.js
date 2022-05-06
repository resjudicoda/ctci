const {LinkedList, ListNode} = require('../linked_list.js');

const sum_lists = function(listOne, listTwo) {
  if (!listOne || !listTwo) return false;
  if (!(listOne instanceof LinkedList) || !(listTwo instanceof LinkedList) ) return false;
  let firstCurrent = listOne.head;
  let secondCurrent = listTwo.head;
  let carryOver = false;
  let sum = new LinkedList;
  while (firstCurrent || secondCurrent) {
    let currentSum = 0;
    if (firstCurrent && firstCurrent.item) currentSum += firstCurrent.item;
    if (secondCurrent && secondCurrent.item) currentSum += secondCurrent.item;
    if (carryOver) {
      currentSum += 1;
      carryOver = false;
    }
    if (currentSum > 10) {
      currentSum = currentSum % 10;
      carryOver = true;
    }
    sum.addToTail(currentSum)
    firstCurrent = firstCurrent.next;
    secondCurrent = secondCurrent.next;
  }
  return sum;
}
module.exports = sum_lists

