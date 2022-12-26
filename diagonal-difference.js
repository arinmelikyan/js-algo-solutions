const arr = [[6,2,3], [14,5,10], [17,8,19]]

function diagonalDifference(arr) {
    // Write your code here
    let diagonal1 = 0, diagonal2 = 0;
  
    for(let i = 0; i < arr.length; i++){
        diagonal1 += arr[i][i];
        diagonal2 += arr[length -1 - i][i]
    }

    return Math.abs(diagonal1 - diagonal2);  
}

diagonalDifference(arr);
