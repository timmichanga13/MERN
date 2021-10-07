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

console.log(hexToDecimalArray('0'));
console.log(hexToDecimalArray('1'));
console.log(hexToDecimalArray('A'));
console.log(hexToDecimalArray('F'));
console.log(hexToDecimalArray('2B3'));
console.log(hexToDecimalArray('CCC'));
console.log(hexToDecimalArray('3B'));

console.log(hexToDecimalArray(0));
console.log(hexToDecimalArray(1));