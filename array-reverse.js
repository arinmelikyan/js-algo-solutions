const arr = [1, 2, 3, 4];

function reverseArray(a) {
  const reversedArr = [];

  for(let i = a.length-1; i >= 0; i--) {
      reversedArr.push(a[i]);
  }

  return reversedArr;
}

console.log(reverseArray(arr));