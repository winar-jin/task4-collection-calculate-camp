'use strict';
const choose_no_repeat_number = require('../filter/choose_no_repeat_number');
const doubleTone = require('./double_dimensional_array_to_one_1');

function double_to_one(collection) {
  let result = doubleTone(collection);
  return choose_no_repeat_number(result);
}

module.exports = double_to_one;
