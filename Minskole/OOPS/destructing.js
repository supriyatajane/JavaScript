 // // Es6 ==>

// let names = ["chinmay","poorva","ram"]
// let [aa ,bb,cc ] = names
// let [dd ,,ee ] = names

// console.log(aa)
// console.log(bb)
// console.log(cc)

// console.log(dd)
// console.log(ee)


// // program2 

// let cities  = [["nagpur","mumbai"],"banglore","bhopal"] 

// let [[aaa1,bbb1],bbb,ccc] = cities

// //console.log(aaa)
// console.log(bbb)
// console.log(ccc)
// console.log(aaa1)
// console.log(bbb1)

let a = 1
let b = 2


console.log(a)
console.log(b)


// let temp ;

// temp = a
// a = b 
// b = temp

// let x = 1 ;
// let y = 2 ;
// [x,y]=[y,x];  // [2,1]

// console.log(x)
// console.log(y)


// object

let person = {

    firstName: "chinmay",
    lastName: "deshpande"
}

let { firstName: fn, lastName: ln } = person
// console.log(firstName)
// console.log(lastName)
console.log(fn)
console.log(ln)

// combination 
let students = [
    {
        fullName: "chinmay",
        marks: 11
    }
    ,
    {
        fullName: "poorva",
        marks: 12
    }
]
let [ {fullName:fn1,marks:mk1},{fullName:fn2,marks:mk2}] = students
console.log(fn1)
console.log(mk2)

let obj = {
    skills:[2,3,4],
    skills2:[22,33,44]
}
let {skills:[a6,a7,a8],skills2:[a66,a77,a88]}  = obj
console.log(a6)
console.log(a77)


let info = {
    parents:{
        father:"shirish",
        mother:"kanchan"

    }
}

let { parents:{father:f1,mother:m1}} = info
console.log(f1)
console.log(m1)

// object array
l