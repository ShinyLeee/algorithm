/**
 * 快速排序 - Quick-Sort
 *
 * @description 选择基准点递归地进行排序。
 */
function quickSort(arr) {
  var i;
  var left = [];
  var right = [];
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new TypeError('You can only pass Array as parameter');
  }
  if (arr.length <= 1) return arr;

  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

module.exports = quickSort;
