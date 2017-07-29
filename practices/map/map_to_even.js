'use strict';

function map_to_even(collection) {
  let result = Array.from(collection);
  return result.map(ele => ele * 2);
}
module.exports = map_to_even;
