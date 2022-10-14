// call bind and apply


let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

let amol = {
    firstName: "amol",
    lastName: "rao"
}


let fn = chinmay.display
// let fn = function(){
//     console.log(this.firstName+this.lastName)
// }
fn()

// bind()
// let fn = function(){
//     console.log(amol.firstName+amol.lastName)
// }

let fn2 = fn.bind(amol)
fn2()

//----------------------------------


let amol2 = {
    firstName: "amol2",
    lastName: "rao2"
}
let chinmay2 = {
    firstName: "chinmay2",
    lastName: "deshpande2"
}
let poorva2 = {
    firstName: "poorva2",
    lastName: "vyas2"
}

let display = function () {
    console.log(this.firstName + this.lastName)
}

console.log('bind')
display.bind(amol2)()
display.bind(chinmay2)()
display.bind(poorva2)()


// apply()
console.log('apply')
display.apply(amol2)
display.apply(chinmay2)
display.apply(poorva2)

// call()
console.log('call')
display.call(amol2)
display.call(chinmay2)
display.call(poorva2)


let student1 = {
    firstName: "chinmay",
    lastName: "deshpande",

}
let student2 = {
    firstName: "chinmay2",
    lastName: "deshpande2",

}
let student3 = {
    firstName: "chinmay3",
    lastName: "deshpande3",
}

let greet = function (word) {
    console.log(`${word} ${this.firstName} ${this.lastName}`)
}
//student1.greet("hello")
greet.apply(student1,["hi"])
greet.apply(student2,["hello"])
greet.apply(student3,["bye"])

greet.call(student1,"hi")
greet.call(student2,"hello")
greet.call(student3,"bye")

// bind(),call(),apply()array

// //            0  1  2  3
// let  marks = [11,22,33,44]

// let a0 = marks[0]
// let a1 = marks[1]
// let a2 = marks[2]
// let a3 = marks[3]

// console.log(a0)
// console.log(a3)

// let [b0,b1,b2] = marks
// console.log(b0)
// console.log(b1)
// console.log(b2)

// let city = ["pune","nagpur","mumbai"]
// let [c0,c1,c2] = city
// console.log(c0)
// console.log(c1)
// console.log(c2)

// // program2

// //                       0                        2
// //              0         1        2        0        1       2
// let cities = [["wardha","nagpur","pune"],["indore","bhopa","ujjain"]]
// let [[e0,e1,e2],[e3,e4,e5]] = cities
// console.log(e5)
// console.log(e3)

// // program 3


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12
// }

// let {firstName,lastName,age} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)


// let {firstName:fn1,lastName:ln,age:ag} = info
// console.log(fn1)
// console.log(ln)
// console.log(ag)


// let q1 = info.firstName
// let q2 = info.lastName
// let q3 = info.age

// console.log(q1)
// console.log(q2)
// console.log(q3)