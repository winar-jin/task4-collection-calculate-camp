'use strict';

function choose_no_repeat_number(collection) {
  let result = new Set();
  collection.forEach(ele => result.add(ele));
  return Array.from(result);
}

module.exports = choose_no_repeat_number;
