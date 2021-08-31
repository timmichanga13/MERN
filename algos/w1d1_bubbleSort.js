// compare two elements at a time, swap where necessary
// when the last number is in the correct spot, run again ignoring the last spot

function bubbleSort(arr){

    // if there is only one element or it is empty, it is already sorted
    if (arr.length <= 1){return arr;}

    // for loop to iterate through the total number of passes (big picture)
    for (let i = 0; i < arr.length; i++) {

        // for loop to iterate through getting the last element to be max (little picture)
        for (let j = 1; j < arr.length - i; j++) {

            // swap elements if the one on the left is bigger
            if (arr[j-1] > arr[j]){

                // og method to swap variables with a temp placeholder
                    // var temp = arr[j];
                    // arr[j] = arr[j-1];
                    // arr[j-1] = temp;

                // more efficient method to swap variables
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }

    // returns the original array
    return arr;
}

console.log(bubbleSort([23,12,18,22,21,1,13,25]));
console.log(bubbleSort([23,-12,18,-22,21,1,13,25]));
console.log(bubbleSort([23,12]));
console.log(bubbleSort([25]));
console.log(bubbleSort([]));