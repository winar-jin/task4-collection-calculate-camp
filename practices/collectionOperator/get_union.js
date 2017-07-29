'use strict';

function get_union(collection_a, collection_b) {
  let result = Array.from(collection_a);
  collection_b.forEach(element => {
    result.includes(element) ? null : result.push(element);
  });
  return result;
}

module.exports = get_union;
