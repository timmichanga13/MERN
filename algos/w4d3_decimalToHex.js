// convert from decimal to hex

const decimalToHex = decimal => {
    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let output = "";

    while (Math.floor(decimal / 16) >= 0){
        // add the corresponding hexvalue based on the remainder
        output = hexValues[decimal - 16 * Math.floor(decimal / 16)] + output;
        // break if the quotient is 0 (we are done and don't need to loop any more)
        if (Math.floor(decimal / 16) == 0){break};
        // update the value of decimal that we are looking at in the loop
        decimal = Math.floor(decimal / 16);
    }
    return output;

}

console.log(decimalToHex(174342356727));
console.log(decimalToHex(174));
console.log(decimalToHex(58));
console.log(decimalToHex(15));
console.log(decimalToHex(13));
console.log(decimalToHex(2));
console.log(decimalToHex(1));
console.log(decimalToHex(0));
