'use strict';
const get_letter = require('../helper/helper');

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  for (let index = Math.min(number_a, number_b); index <= Math.max(number_a, number_b); index++) {
    result.push(get_letter(index));
  }
  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_letter_interval_2;
