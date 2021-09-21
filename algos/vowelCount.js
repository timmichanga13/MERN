// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    for (let v = 0; v < str.length; v++) {
        if (str[v] == ("a" || "e" || "i" || "o" || "u")) {
            vowelsCount += 1;
        }
    }
    // enter your majic here

    return vowelsCount;
}

console.log(getCount('abracadabra'));