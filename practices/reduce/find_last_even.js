'use strict';

function find_last_even(collection) {
  let evenArr = collection.filter(ele => ele % 2 === 0);
  return evenArr.pop();
}

module.exports = find_last_even;
