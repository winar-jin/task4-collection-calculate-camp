'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a == null || collection_b == null) {
    return fale;
  }
  if (collection_a.length !== collection_b.length) {
    return false;
  }
  return collection_a.every((ele, index) => ele === collection_b[index]);
}

module.exports = compare_collections;
