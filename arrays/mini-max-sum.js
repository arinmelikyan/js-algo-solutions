const arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    const largestSum = arr.slice(1).reduce((acc, i) => acc + i);
    arr.reverse();
    const smallestSum = arr.slice(1).reduce((acc, i) => acc + i);

    console.log(`${largestSum} ${smallestSum}`)
}

miniMaxSum(arr);
