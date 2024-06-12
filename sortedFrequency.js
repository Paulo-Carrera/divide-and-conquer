function sortedFrequency(arr, num){
    // function to find the first occurence
    function findFirstOccurence(arr, num){
        let left = 0 ;
        let right = arr.length - 1 ;
        let firstIndex = -1 ;

        while(left <= right){
            const midPoint = Math.floor((left + right) / 2 );

            if (arr[midPoint] === num) {
                firstIndex = midPoint ;
                right = midPoint - 1 ;      // continue search in left half
            }else if (arr[midPoint] < num ){
                left = midPoint + 1 ;
            }else{
                right = midPoint - 1 ;
            }
        }
        return firstIndex ;
    }

    // function to find the last occurence
    function findLastOccurence(arr, num){
        let left = 0 ;
        let right = arr.length - 1 ;
        let lastIndex = -1 ;

        while(left <= right){
            const midPoint = Math.floor((left + right) / 2 );

            if (arr[midPoint]=== num){
                lastIndex = midPoint;
                left = midPoint + 1;        // continue search in right half
            }else if (arr[midPoint] < num){
                left = midPoint + 1 ;
            }else{
                right = midPoint - 1 ;
            }
        }
        return lastIndex ;
    }

    //  finding the first and last occurences of num
    const firstIndex = findFirstOccurence(arr, num);
    if (firstIndex === -1 ){
        return -1 // num not found
    }
    const lastIndex = findLastOccurence(arr, num);

    // calculate frequency of num 
    return lastIndex - firstIndex + 1 ;
}


console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1
