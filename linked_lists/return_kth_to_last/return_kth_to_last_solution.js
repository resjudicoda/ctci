const return_kth_to_last = function(list, k) {
  // iterate through and count length
  // then iterate again for length - k times and return
  let counter = 0;
  let current = list.head;
  while (current.next) {
    counter++;
    current = current.next;
  }
  current = list.head;
  for (let i = 0; i < (counter - k) + 1; i++) { // add 1 due to indexing
    current = current.next;
  }
  return current;
}
module.exports = return_kth_to_last