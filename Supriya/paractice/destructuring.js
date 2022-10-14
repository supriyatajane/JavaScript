 let arr = [11,22,33]

let a = arr[0]
let b = arr[1]
let c = arr[2]

console.log(a)
console.log(b)
console.log(c)

// arr unpack -- destructure

// program 1
let [aa,bb,cc] = arr
console.log(aa)
console.log(bb)
console.log(cc)

// program 2
//            0       1      2
let names = ["ram","sham","satish"]
let [q,w,r] = names
console.log(q)
console.log(w)
console.log(r)

// program 3
 ///           0          1            2
let arrA = [[11,22,33],[55,66,77],[88,99,0]]
let [[a1,b1,c1],[gg,hh,yy],[tt,uu,zz]] = arrA
console.log(tt)


let namesA = [["ram","sham"],["sarika","pratik"]]
let [[za,ba],[nn,mm]] = namesA
console.log(mm)

// program4

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:23
}

// let {age,rollNo,lastName,firstName} = info
// console.log(age)
// console.log(rollNo)
// console.log(firstName)
// console.log(lastName)


// let {age:a7,rollNo:r7,lastName:l7,firstName:f7} = info
// console.log(a7)
// console.log(r7)
// console.log(l7)
// console.log(f7)

// old way

// let fn = info.firstName
// let ln = info.lastName
// let ag = info.age
// let rn = info.rollNo
// console.log(fn)
// console.log(ln)
// console.log(ag)
// console.log(rn)


// program 5

// object inside array 


let students = [

    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"poorva",
        lastName:"vyas"
    }

]

let [{firstName:d1,lastName:d2},{firstName:e1,lastName:e2}] = students
console.log(d1)
console.log(d2)
console.log(e1)
console.log(e2)


// array inside object 

// program 6

let lang = {
    chinmay:["javascript","python3"],
    tanmay:["html","css"]
}

let {chinmay:[y1,y2],tanmay:[y3,y4]} = lang

console.log(y1)
console.log(y2)
console.log(y3)
console.log(y4)


// object inside object

let parent ={

    father:{
        firstName:"shirish",
        lastName:"deshpande"
    },
    mother:{
        firstName:"kanchan",
        lastName:"deshpande"
    }
}

let {father:{firstName:h1,lastName:h2},mother:{firstName:f1,lastName:f2}} = parent
