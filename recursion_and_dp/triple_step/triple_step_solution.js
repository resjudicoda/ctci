// recursive
// const triple_step = function(n) {
//   if (n == 2) return 2;
//   if (n == 1 || n == 0) return 1;
//   return triple_step(n - 1) + triple_step(n - 2) + triple_step(n - 3);
// }

// memoized
const triple_step = function(n, memo={}) {
  if (n == 2) return 2;
  if (n == 1 || n == 0) return 1;
  if (!memo[n]) {
    memo[n] = triple_step(n - 1) + triple_step(n - 2) + triple_step(n - 3);
  }
  return memo[n]
}
module.exports = triple_step