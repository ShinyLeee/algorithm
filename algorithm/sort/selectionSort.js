/**
 * 选择排序 - Selection Sort
 *
 * @description 遍历未排序的数组，标记其中的最小值放置到最前方，以此类推。
 */
function selectionSort(arr) {
  var i;
  var j;
  var min;
  var temp;
  var sArr;
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new TypeError('You can only pass Array as parameter');
  }
  sArr = arr.slice(); // shallow copy value of array
  for (i = 0; i < sArr.length - 1; i++) {
    min = i;
    for (j = i + 1; j < sArr.length; j++) {
      if (sArr[j] < sArr[min]) {
        min = j; // save min index when later value less than previous saved min value
      }
    }
    temp = sArr[i];
    sArr[i] = sArr[min];
    sArr[min] = temp;
  }
  return sArr;
}

module.exports = selectionSort;
