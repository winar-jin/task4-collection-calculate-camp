function count_same_elements(collection) {
  if (!collection || !Array.isArray(collection)) {
    return;
  }
  let result = [];
  collection.forEach(item => {
    if (result.some(value => value.key === item)) {
      ++result.find(value => value.key === item).count;
    } else {
      result.push({
        key: item,
        count: 1
      });
    }
  });
  return result;
}

module.exports = count_same_elements;
