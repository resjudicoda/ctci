const string_compression = function(str) {
  // compress repeated chars into their counts
  // aabcccccaaa = a2b1c5a3
  if (!str) return false;
  if (typeof(str) != 'string') return false;
  let compression = '';
  // loop through string compressing while letters are same as index
  // save current index for next iteration
  // need two pointers, one to current and one to compression index
  let current = 0;
  let compressionIndex = 1;
  let count = 1;
  while (compressionIndex < str.length) {
    compression += str[current];
    while (str[current] == str[compressionIndex]) {
      count++;
      compressionIndex++;
    }
    compression += count;
    count= 1;
    current = compressionIndex;
    compressionIndex++;
  }
  return compression;
}
module.exports = string_compression
