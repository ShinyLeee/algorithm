/**
 * @description return a throttled function that only invokes
 *              `func` at most once per every `wait` milliseconds.
 *
 * @param {Function}  func - The function wait for throttled
 * @param {Number}    wait - The number of milliseconds to trigger `func`
 * @param {Boolean}   options - Should we trigger function on the `leading` edge and `trailing` edge
 *
 * @return {Function} throttled - Return the new throttled function
 */
function throttle(func, wait, options) {
  var timerId;
  var result;
  var previous = 0;
  var defaultOptions = {
    leading: true,
    trailing: true
  };
  options = typeof options !== 'undefined' ? options : defaultOptions; // eslint-disable-line no-param-reassign

  var getNow = Date.now || function () {
    return new Date().getTime();
  };

  var delayed = function (context, args) {
    previous = options.leading === false ? 0 : getNow();
    timerId = null;
    result = func.apply(context, args);
  };

  function throttled(args) {
    var that = this;
    var current = getNow();
    if (!previous && options.leading === false) previous = current;
    var timeSpan = current - previous;
    if (timeSpan >= wait) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      previous = current;
      result = func.apply(that, args);
    } else if (!timerId && options.trailing !== false) {
      timerId = setTimeout(function () {
        return delayed(that, args);
      }, Math.max(wait - timeSpan, 0)); // make sure timeout greater than 0
    }
    return result;
  }

  throttled.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  };

  return throttled;
}

module.exports = throttle;
