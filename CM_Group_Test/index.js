var answers = require('./answers')
var q7 = require('./q7.ans');

// Question 1
console.log('\nQuestion 1')
console.log('passing null, Result= ' + answers.isNullOrEmptyCheck(null));
console.log('passing "a", Result= ' +answers.isNullOrEmptyCheck("a"));
console.log('passing empty string, Result= ' + answers.isNullOrEmptyCheck(""));
console.log('passing null as a string, Result= '+ answers.isNullOrEmptyCheck("null"));

// Question 2
console.log('\nQuestion 2')
console.log('Positive divisor of 60, Result= ' + answers.positiveDivisors(60));

// Question 3
console.log('\nQuestion 3')
try {
   console.log('Passing 7,10,5, Result= '+answers.triangeleArea(7,10,5))
} catch (error) {
    console.log(error);
}

// Question 4
console.log('\nQuestion 4')
var array = [5,4,3,2,4,5,1,6,1,2,5,4]
console.log('Common Values, Result= '+ answers.commonValues(array))

// Question 7
console.log('\nQuestion 7')
const users = [
    {
        id: 1,
        name: 'Bob',
    },
    {
        id: 2,
        name: 'Sally'
    },
    {
        id:3,
        name:'Bob',
        age: 30
    },
    {
        id:4
    },{}
]

let group = new q7.arrangeBy("name")
let arrangeByName = group.groupByKey(users)
console.log(arrangeByName)
console.log('\n')