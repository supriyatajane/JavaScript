// operator
function addition(...arr){
    //console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}
let q = addition(1,2,33,44,55,66,77,88)
console.log(q)

// program 2
function additionB(a,...arr){
   let aa = arr.filter(function(el){
        return el > a
   })
   return aa
}
let aa = additionB(50,22,33,44,22,33,44,55,66,77,88,44,223,44,55,66,77,8)
let bb = additionB(40,22,33,44,22,33,44,55,66,77,88,44,223,44,55,66,77,8)
console.log(aa)
console.log(bb)

// program 3 spread  operator
let numbers = [11,22,33,44,55,66,77,88]
function addFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//addFive(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4])
addFive(...numbers)

// program 4 

let a1 = [33,44,55]
let a2 = [55,66,77]
let a3 = a1.concat(a2)
console.log(a3)

let a4 = [...a1,...a2]
console.log(a4)

// program 5 

let qa = [11,22,33,4]
let a5 = [1,...qa]
console.log(a5)

let info = {
    firstName:"chinmay",
    lastName:"deshpande",

}
let info2 = {
    mother:"kanchan",
    father:"shirish"
}

let a6 ={...info,...info2}
console.log(a6)

let vehicle = {
    type:"sedane",
    color:"red"
}

let vehicle2 = vehicle
vehicle2.color = "blue"
console.log(vehicle)
console.log(vehicle2)


// program 6
let ay = [11,22,33]
let ay2 = [...ay]

ay2[0] = 999
console.log(ay2)
console.log(ay)

// program 7
let animal = {
    leg:3,
    fullName:"chicken"
}

let animal2  = {...animal}
animal2.leg = 4
console.log(animal)
console.log(animal2)






// function OnlyFirstnameLastName(firstName,lastName){
//     console.log(firstName)
//     console.log(lastName)

// }

// OnlyFirstnameLastName({...a6})
//console.log({...a6})


let student = {
    transaction:[1,2],
    transaction2:[1,4]

}
let q1 = [...student.transaction , ...student.transaction2]