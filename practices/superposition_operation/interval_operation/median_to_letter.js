'use strict';
const compute_median = require('../../reduce/compute_median');
const get_letter = require('../../helper/helper');


function median_to_letter(collection) {
  return get_letter(Math.ceil(compute_median(collection)));
}

module.exports = median_to_letter;
