// Should return an array of object's keys from array of objects

const arr = [{a: 10, b: 20}, {c: 30}];

const flatArr = (arr) => {
  const obj = Object.assign({}, ...arr);

  return Object.keys(obj);
}

const result = flatArr(arr);
console.log(result);