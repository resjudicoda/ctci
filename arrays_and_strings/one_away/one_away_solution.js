const one_away = function(str1, str2) {
    // possible mutations are insert, remove, replace
    // check if two strings are 1 (or 0) mutations away
    if (!str1 || !str2) return false;
    if (typeof(str1) != 'string') return false;
    if (typeof(str2) != 'string') return false;
    // store lengths to avoid repeated call to .length
    let strOneLength = str1.length;
    let strTwoLength = str2.length;
    // helper function for use later
    function indexChecker(longString, shortString) {
        let longStringLength = longString.length;
        let shortStringLength = shortString.length;
        // return false if length more than 1 char apart
        if ((longStringLength - shortStringLength) > 1) {
            return false;
        }
        // loop through smaller string and see if current char is at current index or index +1 of larger string
        for (let j = 0; j < shortStringLength; j++) {
            if (shortString[j] != longString[j] && shortString[j] != longString[j + 1])
                return false;
        }
        return true;
    }
    // test if strings are same length
    if (strOneLength == strTwoLength) {
        // just count the number of non similar chars, there can be only one
        let notSameCount = 0;
        for (let i = 0; i < strOneLength; i++) {
            if (str1[i] != str2[i]) notSameCount++;
            if (notSameCount > 1) return false;
        }
    }
    // if not same length run helper function with longer string as first argument
    else if (strOneLength > strTwoLength) return indexChecker(str1, str2);
    else return indexChecker(str2, str1);
    // default return true
    return true;
}
module.exports = one_away
