const { getArray } = require("./hackUtils");

const testArr = getArray(10, 10);
console.log(binSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170], 140));

function binSearch(arr, searchVal){
    let minPos = 0;
    let maxPos = arr.length-1;
    let midPos = Math.ceil((maxPos-minPos)/2)
    if (arr[0] === searchVal) {
        return 0;
    } else if(arr[arr.length] === searchVal) {
        return arr.length - 1;
    }
    while(minPos<maxPos){
        let midVal = arr[midPos]

        if(midVal === searchVal){
            return midPos;
        } else if(midVal > searchVal){
            maxPos = midPos+1;
            midPos = Math.ceil((maxPos-minPos)/2);
        } else if(midVal < searchVal){
            minPos = midPos-1;
            midPos = midPos + Math.ceil((maxPos-minPos)/2);
        }
    } 
}


