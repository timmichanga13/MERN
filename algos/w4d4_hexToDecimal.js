// hex to decimal



const hexToDecimalArray = hex => {
    // index to get singular hex -> decimal conversion (based on index)
    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    // output starts at 0 (is a number, we will be adding to it)
    let decimal = 0;
    // convert input to string in case user accidenatlly puts in a number
    hex = String(hex);
    // for loop to go thru each element of the hex input
    for (let i = hex.length - 1; i >= 0; i--) {
        // add the mathematical calculation to the output
        decimal += (hexValues.indexOf(hex[i])) * (16 ** (hex.length - 1 - i));
    }
    // return the decimal value
    return decimal;
}

// console.log(hexToDecimalArray('0'));
// console.log(hexToDecimalArray('1'));
// console.log(hexToDecimalArray('A'));
// console.log(hexToDecimalArray('F'));
// console.log(hexToDecimalArray('2B3'));
// console.log(hexToDecimalArray('CCC'));
// console.log(hexToDecimalArray('3B'));

// console.log(hexToDecimalArray(0));
// console.log(hexToDecimalArray(1));


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

// console.log(inOrderSubsets("cars"));
// console.log(inOrderSubsets("abc"));
// console.log(inOrderSubsets("a"));
// console.log(inOrderSubsets(""));


// const inOrderSubsetsRecursive = (string, subLength = 1, subSets = 0, subPos = 0, temp = "", output = [""]) => {
//     if (subLength > string.length){
//         return output
//     }
//     else if (subPos == subLength){

//     }

// }
