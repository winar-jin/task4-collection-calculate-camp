'use strict';

function choose_multiples_of_three(collection) {
  let result = Array.from(collection);
  return result.filter(ele => ele % 3 === 0);
}

module.exports = choose_multiples_of_three;
