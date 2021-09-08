// take an input of a string and return an aray with each element being each word in the string
// work for edge cases with variable spaces between words/extra spaces

const stringToWordArray = string => {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        console.log(`looking at ${string[i]}`)
        
        //  && i < string.length
        if (string[i] != " "){
            let word = "";
            while(string[i] != " "){
                console.log(`adding ${string[i]} to ${word}`)
                word += string[i];
                i++;
                if (i == string.length){break;}
            }
            console.log(`pushing ${word}`)
            output.push(word);
        }
    }
    return output;
}

const sTWANoNests = string => {
    let output = [];
    let isWord = false;
    let word = "";
    for (let i = 0; i < string.length; i++) {
        console.log(`looking at ${string[i]}`)

        // if you are in a word and find a space, push the word and set isWord to false to continue
        if (isWord == true && string[i] == " "){
            console.log(`pushing ${word}`)
            output.push(word);
            word = "";
            isWord = false;
        }
        // if the letter is not a space, add it to the word
        else if (string[i] != " "){
            isWord = true;
            console.log(`adding ${string[i]} to ${word}`);
            word += string[i];
        }

        // push the last word
        else if (i==string.length){
            output.push(word);
        }
    }
    if (isWord == true) {
        console.log(`pushing ${word}`)
        output.push(word);
    }
    return output
}

// console.log(stringToWordArray("    apple bottom     jeans, boots with the fur.  "));
console.log(sTWANoNests("    apple bottom     jeans, boots with the fur.   "));