// convert binary to a decimal
// input binary
// output decimal

const binaryToDecimal = binary => {
    // create output, start at 0 since we are adding numbers together
    let output = 0;
    // binary starts at 2^0, we will be incrementing from here
    let exponent = 0;
    // make sure the binary is a string in order to be able to look at its length and elements at a certain index
    let binaryString = String(binary);
    // for loop to start at the end of the binary
    for (let i = binaryString.length - 1; i >= 0; i--) {
        // convert the element of the binary to the decimal value and add to the output
        // can also do (base**exponent) for exponents
        output += (parseInt(binaryString[i]) * (Math.pow(2, exponent)));
        // increment the exponent
        exponent ++;
    }
    return output;
}

console.log(binaryToDecimal(1101));
console.log(binaryToDecimal(111010));
console.log(binaryToDecimal(1));
console.log(binaryToDecimal(0));
console.log(binaryToDecimal(10));
console.log(binaryToDecimal(1101)+binaryToDecimal(111010));

console.log(binaryToDecimal("1"));
console.log(binaryToDecimal("0"));
console.log(binaryToDecimal("10"));
console.log(binaryToDecimal("111010"));

const binaryToDecimal2 = binary => {
    // create output, start at 0 since we are adding numbers together
    let output = 0;
    // binary starts at 2^0, we will be incrementing from here
    let exponent = 0;
    // for loop to start at the end of the binary
    for (let i = String(binary).length - 1; i >= 0; i--) {
        // convert the element of the binary to the decimal value and add to the output
        // can also do (base**exponent) for exponents
        output += (parseInt(String(binary)[i]) * (Math.pow(2, exponent)));
        // increment the exponent
        exponent ++;
    }
    return output;
}

// console.log(binaryToDecimal2(1101));
// console.log(binaryToDecimal2(111010));
// console.log(binaryToDecimal2(1));
// console.log(binaryToDecimal2(0));
// console.log(binaryToDecimal2(10));
// console.log(binaryToDecimal2(1101)+binaryToDecimal2(111010));

// console.log(binaryToDecimal2("1"));
// console.log(binaryToDecimal2("0"));
// console.log(binaryToDecimal2("10"));
// console.log(binaryToDecimal2("111010"));