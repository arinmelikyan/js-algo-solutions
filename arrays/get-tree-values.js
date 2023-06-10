const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3 }, 
        { value: 4 }
      ]
    },
    {
      value: 5,
      children: [
        { value: 6 }, 
        { value: 7 }
      ]
    }
  ]
}

function getTreeValues(tree) {
  const stack = [tree];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.value) {
      result.push(node.value);
    }

    if (node.children?.length) {
      stack.push(...node.children);
    }
  }

  return result;
}

const treeValues = getTreeValues(tree);

console.log(treeValues);