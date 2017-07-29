'use strict';

function collect_last_element(collection) {
  let temp = Array.from(collection);
  return temp.pop();
}

module.exports = collect_last_element;
