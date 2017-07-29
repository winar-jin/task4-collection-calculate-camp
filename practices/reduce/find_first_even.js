'use strict';

function find_first_even(collection) {
  let evenArr = collection.filter(ele => ele % 2 === 0);
  return evenArr.shift();
}

module.exports = find_first_even;
