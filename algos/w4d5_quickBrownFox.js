// quickbrownfox

//create function that gives all of the combinations of an array of arrays of strings

let words = [
    ["Quick", "Lazy", "Clever"],
    ["Brown", "Red", "Yellow"],
    ["Fox", "Dog", "Cat"]
]

let moreWords = [
    ["Quick", "Lazy", "Clever", "Fast"],
    ["Brown", "Red"],
    ["Fox", "Dog", "Cat"]
]

// only works for 3 subarrays
const quickBrownFox = array => {

    // output starts as empty array, we will push the strings into it
    let output = [];

    for (let i = 1; i <= array.length; i++) {
    }

    let array1Runner = 0;
    while (array1Runner < array[0].length) {

        let array2Runner = 0;
        while (array2Runner < array[1].length) {

            let array3Runner = 0;
            while (array3Runner < array[2].length) {
                output.push(`${array[0][array1Runner]} ${array[1][array2Runner]} ${array[2][array3Runner]}`)
                array3Runner++
            }

            array2Runner++;
        }

        array1Runner++;

    }
    return output;
}

// console.log(quickBrownFox(words));
// console.log(quickBrownFox(moreWords));



// const qbfDynamic = array => {
//     let output = [];

//     let actualFunction = "";
//     // dynamic variables to create a loop for each subarray?

//     for (let i = 0; i < array.length; i++) {

//         if (i != array.length - 1) {

//             eval(`actualFunction +=
//             "let array${i + 1}Runner = 0;
//             while(array${i + 1}Runner < array[${i}].length){"
//             `);
//         }
//         if (i == array.length - 1) {
//             eval(`actualFunction +=
//             "let array${i + 1}Runner = 0;
//             while(array${i + 1}Runner < array[${i}].length){
//             output.push("
//             `);
//             for (let j = 0; j <=i; j++) {
//                 eval("actualFunction += `${array[i][array${i+1}Runner]}  `")
//             }
//         }
//     }
//     for (let k = array.length -1; k >= 0; k--) {
//         eval(`actualFunction+= "}

//         array${k}Runner++;"`)
//     }
//     eval(`actualFunction += "}
//     return output;"`)

//     return console.log(actualFunction)
// }

// console.log(qbfDynamic(words));