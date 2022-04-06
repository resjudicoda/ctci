const is_unique = function(string) {
    let cache = {};
    for (const letter of string) {
        if (letter != ' ') {
            if (!cache[letter]) cache[letter] = 1;
            //else cache[letter] += 1;
            else return false
        }
        
    }
    return true
}



module.exports = is_unique