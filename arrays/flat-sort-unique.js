const arr = [4, 9, 0, [1, 5, 2], 3, 5, 2, [2, 9, 8, [10, 6, 6]], 7];

function flatSortUnique(arr) {
  const flatten = (arr) => {
    const flat = [];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flat.push(...flatten(item));
      } else {
        flat.push(item);
      }
    });

    return flat;
  }

  const flattenArr = flatten(arr);

  flattenArr.sort((a, b) => a - b);

  const uniqueValues = new Set(flattenArr);

  return [...uniqueValues];
}

console.log(flatSortUnique(arr));