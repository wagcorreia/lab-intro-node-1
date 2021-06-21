function sumOfDifferences(arr) {
    if (arr.length <= 1){
     return 0
   }
   arr.sort((a, b) => b - a)
   
   let difResult = 0; 
   let total = 0;
   
   for(let i = 0; i < arr.length - 1; i++){
     difResult = arr[i] - arr[i+1] 
     total = total + difResult 
   }
   return total
 }