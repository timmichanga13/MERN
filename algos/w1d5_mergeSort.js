const mergeSort=arr=>{
    // split the array in half until it gets to one element
    // if it can't be split, call mergeJoin to combine the elements
    
    // stop splitting if the array has one or 0 elements
    if (arr.length <=1){return arr;}
    
    // if it can be split in half, split it and then merge the split sides
    else {
        const left = arr.slice(0, Math.ceil(arr.length/2));
        const right = arr.slice(-Math.floor(arr.length/2));
        return mergeJoin(mergeSort(left), mergeSort(right));
    }
}

const mergeJoin = (arr1, arr2, pos1 = 0, pos2 = 0, result = []) => {
    if (pos1 > arr1.length - 1 && pos2 > arr2.length - 1) {
        return result;
    }
    else {
        if (pos1 <= arr1.length - 1 && pos2 <= arr2.length - 1) {
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
        else if (pos1 == arr1.length && pos2 <= arr2.length - 1) {
            result.push(arr2[pos2]);
            return mergeJoin(arr1, arr2, pos1, pos2 + 1, result);
        }
        else {
            result.push(arr1[pos1]);
            return mergeJoin(arr1, arr2, pos1 + 1, pos2, result);
        }
    }
}

console.log(mergeSort([4, 7, 1, 2, 5, 0, 9, 6]));
console.log(mergeSort([1, 2, 6, 3, 8, 9, 4]));
console.log(mergeSort([4, 3, 3, 7, 3, 6]));
console.log(mergeSort([4, 3, 3, 7, 3, 6, 4]));
console.log(mergeSort([6]));
console.log(mergeSort([]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([1, 2, 3, 4]));
