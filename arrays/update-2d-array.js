function updateInventory(arr1, arr2) {
    let temp = [];
    for(let i=0; i<arr1.length; i++){
        temp.push(arr1[i][1]);
    }

    arr2.map(item => {
        if(!temp.includes(item[1])) {
            arr1.push(item);
        }
        if(temp.includes(item[1])){
            let index = temp.indexOf(item[1]);
            arr1[index][0] += item[0];
        }
    });

    return arr1.sort(function(a, b){
        if(a[1] > b[1]){
            return 1;
        } else if(a[1]< b[1]){
            return -1;
        } else {
          return 0
        }
    });
    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);