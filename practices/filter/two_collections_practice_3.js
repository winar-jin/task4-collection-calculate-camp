'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  collection_a.forEach(ele => {
    collection_b.some(item => ele % item === 0) ?
      result.push(ele) : null;
  });
  return result;
}

module.exports = choose_divisible_integer;
