/**
 * 冒泡排序 - Bubble-Sort
 *
 * @description 遍历未排序的数组，比较相邻值大小并交换方向。
 */
function bubbleSort(arr) {
  var i;
  var j;
  var temp;
  var sArr;
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new TypeError('You can only pass Array as parameter');
  }
  sArr = arr.slice(); // shallow copy value of array
  for (i = 0; i < sArr.length; i++) {
    for (j = 0; j < sArr.length - i - 1; j++) {
      if (sArr[j] > sArr[j + 1]) {
        temp = sArr[j];
        sArr[j] = sArr[j + 1];
        sArr[j + 1] = temp;
      }
    }
  }
  return sArr;
}

module.exports = bubbleSort;
