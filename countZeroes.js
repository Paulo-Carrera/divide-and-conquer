// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1 ;

//     while (left <= right){
//         const midPoint = Math.floor((left + right) / 2);

//         if(arr[midPoint] === target){
//             return midPoint;
//         }
//         else if (arr[midPoint] < target){
//             left = midPoint + 1 ;
//         }
//         else {
//             right = midPoint - 1 ;
//         }
//     }
//     return -1 ;
// }



function countZeroes(arr){
    let left = 0 ;
    let right = arr.length - 1 ;
    let firstZeroIndex = -1 ;

    while(left <= right){
        const midPoint = Math.floor((left + right) / 2);

        if (arr[midPoint]=== 0){
            firstZeroIndex = midPoint ;
            right = midPoint-1;     //  Move to the left half to find the first occurence
        }else {
            left = midPoint + 1 ;
        }
    }

    if (firstZeroIndex === -1){
        return 0; // No zeroes found
    }
    return arr.length - firstZeroIndex ;
}


console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0]));    // 4
console.log(countZeroes([0, 0, 0]));          // 3
console.log(countZeroes([1, 1, 1, 1]));       // 0
