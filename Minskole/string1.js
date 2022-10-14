let name = "chinmay"
let lastName = 'Deshpande'
let middleName = `shirish`

console.log(name,lastName,middleName)

// string ---- 

// Everthing in js is object 
// String is also object -- property and method


// Array stores the value by index - true
// Object also stores the value by index - false
// string stores the character by index 

let city = "Pune"
// 0  1  2  3
// P  u  n  e
console.log(city[0])

// string 

// object - property and method 
// method - action and return type 

// string is object 

let ci = "Pune"

// 0 1 2 3
// P u n e 
// string stores the value by index
// console.log(ci[0])
 function add (x,y){
    console.log(x+y)
     return "hello"
 }
 let a = add(12,13)
 console.log(a) //  "hello"
 console.log(a+a) // "hellohello"


// let cities = ["pune",'jaipur']
// let r = cities.push('nagpur')
// console.log(r) // 3
// console.log(cities)


// let y = console.log("hello")
// console.log(y)

let country = "India"
console.log(typeof country)
let aa = country.toUpperCase()
console.log(aa)
console.log(typeof aa)

let cc = country.toLowerCase()
console.log(cc)

let firstName = "chinmay"
let ay = firstName.toLowerCase().toUpperCase().length // correct
console.log(typeof ay)

//let aye = firstName.toLowerCase().toUpperCase().length.toUpperCase() // correct
//console.log(aye)

let lastName2 = "Deshpane"
let rr = lastName2.startsWith("De")
console.log(rr)

let lastName3 = "Deshpande"
let rrrr = lastName2.endsWith("e")
console.log(rrrr)

let language = "Marathi"
let bbb = language.includes("ra")
console.log(bbb)

let st = " Amol"
console.log(st.length)
let fst = st.trimStart()
console.log(fst)
console.log(fst.length)

let ste = "Amol "
console.log(st.length) // 5
let fste = ste.trimEnd() 
console.log(fste) //"Amol"
console.log(fste.length) // 4


let sted = " Amol "
console.log(sted.length) //6
let fsted = sted.trim() 
console.log(fsted) //"Amol"
console.log(fsted.length) // 4


// trim(), trimStart() ,trimEnd()

let vegetable = "Tomato"
let hh = vegetable.indexOf('m')
console.log(hh)
let gg = vegetable.indexOf('M')
console.log(gg)


// slice


//    0     1    2    3   4   5   6
//    c     h    i    n   m   a   y
//    -7   -6   -5   -4  -3  -2   -1

let xyz = "chinmay"
let rrra = xyz.slice(2)
let rrra2 = xyz.slice(2,5)
let rrra3 = xyz.slice(-3)
let rrra4 = xyz.slice(1,-3)
let rrra5 = xyz.slice(-7,-3)
let rrra6 = xyz.slice(-1,-3)
console.log(rrra6)

// array string , object , functions