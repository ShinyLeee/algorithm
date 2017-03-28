/**
 * @description Write a function that takes a string as input and returns the string reversed.
 * @example Given s = "hello", return "olleh".
 *
 * @param  {String} s
 * @return {String}
 */

var reverseString = function (s) {
  return s.split('').reverse().join('');
};

module.exports = reverseString;
