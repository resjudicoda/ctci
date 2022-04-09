const string_rotation = function(str1, str2) {
  if (!str1 || !str2) return false;
  if (typeof str1 != 'string' || typeof str2 != 'string') return false;
  let length = str1.length;
  if (length !== str2.length) return false;
  let halfIndex = Math.floor(length / 2);
  // make a substring of the first half of str1
  let firstHalf = '';
  for (let i = 0; i < halfIndex; i++) {
    firstHalf += str1[i]
  }
  // test if the substring is in str2, which will tell us whether
  // we are dealing with the first half of all possible rotations
  // or the second half of all possible rotations
  let workForwards = str2.includes(firstHalf);
  // create array of str1 for easier mutability
  let arr1 = str1.split('');
  // shift array around and test for equality with str2
  if (workForwards) {
    for (let j = 0; j <= halfIndex; j++) {
      let temp = arr1.pop();
      arr1.unshift(temp);
      let rotated = arr1.join('')
      if (rotated == str2) return true;
    }
  }
  else if (!workForwards) {
    for (let k = 0; k <= halfIndex; k++) {
      let temp = arr1.shift();
      arr1.push(temp);
      let rotated = arr1.join('')
      if (rotated == str2) return true;
    }
  }
  return false;
}
module.exports = string_rotation