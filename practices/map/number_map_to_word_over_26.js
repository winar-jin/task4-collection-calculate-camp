'use strict';
const get_letter = require('../helper/helper');

var number_map_to_word_over_26 = function (collection) {
  let result = Array.from(collection);
  return result.map(ele => get_letter(ele));
};

module.exports = number_map_to_word_over_26;
