var Calculator = require('./calculator');

// We describe unit testing for the calculator code
describe("Calculator Testing",function(){

    var cal = new Calculator();

    it("should add two numbers", function(){
        // Write test cases
        expect(cal.add(5,5)).toEqual(10); // check 5 + 5 = 10
        expect(cal.add(3,2)).toEqual(5); // check 3 + 2 = 5
        expect(cal.add(23544,1233)).toEqual(24777) // check 23544 + 1233 = 24777
    })

    it("should subtract two numbers", function(){
        expect(cal.subtract(5,1)).toEqual(4); // check 5 - 1 = 4
        expect(cal.subtract(103,100)).toEqual(3) // check 103 - 100 = 3
        expect(cal.subtract(0,100)).toEqual(-100); // check 0 - 100 = -100
    })

    it("should multiply two numbers", function(){
        expect(cal.multiply(10,10)).toEqual(100); // check 10 x 10 = 100
        expect(cal.multiply(50,5)).toEqual(250); // check 50 x 5 = 250
        expect(cal.multiply(121332,0)).toEqual(0); // check 121332 x 0 = 0
    })

    it("should divide two numbers", function(){
        expect(cal.divide(100,5)).toEqual(20) // Check 100 / 5 = 20
        expect(cal.divide(12,4)).toEqual(3) // Check 12 / 4 = 3
        // Special case, checking divide by zero
        expect(cal.divide(12,0)).toEqual(Infinity);
    })
})