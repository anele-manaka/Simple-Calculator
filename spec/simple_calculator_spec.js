const {add, multiply} = require("../src/calculator.js")



describe("add", function(){

    it("should add two positive numbers", function(){
    expect(add(1,2)).toEqual(3)
    })
        
    it("should add multiple positive numbers", function(){
        expect(add(1,2,3,4,5)).toEqual(15)
        })
    it("should add positive numbers", function(){
        expect(add(1,2)).toEqual(3)
        })
    it("should add negative numbers", function(){
        expect(add(-1,-1)).toEqual(-2)
        })
    it("should add multiple positive numbers", function(){
        expect(add(1,2,3,4)).toEqual(10)
        })
})



describe("multiply", function(){

    it("should multiply two positive numbers", function(){
    expect(multiply(1,3)).toEqual(3)
    })

    it("should multiply postive and negative numbers", function(){
        expect(multiply(-1,3)).toEqual(-3)
        })

    it("should multiply multiple positive numbers", function(){
        expect(multiply(1,2,3,4,5)).toEqual(120)
        })

    it("should multiply positive numbers", function(){
        expect(multiply(1,3)).toEqual(3)
        })
})