// union sorted array
// take 2 arrays as inputs
// make sure all numbers from both arrays are in the result (greater # of repetitions)

const unionSortRecursive = (arr1, arr2, runner1 = 0, runner2 = 0, output = []) => {

    // return teh output if we are at the end of both arrays
    if (runner1 >= arr1.length && runner2 >= arr2.length) {
        return output;
    }

    //if the values are equal, push to output and increase both runners
    else if (arr1[runner1] == arr2[runner2]) {
        output.push(arr1[runner1]);
        return unionSortRecursive(arr1, arr2, runner1 + 1, runner2 + 1, output);
    }

    // if teh first number is smaller OR if we have finished going through the second list, push the first value and increase teh runner
    else if ((arr1[runner1] < arr2[runner2]) || (runner2 == arr2.length)) {
        output.push(arr1[runner1]);
        return unionSortRecursive(arr1, arr2, runner1 + 1, runner2, output);
    }

    // if teh second number is smaller OR if we have finished going through the first list, push the second value and increase teh runner
    else if ((arr1[runner1] > arr2[runner2]) || (runner1 == arr1.length)) {
        output.push(arr2[runner2]);
        return unionSortRecursive(arr1, arr2, runner1, runner2 + 1, output);
    }

}

// console.log(unionSortRecursive([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7]); // union is [1,2,2,2,6,6,7,7]
// console.log(unionSortRecursive([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 8])); // union is [1,2,2,2,6,6,7,7, 10]

// console.log(unionSortRecursive([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 9])); // union is [1,2,2,2,6,6,7,7,9]
// console.log(unionSortRecursive([1, 2, 2, 2, 7, 10], [2, 2, 6, 6, 7, 7, 10])); // union is [1,2,2,2,6,6,7,7,7]
// console.log(unionSortRecursive([1, 2, 2, 2, 7, 11], [2, 2, 6, 6, 7, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]

// console.log(unionSortRecursive([1, 2, 2, 2, 7, 7, 12], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,14]
// console.log(unionSortRecursive([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 13])); // union is [1,2,2,2,6,6,7,7,7]
// console.log(unionSortRecursive([1, 2, 2, 2, 7, 7, 14], [2, 2, 6, 6, 7, 13])); // union is [1,2,2,2,6,6,7,7,7]


const unionSort = (arr1, arr2) => {

    // establish blank array for the output
    let output = [];

    // focus on the list with the largest number at the end (it's the last thing we need to add), swap lists if necessary
    if (arr2[arr2.length - 1] > arr1[arr1.length - 1]) {
        [arr1, arr2] = [arr2, arr1];
    }

    // establish runner for second array, start at index 0
    let j=0;

    // for loop to iterate thru list we know has the last value
    for (let i = 0; i < arr1.length; i++) {

        // if values are equal, push one and increase both runners
        if (arr1[i] == arr2[j]) {
            output.push(arr1[i]);
            j++
        }

        // if arr1 value is smaller, push it and let i increment. Also has the catch to make sure that you push the rest of arr1 if we've reached teh end of arr2
        else if ((arr1[i] < arr2[j]) || (j==arr2.length)){
            output.push(arr1[i]);
        }

        // else arr2 is smaller, so push it and increment j but don't let i increase
        else {
            output.push(arr2[j]);
            j++;
            i--;
        }
    }
    return output;
}

console.log(unionSort([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7]
console.log(unionSort([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 9])); // union is [1,2,2,2,6,6,7,7,9]
console.log(unionSort([1, 2, 2, 2, 7, 7, 14], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,14]
console.log(unionSort([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 10])); // union is [1,2,2,2,6,6,7,7, 10]
console.log(unionSort([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]
console.log(unionSort([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]


const unionRemix = (arr1, arr2) => {

    let output = [];
    let runner1 = 0;
    let runner2 = 0;

    while (runner1 < arr1.length || runner2 < arr2.length){

        if (arr1[runner1] == arr2[runner2]) {
            output.push(arr1[runner1]);
            runner1++;
            runner2++;
        }

        else if ((arr1[runner1] < arr2[runner2]) || (runner2 == arr2.length)){
            output.push(arr1[runner1]);
            runner1++;
        }

        else if ((arr1[runner1] > arr2[runner2]) || (runner1 == arr1.length)){
            output.push(arr2[runner2]);
            runner2++;
        }

    }
    return output;
}


// console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7]
// console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 9])); // union is [1,2,2,2,6,6,7,7,9]
// console.log(unionRemix([1, 2, 2, 2, 7, 7, 14], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,14]
// console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 10])); // union is [1,2,2,2,6,6,7,7, 10]
// console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]
// console.log(unionRemix([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]