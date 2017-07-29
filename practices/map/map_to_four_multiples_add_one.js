'use strict';
var map_to_four_multiples_add_one = function (collection) {
  let result = Array.from(collection);
  return result.map(ele => ele * 4 + 1);
};

module.exports = map_to_four_multiples_add_one;
