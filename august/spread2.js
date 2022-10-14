//rest operator
//they are use comma separated value into array

function add(...arr)
{
let sum =arr.reduce(function(acc,el){
   return acc+el
},0)
return sum
}
let ss=add(1,2,3,4,5,6,7)
console.log(ss)

//sprad oprator
//spread operator are use to set arrays value to function
let arr=[10,20,30,40,50,60,70]

function addition(a,b,c)
{
    console.log(a+b+c)
}
addition(...arr)

//short circuting in js
let a="supriya"||"abhii"||"diya"
console.log(a)

let b="supriya"&&"abhii"&&"diya"
console.log(b)

let c=""||"abhii"||"diya"
console.log(c)

let d=" "&&"abhii"&&"diya"
console.log(d)

let name="ganga"
let age=22

let q1=name||++age
console.log(name)
console.log(age)
console.log(q1)

let q3 = "Chinmay" && 0 && "Poorva" && "Ram"
console.log(q3)


console.log('-------------------nullish opertor-------')
let obj={
    firstName:NaN,
    age:22
}
let aaa=obj.firstName??"sarika"
console.log(aaa)




let obj1 = {
    firstName:NaN, // (undefined or null)
    lastName:"deshpande",
    age:23
}


let a1 = obj1.firstName ?? "john"
console.log(a1)



let info = {
    fullName:{
        firstName:"chinmay",
        lastName:"deshpande"
    },
    parent:{
        mother:{
            firstName:"kanchan",
            lastName:"deshpande"
        }
    }
}
console.log(info.fullName?.firstName)