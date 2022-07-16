/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const map = new Map();

    for (let c in s) {
        if (!map.has(s[c])) {
            map.set(s[c], 1);
        } else {
            map.set(s[c], map.get(s[c]) + 1);
        }
    }

    for (let c in t) {
        if (!map.has(t[c])) {
            return false;
        } else {
            if (map.get(t[c]) == 1) {
                map.delete(t[c]);
            } else {
                map.set(t[c], map.get(t[c]) - 1);
            }
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));
