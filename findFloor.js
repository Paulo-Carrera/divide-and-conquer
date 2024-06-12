
function findFloor(arr , x){
    let left = 0 ;
    let right = arr.length - 1 ;
    let floor = -1 ;

    while(left <= right){
        const midPoint = Math.floor((left + right) / 2) ;

        if (arr[midPoint] === x){
            return arr[midPoint] ;
        }else if (arr[midPoint] < x){
            floor = arr[midPoint] ;     //  Update floor value 
            left = midPoint + 1 ;
        }else {
            right = midPoint - 1 ; 
        }
    }
    //  Check if floor exists within array bounds 
    if (right < 0){
        return floor ;
    }else{
        return arr[right] ;
    }
}





console.log(findFloor([1,2,8,10,10,12,19], 9)); //  8
console.log(findFloor([1,2,8,10,10,12,19], 20)); //  19
console.log(findFloor([1,2,8,10,10,12,19], 0)); //  -1