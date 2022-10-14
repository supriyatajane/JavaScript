 // Es6 
// program1
// rest operator
function addition(...arr){
    console.log(arr)
    let sum = arr.reduce(function(acc,el){
        return acc + el;
    },0)
    return sum
}
let total = addition(12,13,14,45,66,77,88,33,44,5,6,7,8,9)
console.log(total)

// 12,12,3,4,55,66,77,88,99,44 ------> [12,12,3,4,55,66,77,88,99,44]  ==> rest operator

// spread operator operator 
//[11,22,33,44,55] --------->  11,22,33,44,55------ spread operator

let marks = [22,33,11,23,44,55,66,77,33,44]

function addFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//addFive(marks[0],marks[1],marks[2],marks[3],marks[4])
addFive(...marks)

// [1,2,3,4] ====> 1,2,3,4

// short circuting in js 
// truthy  -  2,-3,44, true , {} , [] , 8 === 8 , 'chinmay' , 'c' , "true"
// falsy value  - 0 , null , undefined , false , 6 !== 6 , '' , NaN 
// AND OR NOT

//AND
// True  && True  -->  True
// False && True  -->  False
// True  && False -->  False
// False && False -->  False

// OR 

// True  && True  -->  True
// False && True  -->  True
// True  && False -->  True
// False && False -->  False

// NOT 
//True - False
//False - True
// program3
let a = "chinmay"|| "poorva"||"sarika"||"ram" 
console.log(a)
let b = ""|| "poorva"||"sarika"||"ram" 
console.log(b)

// program 4
let firstName = "chinmay"
let age = 32
let q1 = firstName || ++age
console.log(firstName)
console.log(age)

// program 5  // AND operator
let q2 = "Chinmay" && "Sarika" && "Poorva" && "Ram"
console.log(q2)
let q3 = "Chinmay" && 0 && "Poorva" && "Ram"
console.log(q3)

// nullish coalesing operator  ??
//  undefined or null

// program6s

let obj = {
    firstName:NaN, // (undefined or null)
    lastName:"deshpande",
    age:23
}


let a1 = obj.firstName ?? "john"
console.log(a1)

// optional operator
// program 7
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
//console.log(info.fullName?.firstName)