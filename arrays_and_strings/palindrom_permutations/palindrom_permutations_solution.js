const palindrom_permutations = function(str) {
    if (!str || typeof(str) != 'string') return false
    // struggled not to brute force this one, looked to answer for guidance
    // palindromes can only have exactly 0 or 1 odd letters
    // so count em up and return false if it fails
    let cache = {};
    for (const letter of str) {
        if (letter != ' ') {
            if (!cache[letter]) cache[letter] = 1;
            else cache[letter] += 1;
        }
    }
    let oddCount = 0;
    for (const key of Object.keys(cache)) {
        if (cache[key] % 2 != 0) oddCount++;
    }
    if (oddCount > 1) return false;
    return true
}
module.exports = palindrom_permutations
