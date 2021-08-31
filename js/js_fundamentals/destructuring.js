

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // either tesla, mercedes, or honda // prints the first car
console.log(otherRandomCar) // either mercedes or honda // skips the first car, prints the second



const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // strikethru - error: name is not defined
console.log(otherName); // print 'Elon'




const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // print '12345'
console.log(hashedPassword); // error: already in use // undefined




const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // false
console.log(first == third); // true




const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // print 'value'
console.log(secondKey); // print [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // print '1'
console.log(willThisWork); // print 5

