// Number 1
// GIVEN
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
// var hello;
//console.log(hello); // logs undefined
//hello = 'world'

// Number 2
// GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack';
// function test();
// test();
// needle = 'magnet';
// console.log(needle);


// Number 3
// GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print()
// brendan = 'only okay';
// console.log(brendan); // prints super cool bc function is never called


// Number 4
// GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken';
// console.log(food); // prints chicken
// function eat();
// eat();
// var food;
// food = 'half-chicken';
// console.log(food); // prints half-chicken
// food = 'gone';







// Number 5
// GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean; // pulls the variable function but not the assignment
// mean(); // throws an error bc function is not linked to var mean


// Number 6
// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre); // prints undefined
// genre = "disco";
// function rewind();
// rewind();
// var genre;
// genre = "rock";
// console.log(genre); // prints rock
// genre = "r&b";
// console.log(genre); // prints r&b
// console.log(genre); // prints disco





// Number 7
// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose"; // error b/c not defined as var? not the case?
// console.log(dojo); // print san jose
// function learn();
// learn();
// var dojo;
// dojo = "seattle";
// console.log(dojo); // prints seattle
// dojo = "burbank";
// console.log(dojo); // prints burbank
// console.log(dojo); // prints san jose (global)



// Number 8
// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students)
// console.log(makeDojo("Chicago", 65)); // prints 




