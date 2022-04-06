const URLify = function(str, num) {
    if (!str || !num) return false;
    if (typeof(num) == 'string') {
        num = Number(num);
    }
    let url = '';
    for (let i = 0; i < num; i++) {
        if (str[i] == ' ') url += '%20';
        else url += str[i];
    }
    return url;
}
module.exports = URLify
