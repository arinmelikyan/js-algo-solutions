function commonChars(names) {
  if (!names.length) {
    return [];
  }
  let chars = new Set(names[0]);
  for (let i = 1; i < names.length; i++) {
    let nameChars = new Set(names[i]);
    chars = new Set([...chars].filter(char => nameChars.has(char)));
  }
  const result = Array.from(chars);
  return result;
}

const a = commonChars(['leslie', 'nellie', 'stella'])
console.log(a);