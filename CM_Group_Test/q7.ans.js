/**
 * Answer: Question 7
 * Author: Usman Khalid
 * 
 * Write a function which combines an array of objects, grouped by a key you provide (this key will 
 * correspond to a key found in the objects. The function will index the new object with the value of 
 * those keys.
 */

class arrangeBy {

    // constructor initializes the value of key,
    constructor(key){
        this.key = key;
    }

    // function groupByKey uses reduce to return grouped objects
    groupByKey = (users) => {
        const result = users.reduce((output, user)=> {

            //checks to see if the key is in the object and the objects are not null or undefined
            if(this.key in user && user !== null && user !== undefined){
                
                // check to see if the current array item is of type object
                if(typeof user === 'object'){
                    output[user[this.key]] = output[user[this.key]] || [];
                    output[user[this.key]].push(user);
                }
            }
            return output;
        }, Object.create(null))
    
        return result;
    }
}

module.exports = {arrangeBy}

