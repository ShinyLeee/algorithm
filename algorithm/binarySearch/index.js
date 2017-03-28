/**
 * 二分查找 - Binary-Search recursive
 *
 * @description 针对有序数组递归地进行折半查找。
 *
 * @param {Array}  arr   - source sorted Array
 * @param {Number} value - wait find value
 *
 * @return true - value exist
 *         false- value not exist
 */
function recursive(arr, value) {
  if (arr.length < 1) {
    return false;
  }

  var pivotIndex = Math.floor(arr.length / 2);
  var pivotValue = arr[pivotIndex];
  var left = arr.slice(0, pivotIndex);
  var right = arr.slice(pivotIndex + 1, arr.length);

  if (value < pivotValue) {
    return recursive(left, value);
  }
  if (value > pivotValue) {
    return recursive(right, value);
  }

  return true;
}

/**
 * 二分查找 - Binary-Search plain
 *
 * @description 针对有序数组进行折半查找。
 *
 * @param {Array}  arr   - source sorted Array
 * @param {Number} value - wait find value
 *
 * @return true - value exist
 *         false- value not exist
 */
function plain(arr, value) {
  var low = 0;
  var high = arr.length;

  while (low <= high) {
    var pivotIndex = Math.floor((low + high) / 2);
    var pivotValue = arr[pivotIndex];

    if (value === pivotValue) {
      return true;
    } else if (value < pivotValue) {
      high = pivotIndex - 1;
    } else {
      low = pivotIndex + 1;
    }
  }
  return false;
}

var binarySearch = {
  recursive: recursive,
  plain: plain
};

module.exports = binarySearch;
