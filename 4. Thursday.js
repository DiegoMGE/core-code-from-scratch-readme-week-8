/* ==========
* Exercise 1: Counting duplicates
========== */
function duplicateCount(text) {
    let txt = text.toLowerCase().split('');

    return txt.filter((word, index, text) => {
        return ((text.indexOf(word) !== index) && (text.lastIndexOf(word) === index))
    }).length;
}
duplicateCount('indivisibilities');

/* ==========
* Exercise 2: Encrypt this!
========== */
function encrypt(word) {
    if (word.length === 1) return word.charCodeAt(0);
    const charBackup = word[1];
    word = word.replace(word[0], word.charCodeAt(0));
    word = word.replace(charBackup, word[word.length - 1]);
    word = word.replace(/\w$/, charBackup);
    return word;
  }
  
  var encryptThis = function (text) {
    const textArray = text.split(' ');
    let result = '';
    textArray.forEach((w) => {
      result = result + ' ' + encrypt(w);
    });
    return result.trim();
  };

/* ==========
* Exercise 3: Valid parentheses
========== */
function validParentheses(parens) {
    return [...parens].reduce((a, c) => (a + c).replace('()', ''), '') === '';
  }

/* ==========
* Exercise 4: Convert string to camel case
========== */
function toCamelCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if((str[i - 1] === '-' || str[i-1] === '_')) {
            result += str[i].toUpperCase();
        } else if (str[i] != '-' && str[i] != '_') {
            console.log(str[i]);
            result += str[i];
            console.log(result);
        }
    }
    return result;
}