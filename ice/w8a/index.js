const simpleArray=[5,3,4,5,6]
//Acesss elements
let sum=0
for(let index=0; index <simpleArray.length; index++){
sum = sum + simpleArray [index]

}
console.log(sum)
sum=0
for (const item of simpleArray){

sum= sum +item

}
console.log(sum)

//change elements

for (let index=0; index < simpleArray.length; index++){
    simpleArray[index]= simpleArray[index]+2
    
}
console.log('for loop', simpleArray)
for(let item of simpleArray){

item=item+2

}
console.log('for of', simpleArray)

//create new array
const newArray=[]
for (let index=0; index<simpleArray.length; index++){
    new Array.push(simpleArray[index+2])

}
console.log('for',newArray)
function addTwo(value){
    return(value+2)
}
//createnew array
const newArray3=newArray.map(addTwo)
console.log('map',newArray3)

//create new array using map
const newArray4 =newArray.map ((value) 