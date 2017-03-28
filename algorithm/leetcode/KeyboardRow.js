/**
 * @description Given a List of words,
 * return the words that can be typed using letters of alphabet on
 * only one row's of American keyboard.
 *
 * @example Input: ["Hello", "Alaska", "Dad", "Peace"
 *          Output: ["Alaska", "Dad"]
 *
 * @param  {String[]} words
 * @return {String[]}
 */

var findWords = function (words) {
  return words.filter(function (word) {
    return /^[qwertyuiop]*$/i.test(word) || /^[asdfghjkl]*$/i.test(word) || /^[zxcvbnm]*$/i.test(word);
  });
};

module.exports = findWords;
