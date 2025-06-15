const {test, expect} = require("@playwright/test")
 
test("It is first Test Script", async function display({}){
    expect(450).toBe(450)
})
 
test("It is Second Test Script", async function ({}){
    expect(12.75).toBe(12.75)
})
 
test("It is Third Test Script", async ({})=>{
    expect("GenTech Academy").toContain("GenTech")
})
 
test("It is Fourth Test Script", async ({})=>{
    expect(true).toBeTruthy()
})
 
 
test("It is Fifth Test Script", async ({})=>{
    expect(10<5).toBeFalsy()
})
 
test("It is Sixth Test Script", async ({})=>{
    expect("GenTech Academy".endsWith("Academy")).toBeTruthy()
})