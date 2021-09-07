const mergeSort = arr => {



}

const mergeSplit = arr => {

}

const mergeJoin = (arr1, arr2, pos1 = 0, pos2 = 0, result = []) => {
    // look at first position of each array, see which one is smaller
    // push smaller to result array
    // look at first index of the one you didn't use, next index of the one you used
    // keep going until both positions are at arr.length
    if (pos1 > arr1.length - 1 && pos2 > arr2.length - 1) {
        return result;
    }
    else {
        // if both arrays are not at the end, compare the values
        if (pos1 <= arr1.length - 1 && pos2 <= arr2.length - 1) {
        // see which value is smaller, push it to results, then call the function again, incrementing the position that was pushed
            if (arr1[pos1] < arr2[pos2]) {
                result.push(arr1[pos1]);
                return mergeJoin(arr1, arr2, pos1 + 1, pos2, result);
            }
            else if (arr1[pos1] > arr2[pos2]) {
                result.push(arr2[pos2]);
                return mergeJoin(arr1, arr2, pos1, pos2 + 1, result);
            }
            else {
                result.push(arr1[pos1]);
                result.push(arr2[pos2]);
                return mergeJoin(arr1, arr2, pos1 + 1, pos2 + 1, result);
            }
        }
        // if array 1 has gone through all of its values, push the rest of array 2
        else if (pos1 == arr1.length && pos2 <= arr2.length - 1) {
            result.push(arr2[pos2]);
            return mergeJoin(arr1, arr2, pos1, pos2 + 1, result);
        }
        // if array 2 has gone through all of its values, push the rest of array 1
        else {
            result.push(arr1[pos1]);
            return mergeJoin(arr1, arr2, pos1 + 1, pos2, result);
        }
    }
}

console.log(mergeJoin([2, 4, 6, 8], [1, 3, 9, 11]));
console.log(mergeJoin([2, 4, 6, 7, 8, 13, 17], [1, 3, 9, 11]));
console.log(mergeJoin([1, 3, 9, 11], [2, 4, 6, 7, 8, 13, 17]));
console.log(mergeJoin([2, 4, 6, 8], [1, 6, 8, 11]));
console.log(mergeJoin([2, 4, 6, 11], [1, 3, 9, 11]));
console.log(mergeJoin([2, 4, 6, 11], [1]));
console.log(mergeJoin([], [1]));




// console.log(mergeSort([23, 12, 18, 22, 21, 1, 13, 25]));
// console.log(mergeSort([23, -12, 18, -22, 21, 1, 13, 25]));
// console.log(mergeSort([23, 12]));
// console.log(mergeSort([11, 12, 13]));
// console.log(mergeSort([25]));
// console.log(mergeSort([]));


