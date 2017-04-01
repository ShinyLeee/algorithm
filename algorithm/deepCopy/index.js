/**
 * @description Deep copy a Object
 *
 * @param {Object}  obj - source object
 * @param {Boolean} useJSON - should we use JSON to copy
 *
 * @return {Object} clonedObject - return a new cloned object
 */
function deepCopy(obj, useJSON) {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (useJSON) {
    return JSON.parse(JSON.stringify(obj));
  }
  var clonedObject;
  var Constructor = obj.constructor;
  switch (Constructor) {
    case RegExp:
      clonedObject = new Constructor(obj);
      break;
    case Date:
      clonedObject = new Constructor(obj.getTime());
      break;
    default:
      clonedObject = new Constructor();
      break;
  }
  for (var prop in obj) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      clonedObject[prop] = deepCopy(obj[prop]);
    }
  }
  return clonedObject;
}

module.exports = deepCopy;
