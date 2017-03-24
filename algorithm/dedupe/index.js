/* eslint-disable no-unused-vars */
/**
 * create a duplicate-free version of the array
 *
 * @param {Array}   arr  - random array
 * @param {Boolean} sort - should sort the result
 *
 * @return {Array} uniqArr - return a new duplicate-free version of the array
 */
function dedupe(arr) {
  var i;
  var uniqArr = [];
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('You can only pass Array as parameter');
  }
  for (i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

module.exports = dedupe;
