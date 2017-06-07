// Basic Calculator Module
var Calculator = function(){

    var add = function(a,b) {
        return a+b;
    }

    var subtract = function(a,b) {
        return a-b;
    }

    var multiply = function(a,b) {
        return a*b;
    }

    var divide = function(a,b) {
        return a/b;
    }

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    }
}

module.exports = Calculator;