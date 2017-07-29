'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  collection_b.forEach(element => {
    collection_a.includes(element) ? result.push(element) : null;
  });
  return result;
}

module.exports = get_intersection;
