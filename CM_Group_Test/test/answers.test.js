var answers = require('../answers');
var q7 = require('../q7.ans');
var expect = require('chai').expect;

describe('Q1 - #isNullOrEmptyCheck', function(){
    context('test case 1: passing null or no arguments', function(){
        it('should return true when no value is passed', function(){
            expect(answers.isNullOrEmptyCheck()).to.equal(true)
        })
        it('should return true when "" an empty string is passed', function(){
            expect(answers.isNullOrEmptyCheck("")).to.equal(true)
        })
    })
    context('test case 2: passing character string', function(){
        it('should return false when "a" is passed', function(){
            expect(answers.isNullOrEmptyCheck('a')).to.equal(false)
        })
        it('should return false when "long string" is passed', function(){
            expect(answers.isNullOrEmptyCheck('is a long string')).to.equal(false)
        })
        it('should return false when null is passed as a string', function(){
            expect(answers.isNullOrEmptyCheck("null")).to.equal(false)
        })
    })
})

describe('Q2 - #positiveDivisors', function(){
    context('test case 1: passing negative number or 0', function(){
        it('should return empty array', function(){
            expect(answers.positiveDivisors(0)).that.satisfy(function(value){
                expect(value).to.be.instanceOf(Array)
                expect(value.length).to.equal(0)
                return true
            })
            
        })
    })

    context('test case 2: passing 60 and 42', function(){
        it('should return all positive divisors for 60 - [1,2,3,4,5,6,10,12,15,20,30,60]', function(){
            expect(answers.positiveDivisors(60)).to.eql([1,2,3,4,5,6,10,12,15,20,30,60])
        })

        it('should return all positive divisors for 42 - [1,2,3,6,7,14,21,42]', function(){
            expect(answers.positiveDivisors(42)).to.eql([1,2,3,6,7,14,21,42])
        })
    })
})

describe('Q3 #triangleArea', function(){
    context('test case 1: passing valid values as sides of a triangle', function(){
        it('should return  6 for the values 7,10,5', function(){
            expect(answers.triangeleArea(7,10,5)).to.equal(16)
        })
    })

    context('test case 2: throw exception if inputs are negative or invalid', function(){
        it('should throw exception for negative inputs', function(){
            expect(function(){
                answers.triangeleArea(-1,2,4)
            }).to.throw('Sides are not valid, cannot form a traingle')
        })

        it('should throw exception when sum of two sides is greater then the other', function(){
            expect(function(){
                answers.triangeleArea(13,4,5)
            }).to.throw('Sides are not valid, cannot form a traingle')
        })
    })
})

describe('Q4 #CommonValue', function(){
    context('test case 1: return array of common elements', function(){
        it('should return [1,2,3,4] for [1,2,3,4,5,1,6,7,1,2,2,3,4,3]', function(){
            expect(answers.commonValues([1,2,3,4,5,1,6,7,1,2,2,3,4,3])).to.eql([1,2,3])
        })
        it('should return [1] for [1,2,3,4,5,1,6,7]', function(){
            expect(answers.commonValues([1,2,3,4,5,1,6,7])).to.eql([1])
        })
        it('should return [5,4] for [5,4,3,2,4,5,1,6,1,2,5,4]', function(){
            expect(answers.commonValues([5,4,3,2,4,5,1,6,1,2,5,4])).to.eql([4,5])
        })
        it('should return actual array if not common found]', function(){
            expect(answers.commonValues([1,2,3,4,5,6,7])).to.eql([1,2,3,4,5,6,7])
        })
    })
})

let group = new q7.arrangeBy("name");
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
describe('Q7 #ArrangeBy', function(){
    context('test case: Should return objects grouped by name', function(){
        it('should have property Bob and Sally in the returned object', function(){
            expect(group.groupByKey(users)).that.satisfy(function(value){
                expect(value).to.have.deep.property("Bob");
                expect(value).to.have.deep.property("Sally");
                return true
            })
        })
    })
})