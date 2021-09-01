const insertionSort = (arr) => {
    
    //for loop to iterate through each item in the array
    for (let i = 1; i < arr.length; i++) {

        // second loop to work backwards from where we are currently looking
        for (let j = i; j >0; j--) {

            // check if the value on the right is greater than the value on the left
            if (arr[j - 1] > arr[j]) {

                // swap the values if they are
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }

            // if not, we don't need to check anything else so we can end this loop
            else {
                break;
            }
        }
    }

    // return the array
    return arr;
}

const insertionRecur = (arr, pos = 1) => {
    if (pos > arr.length - 1){
        return arr;
    }
    else if (arr[pos] < arr[pos - 1]){
        [arr[pos-1], arr[pos]] = [arr[pos], arr[pos-1]];
        return insertionRecur(arr, pos - 1)
    }
    else {
        return insertionRecur(arr, pos + 1)
    }
}

const insertionMini=arr=>{for(let i=1;i<arr.length;i++){for(let j=i;j>0;j--){if(arr[j-1]>arr[j]){[arr[j-1],arr[j]]=[arr[j],arr[j-1]];}else{break;}}}return arr;}

console.log(insertionSort([23, 12, 18, 22, 21, 1, 13, 25]));
console.log(insertionSort([23, -12, 18, -22, 21, 1, 13, 25]));
console.log(insertionSort([23, 12]));
console.log(insertionSort([25]));
console.log(insertionSort([]));

console.log(insertionRecur([23, 12, 18, 22, 21, 1, 13, 25]));
console.log(insertionRecur([23, -12, 18, -22, 21, 1, 13, 25]));
console.log(insertionRecur([23, 12]));
console.log(insertionRecur([25]));
console.log(insertionRecur([]));

console.log(insertionMini([23, 12, 18, 22, 21, 1, 13, 25]));
console.log(insertionMini([23, -12, 18, -22, 21, 1, 13, 25]));
console.log(insertionMini([23, 12]));
console.log(insertionMini([25]));
console.log(insertionMini([]));