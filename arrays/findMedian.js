function findMedian(arr) {
    let arrLength = arr.length;

    for(let i = 0; i < parseInt(arrLength); i++){
        let current_value = arr[i];
        
        for(let j = 0; j < parseInt(arrLength); j++) {
            let match_value = arr[j];
            if(parseInt(arr[i]) < parseInt(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    let media_index = Math.ceil(parseInt(arrLength-1)/2);
    console.log(arr[media_index]);
}

findMedian([0,1,2,3,4,7, 5])