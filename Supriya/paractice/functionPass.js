// function 

// function declartation 

function addition(x,y){
    return x + y
}

let aa = addition(12,13)
console.log(aa)
console.log(aa + aa)
// function expression 

let addition2 = function(x,y){
    return x + y
}

let bb = addition2(12,13)
console.log(bb)




// arrow function

// let addition3 = (x,y)=>{
//     return x + y
// }

let addition3 = (x,y)=> x + y
let cc = addition3(12,13)
console.log(cc)

// number as a parameter to function 
// return type also as number


function printNumber(x,y){
    let sum = x+y
    return sum
}

let ff = printNumber(12,13)
console.log(ff)
console.log(typeof ff)

// string as a parameter to function 
// return value is also string 

function printName(word){
    let greet =   "welcome " + word
    return greet

}

let gg = printName("chinmay")
console.log(gg)
console.log(typeof gg)


// parameter and return type as array 
let numbers = [11,22,33,44,55,66,77,88]
function lastFive(arr){
    let lastF = arr.slice(-5) // [44,55,66,77,88]
    return lastF
}
let a = lastFive(numbers)
console.log(a[0])


// parameter and return type object 

let info = {
    firstName:"ram",
    lastName:"deshpande"
}

// retrive

console.log(info.firstName)
console.log(info['firstName'])


// update 
info.firstName = "sanjay"
info['firstName']= "hemant"


// add 

info.lang = "Hindi"
info['city'] = "pune"


//delete 

delete info.city
delete info['lang']


function updateName(obj){
    obj.firstName = "tanmay"
    return obj
}

let b = updateName(info)
console.log(b.firstName)
console.log(b)


// function as parameter to another function

let x = 10
console.log(x)

let add34 = function(x,y){
    return x + y
}

function addition34(fn){

    // let fn = function(x,y){
    //     return x + y
    // }
    
    let sum = fn(12,14) // 26
    return sum // 26
}

let zz = addition34(add34)
console.log(zz) // 26




//console.log(add34)
// let ll = add34(17,17)
// console.log(ll)


// function as return value from another function 


function pr(){
    let a = 10
    let b = 20

    return function(){
        console.log(a+b)
    }
}

let ab = pr()
ab()

// let ab = function(){
//     console.log(a+b)
// }
// boolean as a parameter and return type
function isDriver(flag){
    if(flag){
        console.log('you can drive')
        return true
    }
    else {
        console.log('you cannot drivr')
        return false
    }
}

let raq = isDriver(true)
console.log(raq)