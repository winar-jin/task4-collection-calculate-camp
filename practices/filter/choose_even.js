'use strict';

function choose_even(collection) {
  let result = Array.from(collection);
  return result.filter(ele => ele % 2 === 0);
}

module.exports = choose_even;
