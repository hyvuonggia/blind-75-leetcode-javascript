/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (start < end && !isAlphaNumeric(s[start])) {
            start++;
        }
        while (start < end && !isAlphaNumeric(s[end])) {
            end--;
        }
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

const isAlphaNumeric = (c) => {
    let code = c.charCodeAt(0);
    if (
        (code >= 97 && code <= 122) ||
        (code >= 65 && code <= 90) ||
        (code >= 48 && code <= 57)
    ) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
