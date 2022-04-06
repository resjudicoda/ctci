const permutations = function(str1, str2) {
    if (arguments.length != 2) return false
    if (str1.length != str2.length) return false
    let cache = {}
    for (const letter of str1) {
        if (!cache[letter]) cache[letter] = 1;
        else cache[letter] +=1; 
    }
    for (const letter of str2) {
        if (!cache[letter]) cache[letter] = 1;
        else cache[letter] -= 1;
    }
    for (const key of Object.keys(cache)) {
        if (cache[key] != 0) return false
    }
    return true
}
module.exports = permutations
