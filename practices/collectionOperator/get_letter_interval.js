'use strict';

function get_letter_interval(number_a, number_b) {
  if (number_a === number_b) {
    return [String.fromCharCode(number_a + 96)];
  }
  let result = [];
  for (let index = Math.min(number_a, number_b); index <= Math.max(number_a, number_b); index++) {
    result.push(String.fromCharCode(index + 96));
  }
  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_letter_interval;
