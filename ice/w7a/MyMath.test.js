import { Sum } from './MyMath.js'


describe('Testing Addlist',()=>{
  it ('Returns the sum of a list of numbers',()=>
{
 let list =[1,2,3,4];
 let result = AddList(list);
 expect(result).toBe(10);



})
})
describe('Testing Sum', ()=>{
  it("Adds a string ",()=>{
    var result =Sum("Test",5);
    expect(result).toBeUndefined();

  });
  test('add 1+2 to equal 3', () =>{
    expect(Sum(1,2)).toBe(3)

  })





  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })
})
// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
