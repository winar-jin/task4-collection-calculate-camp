'use strict';

function double_to_one(collection) {
  let result = [];
  collection.forEach(ele => {
    Array.isArray(ele) ?
      result.push(...ele) :
      result.push(ele);
  });
  return result;
}

module.exports = double_to_one;
