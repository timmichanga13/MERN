// find the largest value in the pass, swap it to the end
// repeat ignoring the previous last position

const selectionSort = arr => {

    // if there is only one element or it is empty, it is already sorted
    if (arr.length <= 1){return arr;}

    // for loop to iterate through the total number of passes
    for (let i = 0; i < arr.length; i++) {
        
        // checking agains tthe value at position max (starts at 0)
        let max = 0;

        // for loop to check if any values are greater than the first
        for (let j = 1; j < arr.length - i; j++) {
            
            // check if value is bigger than max
            if (arr[j] > arr[max]){

                // set max to the value of that position
                max = j;
            }

        }
        // swap end position with max
        [arr[max], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[max]];
    }

    // returns the original array
    return arr;
}

console.log(selectionSort([23,12,18,22,21,1,13,25]));
console.log(selectionSort([23,-12,18,-22,21,1,13,25]));
console.log(selectionSort([23,12]));
console.log(selectionSort([25]));
console.log(selectionSort([]));