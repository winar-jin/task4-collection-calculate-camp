function collect_same_elements(collection_a, object_b) {
  if (!collection_a || !object_b || !Array.isArray(collection_a) || Object.keys(object_b).length === 0) {
    return;
  }
  const valueArr = object_b.value;
  let result = [];
  collection_a.forEach(item => {
    if (valueArr.includes(item.key)) {
      result.push(item.key);
    }
  })
  return result;
}

module.exports = collect_same_elements;
