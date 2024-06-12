function findRotationCount(arr){
    let left = 0 ;
    let right = arr.length - 1 ;

    while(left <= right){
        // If arr is already sorted return 0
        if (arr[left] <= arr[right]){
            return left ;
        }

        const midPoint = Math.floor((left + right) / 2);

        // check if midpoint is pivot index 
        const next = (midPoint + 1) % arr.length ; 
        const prev = (midPoint + arr.length - 1) % arr.length ;

        if(arr[midPoint] <= arr[next] && arr[midPoint] <= arr[prev]){
            return midPoint ;
        }

        //  Update left / right pointers based on conditions
        if(arr[left] <= arr[midPoint]){
            left = midPoint + 1 ;
        }else{
            right = midPoint - 1 ;
        }
    }
    return 0 ;// if no rotations found 
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
console.log(findRotationCount([7, 9, 11, 12, 15])) // 0
