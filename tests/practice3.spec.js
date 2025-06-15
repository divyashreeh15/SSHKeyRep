const {test, expect} = require("@playwright/test")
test("It executes beforeAll TestScript", async ({page})=>{
    console.log("It executes beforeAll TestScript");
   
})
 
test("It executes beforeEach of All available TestScript", async ({page})=>{
   console.log("It executes beforeEach TestScript");
})
 
test.only("It is First Test Script", async ({page})=>{
    expect("GenTech Academy".endsWith("Academy")).toBeTruthy()
})
 
test.skip("It is Second Test Script", async ({page})=>{
    expect("GenTech Academy".startsWith("GenTech")).toBeTruthy()
})
 
test.afterEach("It executes AfterEach TestScript", async ({page})=>{
    console.log("It executes AfterEach TestScript");
})
 
test.afterAll("It executes AfterAll of All available TestScript", async ({page})=>{
    console.log("It executes AfterAll TestScript");
})
 