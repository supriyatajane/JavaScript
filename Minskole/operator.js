 //Data types 

// Number , String , Boolean

let x = 10 
console.log(x)
console.log(typeof x) // Number

let y = true 
console.log(y)
console.log(typeof y)

let u = "chinmay"
console.log(u)
console.log(typeof u)

// arithemtic operator 

// + - * / %
let numOne = 12
let numberTwo = 11

console.log(numOne + numberTwo)
console.log(numOne - numberTwo)
console.log(numOne * numberTwo)
console.log(numOne / numberTwo)
console.log(numOne % numberTwo)
console.log(66%5)

// comparison operator 
// < , > , <= , >= , != , == , !== , === (boolean)

console.log(2 > 3)
let a = 3 > 9
console.log(a)

console.log(2 < 3) //true
console.log( 2 >= 3) // false
console.log(2 >= 2 ) // true 
console.log(2 == 2) // true
console.log(7 <= 8) // true


// '7' and 7
console.log('7')
console.log(typeof '7')
console.log(7)
console.log(typeof 7)

 //== (absolute value should be same )
 console.log( 7 == '7')
 console.log(8 == '8')
 console.log(8 == '7')
 console.log( 8 == '-8')
 // ===  (absolute should be same and type should be same)

 console.log(8 === '8')
 console.log(8 === 8)
 console.log( 8 === 7)


 console.log(6 != '6') 
 console.log( 7 != '8')

console.log(7 !== '7')
console.log( 8 !== 8)
console.log(8 != '8')
console.log(8 === '9')
console.log( 8 !== '8')
// === 'type' and false
// == value

// logical operator 

// AND OR or NOT

// True  True  ====> True
// False False ====> False
// True  False ====> False
// False True  ====> False

//&&
console.log(7 >= 7 && 8 <= 8)
console.log(6 === 6 && 6 == '6')
console.log( 7 != 8 && 7 == 9)
console.log(7 == 7 && 7 !== 8)

//  true &&  true
//  true && true


// OR 


// True  True  ====> True
// False False ====> False
// True  False ====> True
// False True  ====> True

// ||

console.log(7 == 7 || false)
console.log(7 === '7' || 6 != '6')
console.log(7 == 7 || 7 !== '7')
console.log(7 === '7' || true)


// Not 

// True == >  False
// False ===> True

console.log(!true)
console.log(!false)


// decision statements  or conditional statement 

// OneEntity with different changes the outcome ---> conditional statement 

// if(condition){
//         // if true this line of code will be executed
// }
// else {
//     // this line of code will be exectuted
// }


// True or False


//Truthy values  - 2 < 3

// Falsey values  ---  2 === '2'  , 0 , undefined , null , NaN ,false


if (2 < 3) {
    console.log('hello')
} else {
    console.log('bye')
}

if (2 === '2') {
    console.log('hello')
} else {
    console.log('bye')
}

if (0) {
    console.log('hello')
} else {
    console.log('bye')
}


if (undefined) {
    console.log('hello')
} else {
    console.log('bye')
}

if (null) {
    console.log('hello')
} else {
    console.log('bye')
}

if (NaN) {
    console.log('hello')
} else {
    console.log('bye')
}

if (-33) {
    console.log('hello')
} else {
    console.log('bye')
}

if ("hello") {
    console.log('hello')
} else {
    console.log('bye')
}
if ("B") {
    console.log('hello')
} else {
    console.log('bye')
}

///----------------------------------------/

//tn > 0 <= 5 ===> 5 %
//tn > 5 <= 0 ===> 10 %
//tn >10      ===> 20 %

let tn = 11

// if(tn > 0 && tn <= 5){
//     console.log('5 percent')
// }
// if(tn > 5 && tn <= 10){
//     console.log('10 %')
// }
// if(tn > 10){
//     console.log('20 % discount')
// }
// else {
//     console.log('Incorrect number')
// }

if (tn > 0 && tn <= 5) {
    console.log('5 percent')
}
else if (tn > 5 && tn <= 10) {
    console.log('10 %')
}
else if (tn > 10) {
    console.log('20 % discount')
}
else {
    console.log('Incoorect input')
}
/-----------------------------------------/
// Ternary operator

let fullName = "chinmay"
if (fullName == "chinmay") {
    console.log('Welcome !')
}
else {
    console.log('Not welcome!')
}

fullName === "chinmay" ? console.log('Welcome !') : console.log('Not welcome')
let numTwo = 23
let answer = numTwo >= 44 ? "hello" : "Bye"
console.log(answer)


let numThree = 42
let answer2;

if (numThree >= 44) {
    answer2 = "hello"
}
else {
    answer2 = "bye"
}
console.log(answer2)


// if(condition/ values){
//     console.log('hello')
// }else{
//     console.log('bye')
// }

// switch case 


let city = "bhopal"
// switch (city) {
//     case "pune":
//         console.log("MH")

//     case "jaipur":
//         console.log("RJ")
    
//     case "bhopal":
//         console.log("MP")
    
//     case "patna":
//         console.log("BH")
    
//     default:
//         console.log('Incorrect city')
// }


switch (city) {
    case "pune":
        console.log("MH")
        break

    case "jaipur":
        console.log("RJ")
        break
    
    case "bhopal":
        console.log("MP")
        break

    case "patna":
        console.log("BH")
        break
    
    default:
        console.log('Incorrect city')
}









// short hands














// decision statements  or conditional statement 

// switch case 

// ternary operator 

// short hands 

// loops