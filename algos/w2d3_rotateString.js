// rotating a string to see if it is a rotation of another
// create a new string rotated by number chars
// if number > string.length, modulo string.length to get the leftover amount we need to rotate by

const rotateString = (string, number) => {
    // blank string for output
    let output = "";
    // rotating more than the number of letters in teh string doesn't matter, so use modulo to get the remainder
    let rotations = number%string.length;
    // loop to grab letters from teh back of the word and move to the front based on teh number of rotations
    for (let i = 1; i <= rotations; i++) {
        output = string[string.length-i] + output;
    }
    // loop to add the remainder of the word
    for (let i = 0; i < string.length - rotations; i++) {
        output += string[i];
    }
    // return the output string
    return output;
    }
console.log(rotateString("basketball", 3)); // allbasketb
console.log(rotateString("Hello", 2)); // loHel
console.log(rotateString("okay", 21)); // kayo





// bonus: check if two strings are rotations
const isRotation = (str1, str2)=>{
    // for loop equal to the number of letters in the first word
    for (let i = 0; i < str1.length; i++) {
        // compare each posible combination of rotations of the first word to the second, if they're the same, return true
        if (rotateString(str1, i) == str2){return true;}
    }
    // if there was no match, return false
    return false;
}

console.log(isRotation("basketball", "allbasketb")) //true
console.log(isRotation("hello", "lolhe")) //false





// need to use modulo, subtraction will cause errors if num > 2*str.length
const rotateStr = (string, num) => {
    let str="";
    if ( num > string.length )
        num = num - string.length;
    start = string.length - num;
    for (let i = start; i < string.length; i++) {
        str += string[i];
    }
    for (let i = 0; i < start; i++) {
        str += string[i];
    }
    return str;
}
console.log(rotateStr("okay", 19)); // kayo