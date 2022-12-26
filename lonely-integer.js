const arr = [1, 9, 2, 5, 1, 5, 2]

function lonelyInteger(a) {
    // Write your code here
    const unique = a.filter(function(value){
        return a.indexOf(value) === a.lastIndexOf(value)
    })
    
    return unique[0];
}

lonelyInteger(arr);