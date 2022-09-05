// 1 Red: Write a failing test

var assert=require("assert");
const multiply=require("./multiply");
describe("multiply",()=>{
// test 1
it("test1",()=>{
assert.equal(multiply(1, 1), 1); })
// Test 2

it("test2",()=>{
assert.equal(multiply(2, 2), 4); })   

// test 3
it("test3",()=>{
assert.equal(multiply(3, 3), 9); })   

// test 4
it("test4",()=>{
assert.equal(multiply(4,4 ), 16); })   

// test 5
it("test5",()=>{
assert.equal(multiply(23, 45), 23*45); })
})   
