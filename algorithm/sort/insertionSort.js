/**
 * 插入排序 - Insertion Sort
 *
 * @description
 */
function insertionSort(arr) {
  var i;
  var j;
  var temp;
  var sArr;
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new TypeError('You can only pass Array as parameter');
  }
  sArr = arr.slice(); // shallow copy value of array
  for (i = 1; i < sArr.length; i++) {
    for (j = i + 1; j > 0; j--) {
      if (sArr[j - 1] > sArr[j]) {
        temp = sArr[j - 1];
        sArr[j - 1] = sArr[j];
        sArr[j] = temp;
      }
    }
  }
  return sArr;
}

module.exports = insertionSort;
