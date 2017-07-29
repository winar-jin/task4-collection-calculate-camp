'use strict';
var number_map_to_word = function (collection) {
  let result = Array.from(collection);
  return result.map(ele => String.fromCharCode(ele + 96));
};

module.exports = number_map_to_word;
