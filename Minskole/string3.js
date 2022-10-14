 // string 
//  Javascript object 

// Object property and methods 

let fullName = "chinmay"
// 0 1 2 3 4 5 6
// c h i n m a y

console.log(fullName[0])
// string - object (property and method)

let numOfChar = fullName.length
console.log(numOfChar)

// 0  1  2  3
// p  u  n  e

let city = "pune"
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// loops 
let city2 = "Ahemadnagar"

// for(initilization; conditionCheck, incrementOrdecrement){

//     // statements
// }

for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4

    //console.log(i) // 0 1 2 3
    console.log('hello')

}

//i++ increment the value of i by 1

city2 = "Ahemadnagar"

//console.log(city2[0]) // A
console.log(city2.length)

for(let i = 0 ; i < city2.length ; i++ ){
   // console.log(i)
   console.log(city2[i])
}


let city3 = "Bhopal"

//  0 1 2 3 4 5
//  B h o p a l
for(let i = 0 ; i < city3.length ; i++){
    //console.log(i)
    console.log(city3[i])
}

for(let i = city3.length -1 ; i >= 0 ; i-- ){
    //console.log(i)
    console.log(city3[i])
}


let city4 = "pune"

// length  
// 0 1 2 3
// P u n e
console.log(city4.length)
console.log(city4[city.length-1])

// property --- length 
// method --- action and return type
// Gym -- action - excercise === > muscle


let city5 = "Mumbai"

//toUpperCase()
// action - convert all characters in captial
// return - same string 

let a = city5.toUpperCase()
console.log(a)

// toLowerCase()
// action - convert all characters in small letter
// return - same string 
let bb = city5.toLowerCase()
console.log(bb)

// includes 
// action - searches for substring 
// return - if found return true else false

let cc = city5.includes('bai')
console.log(cc)


// Js object -- property and methods 


// String object -- property and method
let fullName2 = "chinmaydeshpande"
let numberOne = 10
let isAdult = true 

console.log(typeof fullName2) // string 
console.log(typeof numberOne)
console.log(typeof isAdult)


// property 
console.log(fullName2.length)
let city6 = "Bhopal"

//  0 1 2 3 4 5
//  B h o p a l

// console.log(city6[0])
// console.log(city6[1])


// for 

for(let i = 0 ; i < 6 ; i++){
    console.log(city6[i])
    //console.log(i)
    // 1st i = 0 
    // 2ns i  = 1
    // 3rd  i = 2
    // 4th  i = 3
    // 5th  i = 4
    // 6th  i = 5
}
// Methods 

// 10 Methods


let language = "Hindi"
// action 
// return 

// toUpperCase()
let aaa = language.toUpperCase()
console.log(aaa)
console.log(typeof aaa)

let bbb = language.toLowerCase()
console.log(bbb)
console.log(typeof bbb)

// MethodChaining
let ccc =language.toUpperCase().toLowerCase()
console.log(ccc)

let language2 = "Marathi"
let ddd = language2.toLowerCase().toUpperCase().length
console.log(ddd)
// "marthi" == "MARATHI".length

// It will not work

// let eee = language2.toLowerCase().toUpperCase().length.toUpperCase()
// //          marathi ===> MARATHI =====> 7 .toUpperCase()
// console.log(eee)


// includes()

let language3 = "English"
let fff = language3.includes("E")
console.log(fff)

let fffa = language3.includes("ish")
console.log(fffa)


let fffb = language3.includes("L")
console.log(fffb)

// slice()

let language5 = "Sankrit"

//   0      1    2   3    4   5   6 
//   S      a    n   k    r   i    t
//   -7     -6   -5  -4   -3  -2   -1                      
//String.slice(startingIndex,endIndex(not included))
let ggg = language5.slice(2)
console.log(ggg)
console.log(language5.slice(-5))
console.log(language5.slice(1,5))
console.log(language5.slice(-6,-5))
console.log(language5.slice(-6,-1))
console.log(language5.slice(1,-1))
console.log(language5.slice())
console.log(language5.slice(-1,-5))

let language7 = " bengali "
// trim()
console.log(language7.length)
let jjj= language7.trim()
console.log(jjj)
console.log(jjj.length)

// trimStart()

language7 = " bengali "
let kkk = language7.trimStart()
console.log(kkk.length)
console.log(kkk)


// trimEnd()
language7 = "bengali "
let ooo =language7.trimEnd()
console.log(ooo.length)

let language8 = "gujrati"
let nnn = language8.indexOf('u')
console.log(nnn)

let city7 = "raipur"
let klkl = city7.indexOf('r')
console.log(klkl)
let klkl2 = city7.lastIndexOf('r')
console.log(klkl2)
//-----------------------------------/

// i e i o u 
// count the number of vowels in string 
// conditional statement
let namey = "chInmay".toLowerCase()
let count = 0
// 0 1 2 3 4 5 6
// c h i n m a y
for(let i = 0 ; i < namey.length ; i++){
    //console.log(namey[i])
    if(namey[i] == "a" || namey[i] == "e" || namey[i] == "i" || namey[i] == "o" || namey[i] == "u" ){
        count = count + 1
    }

}
console.log(count)

// reverse the string
let city9 = "pune"
let rev = ""
for(let i = 0 ; i < city9.length ; i ++){
    // console.log(i)
    // console.log(city9[i])
    rev = city9[i] + rev
  //         p     + ""  ====> p
  //         u     +  p  ====> up
  //         n     + up =====> nup
  //         e     + nup =====> enup 
 }
 console.log(rev)

 // pune
 let rev2 = ""
 for(let i = city9.length -1 ; i >= 0 ; i--){
    // console.log(city9[i])
    rev2 = rev2 + city9[i]
 }
 console.log(rev2)


 let abc = "chinmay deshpande"

//["chinmay" ,"deshpande"] " "
//["chinmayd","shpand",""] "e" 
//["chinm","y deshp","nde"]
// welcome chinmay !
console.log(abc.split(" "))
let g = abc.split(" ")
console.log("welcome "+g[0]+ " !")

// replace

let  srt = "I am learning javascript"
let rrr = srt.replace("javascript","python")
console.log(rrr)
console.log(srt)

// repeat()

let yyy = "chinmay ".repeat(3)
console.log(yyy)














// 
















// inputType ---------   outcome - multiple
// <= 10 -  20 % 
// > 10 -  30 %

// let numberOftickets = 10
// if(numberOftickets > 10){
//     console.log('30 % discount')
// }
// else if(numberOftickets <=10) {
//     console.log('20% discount')
// }

// if(condition){ // condition is always boolean
    //statements
//}