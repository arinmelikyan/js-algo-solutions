function sym(...args) {
  const diff = args.reduce((a, b) => [
    ...a.filter(i => !b.includes(i)),
    ...b.filter(j => !a.includes(j))
  ], []);

  return Array.from(new Set(diff)).sort((a, b) => a - b);
}

const a = sym([1, 2, 3], [5, 2, 1, 4], [1, 2, 8, 10]);

console.log(a);