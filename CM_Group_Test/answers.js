/**
 * Answers to questions 1 to 4
 * Author: Usman Khalid
 */

/**
 * Question 1
 * Using the most appropriate means, implement an "isNullOrEmpty" check on the standard String type. 
 * It should be functionally equivalent without calling any "isNullOrEmpty" built in function
 */

const isNullOrEmptyCheck = (stringToTest) => {
    var testString = stringToTest;
    if(testString === null || testString === undefined){
        return true;
    }
    if(testString.length === 0){
        return true;
    }else if(testString === "" || testString === undefined ){
        return true;
    }else{
        return false;
    }
}

/**
 * Question 2
 * Write a function that takes a single positive integer, and returns a collection / sequence (e.g. array) of integers. 
 * The return value should contain those integers that are positive divisors of the input integer
 */

 const positiveDivisors = (checkInt) => {
     let divisors = [];

     // if number is negative or null, return empty array
     if(checkInt === null || checkInt <= 0){
         return [];
     }

     // if a number is divisible by numbers in range 1 to number, they are positive divisors
     for(var i = 0; i<=checkInt; i++){
         if(checkInt % i === 0){
            divisors.push(i);
         }
     }
     return divisors;
 }

/**
 * Question 3
 * Write a function that takes three integer inputs and returns a single output. The inputs are the lengths 
 * of the sides of a triangle. The output is the area of that triangle.
 */

const triangeleArea = (side_one, side_two, side_three) => {
    
    // check if the triangle side are non negative
    if(side_one <=0 || side_two <= 0 || side_three <= 0 ){
        throw "Sides are not valid, cannot form a traingle";
    }

    // check if sides are valid numbers
    if(isNaN(side_one) || isNaN(side_two) || isNaN(side_three)){
        throw "Sides are not valid, cannot form a traingle";
    }

    // validate condition for a valid triangele,
    // for a traingle to be valid, sum of two side should be less then the third
    if(side_one + side_two <= side_three || side_three + side_one <= side_two || side_three + side_two <= side_one){
        throw "Sides are not valid, cannot form a traingle"
    }

    // get perimeter
    var perimeter = side_one + side_two + side_three;
    perimeter = perimeter / 2;
    
    // square root of perimeter returns the area of triangle
    var area = perimeter*(perimeter-side_one)*(perimeter-side_two)*(perimeter-side_three);
    area = Math.sqrt(area);
    
    return Math.trunc(area);
}

/**
 * Question 4
 * Write a function that takes an array of integers, and returns an array of integers. The return value 
 * should contain those integers which are most common in the input array.
 */
const commonValues = (inputArray) => {
    let count = 0;
    let result = commonValues_alt(inputArray)
    if(result[1].length > 0){
        for(var i=0; i<=result[1].length; i++){
            if(result[1][i] > count){
                count = result[1][i]
            }
        }
    }
    if(count === 1){
        return inputArray
    }
    let subArray = [];
    for(var i =0; i<= result[0].length; i++){
        if(result[1][i] === count){
            subArray.push(result[0][i]);
        }
    }
    return subArray;
}

function commonValues_alt(arr) {
    var a = [],
      b = [],
      prev;
  
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
  
    return [a, b];
  }

/**
 * Module Exports
 */
module.exports = {
    positiveDivisors,
    isNullOrEmptyCheck,
    triangeleArea,
    commonValues
}