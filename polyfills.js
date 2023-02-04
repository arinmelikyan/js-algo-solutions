Array.prototype.customForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

const arr = [1,2,3,4,5];

arr.customForEach(el => console.log(el));

Array.prototype.customFilter = function(callback) {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

const filteredArr = arr.customFilter(el => el < 3);

console.log(filteredArr);

Array.prototype.customMap = function(callback) {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

Array.prototype.customReduce = function(callback, accValue) {
  let acc = accValue;
  for(let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
}

const accumulatedValue = arr.customReduce((el, val) => el + val);

console.log(accumulatedValue);