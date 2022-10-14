 //number + string   --- string 
// string + number ---- string   "hello1312"
// string + string ---- string 
// number + number ---- number 

let a = 12
let b = 13
let c = "hello"
console.log(a+b+c)
console.log(a+c+b)
console.log(c+b+a)
let firstName = "chinmay"
let lastName = "deshpande"
// concat 
console.log(firstName +" "+lastName)
// string literals , string interpolation
console.log("My firstname is "+firstName+" and my lastName is "+lastName)
console.log(`My firstname is ${firstName} and my lastName is ${lastName}`)

//     a     +    b    +   c
//     25 + "hello"       // 25hello
//    a     +     c    +   b
//    12     +   "hello"  ====>  "12hello" + 13 // 12hello13
// comparision operator 

// < , > , <= , !== , >= , === ,== , !=  // boolean
console.log(3 <= 3)
console.log(5 > 6)
console.log(3 == 3)
console.log(3 == '3')

console.log(typeof 3)
console.log(typeof '3')

console.log(3 == '3') // true 
console.log(3 === '3') // false

console.log(2 == '2')
console.log( 2 != '2')  // false
console.log( 2 !== '2')  // true

console.log("---------")
console.log(3 !== 3) // false
console.log( 3 !== '3') // true

console.log(2 === '2') // true
console.log(2 != '2') // false

console.log(1 > 3)
console.log(2 < 4)

console.log(3 == 3)
console.log(12 !== 13)
console.log(12 === 13)
console.log(12 === 4)

/* logical operators */
// AND
//True True   --- True
//True False   --- False
//False True   --- False
//False False   --- False
// OR 

//True True   --- True
//True False   --- True
//False True   --- True
//False False   --- False

// NOT

// True - False
// False - True


console.log(3 > 6 || 6 == '6')
console.log(3 !== '3'  &&  true)
console.log(!true)
console.log(!false)
console.log(3 * 7 >= 21 || false)
// False ||  True
//     true && true
// comparison and logical operator


// conditional statement 
// numberOfTickets === 10 =>  10 % 
// numberOfTickets > 10   =>  20% 

// if(condition){
//     // boolean
//     //this will run if condition is true
// }
// else {


// }

if(6 !== '6'){
    console.log('hello')
}
else {
    console.log('Bye')
}


if(6 !== '6' && false){
    console.log('hello')
}
else {
    console.log('Bye')
}

// truthy and False  values in js 


// true  -1 ,1 ,'A' , 6 > 5
// false  - undefined , null , 0 , NaN , false , 7 === '7'



let ab ;
console.log(ab)

// if(undefined){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }

// if(null){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }

// if(0){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }

// if(-1){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }

// if(1){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }

// if("A"){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }


// if(NaN){
//     console.log('hello')
// }
// else {
//     console.log('Bye')
// }


// charAt()
// charAtIndex()
// split()

// regular 
// repeat()
// search()
// match() 