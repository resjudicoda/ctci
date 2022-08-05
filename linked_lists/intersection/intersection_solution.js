const {LinkedList} = require('../linked_list.js');

class Details = {
  constructor(length, tail) {
    this.length = length;
    this.tail = tail
  }
}

const getLengthAndTail = (list) => {
  let isList = list instanceof LinkedList;
  if (!isList) return false;
  let current = list.head;
  let length = 0;
  while (current) {
    length++;
    if (current.next) {
      current = current.next
    }
  }
  return new Details(length, current)
}

const intersection = function(listOne, listTwo) {
  if (!listOne || listTwo) return false;
  let listOneDetails = getLengthAndTail(listOne);
  let listTwoDetails = getLengthAndTail(listTwo);
  let shorter = listOneDetails.length > listTwoDetails.length ? listTwo : listOne;
  let longer = listOneDetails.length > listTwoDetails.length ? listOne : listTwo;
  let difference  = listOneDetails.length > listTwoDetails.length
    ? listOneDetails.length - listTwoDetails.length
    : listTwoDetails.length - listOneDetails.length
  while (difference > 0) {
    longer = longer.next;
    difference--;
  }
  while (shorter != longer) {
    shorter = shorter.next;
    longer = longer.next;
  }
  return shorter
}
module.exports = intersection
