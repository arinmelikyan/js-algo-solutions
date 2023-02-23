function countMaxChar(str) {
  let charCount = {};
  let maxCount = 0;
  let maxChar = '';
  
  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }
  
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }
  
  return { maxChar, maxCount };
}

let result = countMaxChar("Hello World!");
console.log(`The most frequent character is "${result.maxChar}" with ${result.maxCount} occurrences.`);
