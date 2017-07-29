'use strict';

function get_integer_interval_2(number_a, number_b) {
  if (number_a === number_b) {
    return number_a % 2 === 0 ? [number_a] : [];
  }
  let result = [];
  for (let index = Math.min(number_a, number_b); index <= Math.max(number_a, number_b); index++) {
    index % 2 === 0 ? result.push(index) : null;
  }
  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_integer_interval_2;
