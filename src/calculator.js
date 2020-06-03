function add() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
}
return sum
}
//console.log(add (1,1))


function multiply() {
    
    var product = 1
    for (var i = 0; i < arguments.length; i++) {

        product *= arguments[i]
    }
    return product
}
//console.log(multiply (2,4))
module.exports = {add, multiply}

