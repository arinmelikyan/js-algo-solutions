function countSymbols(str, symbol) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      count++;
    }
  }
  return count;
}

const str = 'Count me, please, eee';

const result = countSymbols(str, 'e');

console.log(result);