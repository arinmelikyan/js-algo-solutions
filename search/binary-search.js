function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  
  return -1;
}

const arr = [1, 2, 3, 4, 5, 9, 10, 17, 19];
const x = 9;
const index = binarySearch(arr, x);

console.log(index);


