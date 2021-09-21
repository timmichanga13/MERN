// conver a decimal to a binary

// divide by 2
// get the integer quotient for the next iteration
// get the remainder for the binary digit
// repeat the steps until the quotient is equal to 0

const decimalToBinary = decimal => {
    // create blank output to store binary
    let output = '';
    // quotient = Math.floor(decimal / 2), run a while loop while the quotient is greater than 0, and once when it is equal to 0 (there is a break once it is 0)
    while (Math.floor(decimal / 2) >= 0){
        // remainder = decimal - 2 * quotient;
        if (decimal - 2 * Math.floor(decimal / 2) != 0){
            // if the remainder is 1, add a 1 to the front of the binary output
            output = "1" + output;
        }
        else{
            // else the output is 0, put a 0 at the beginning of the output
            output = "0" + output;
        }
        // break if the quotient is 0 (we are done and don't need to loop any more)
        if (Math.floor(decimal / 2) == 0){break};
        // update the value of decimal that we are looking at in the loop
        decimal = Math.floor(decimal / 2);
    }
    // convert the output to an integer just in case
    return parseInt(output);
}

console.log(decimalToBinary(13));
console.log(decimalToBinary(174));
console.log(decimalToBinary(2));
console.log(decimalToBinary(1));
console.log(decimalToBinary(0));




// const dec2binary= (num)=>{
//     result="";
//     let val = num;
//     while (val > 0){
    
//         val = Math.floor(val / 2);
//         result = (val % 2) + result
//     }
//     return result
// }

// condensed version without modulo
const decimalToBinaryCondensed= (num)=>{
    // blank output
    result="";
    // while the valuse we are manipulating is greater than 0
    while (num >= 0){
        // push the binary digit to the front of the output (num - 2 * Math.floor(num / 2) will give the binary of 0 or 1)
        result = (num - 2 * Math.floor(num / 2)) + result;
        // break if we are at 0
        if (num == 0){break};
        // update the value we are manipulating
        num = Math.floor(num / 2);
    }
    // convert the output to an integer just in case
    return parseInt(result);
}

console.log(decimalToBinaryCondensed(13));
console.log(decimalToBinaryCondensed(174));
console.log(decimalToBinaryCondensed(2));
console.log(decimalToBinaryCondensed(1));
console.log(decimalToBinaryCondensed(0));