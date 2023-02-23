const arr = [9, 3, 5, 8, 1, 2, 4, 6, 7];

const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++){
   for(let j = 0; j < ( arr.length - i -1 ); j++){
     if(arr[j] > arr[j+1]){
       let temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 console.log(arr);
}

bubbleSort(arr);