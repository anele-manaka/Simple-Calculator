const {add} = require("../src/simple_calculator")

describe("add", function(){
    it("should add numbers", function(){
    expect(add(15,33)).toEqual(48)
})
})


const {multiply} = require("../src/simple_calculator.js")

describe("multiple", function(){
    it("should multiply numbers", function(){
        expect(multiply(15,3,2)).toEqual(90)
    })
})