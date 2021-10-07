// bonus: in-order subsets
// return in an Array
// all possible permutations of a string


const inOrderSubsets = string => {

    // output starts with "" because we can always make "", we will push everyhting else into it
    let output = [""];
    // loop for number of letters in the substring
    for (let i = 1; i <= string.length; i++) {
        // loop for how many subsets we can make with that many letters
        for (let j = 0; j <= string.length - i; j++) {
            let temp = "";
            // loop to add the letter to the substring based on which letter we are starting at and how many letters we are adding to the substring
            for (let k = 0; k < i; k++) {
                temp += string[j+k];
            }
            // push the temp substring to the output
            output.push(temp);
        }
    }
    // return the output
    return output;
}

console.log(inOrderSubsets("cars"));
console.log(inOrderSubsets("abc"));
console.log(inOrderSubsets("a"));
console.log(inOrderSubsets(""));