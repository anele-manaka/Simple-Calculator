const {add} = require("../src/calculator.js")

describe("add", function(){
    it("should add numbers", function(){
    expect(add(1,2)).toEqual(3)
    })

    it("should add numbers", function(){
        expect(add(-1,-1)).toEqual(-2)
        })
        
    it("should add numbers", function(){
        expect(add(1,2,3,4,5)).toEqual(15)
        })
    it("should add numbers", function(){
        expect(add(1,2)).toEqual(3)
        })
    it("should add numbers", function(){
        expect(add(-1,-1)).toEqual(-2)
        })
    it("should add numbers", function(){
        expect(add(1,2,3,4)).toEqual(10)
        })
})



const {multiply} = require("../src/calculator.js")

describe("multiply", function(){
    it("should multiply numbers", function(){
    expect(multiply(1,3)).toEqual(3)
    })

    it("should multiply numbers", function(){
        expect(multiply(-1,3)).toEqual(-3)
        })

    it("should multiply numbers", function(){
        expect(multiply(1,2,3,4,5)).toEqual(120)
        })

    it("should multiply numbers", function(){
        expect(multiply(1,3)).toEqual(3)
        })

    it("should multiply numbers", function(){
        expect(multiply(-1,3)).toEqual(-3)
        })
})