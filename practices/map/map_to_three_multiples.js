'use strict';
var map_to_three_multiples = function (collections) {
  let result = Array.from(collections);
  return result.map(ele => ele * 3);
};

module.exports = map_to_three_multiples;
