// function addition() {

//     let x = 10
//     let y = 15
//     console.log(x + y)
//     //console.log(a+b)
//     function additionB() {
//         let a = 30
//         let b = 15
//         //console.log(d+e)
//         console.log(x + y + a + b)
//         function additionC() {
//             let d = 10
//             let e = 70
//             console.log(a + b + e + d + x + y)
//         }
//         additionC()
//     }

//     additionB()

// }
// addition()

// // program 2

// function Sub(x, y) {
//     console.log(x - y)
//     return x - y
//     console.log('hello')
// }
// let q1 = Sub(10, 5)
// console.log(q1)


// program 3

// let bal = 0
// function Bank(amount, type) {
//     let name = "ICIC"
//     if (type == "deposit") {
//         let deposit = function (amount) {
//             bal = bal + amount
//         }
//         deposit(amount)
//     }
//     else {
//         let withdrawl = function (amount) {
//             if (bal > amount) {
//                 bal = bal - amount
//             }
//         }
//         withdrawl(amount)
//     }

//     let rate = function(){
//         return bal * 0.6
//     }

//     //return bal

//     return [bal,name,rate]
// }

// basic
// let q11 = Bank(1000,"deposit") // 1000
// q11 = Bank(1500,"deposit")// 2500
// q11 = Bank(1500,"withdrawl") // 1000
// console.log(q11)


// let q11 = Bank(1000,"deposit")
// console.log(q11[0])
// console.log(q11[1])
// let r22 = q11[2]

// let r22 =  function(){
//     return bal * 0.6
// }

// let tt = r22()
// console.log(tt)


/Copy - 2/



// let bal = 0
// function Bank(amount, type) {
//     let name = "ICIC"
//     let deposit = function (amount) {
//         bal = bal + amount
//     }
//     let withdrawl = function (amount) {
//         if (bal > amount) {
//             bal = bal - amount
//         }
//     }
//     let rate = function () {
//         return bal * 0.6
//     }
//     type == "deposit" ? deposit(amount) : withdrawl(amount)
//     return [bal, name, rate]
// }

// let q11 = Bank(1000, "deposit")
// console.log(q11[0])
// console.log(q11[1])
// let r22 = q11[2]
// let tt = r22()
// console.log(tt)


// Copy -3

// let bal = 0
// function Bank(amount, type) {
//     let name = "ICIC"
//     let deposit =  (amount) => bal = bal + amount
//     let withdrawl =  (amount) => {
//         if (bal > amount) {
//             bal = bal - amount
//         }
//     }
//     let rate = ()=> bal * 0.6
//     type == "deposit" ? deposit(amount) : withdrawl(amount)
//     return [bal, name, rate]
// }

// let q11 = Bank(1000, "deposit")
// console.log(q11[0])
// console.log(q11[1])
// let r22 = q11[2]
// let tt = r22()
// console.log(tt)


// exact difference between arrow function and expression


// var x = 10
// console.log(x)
// console.log(window.x)

// var firstName = "ram"
// var lastName = "dani"


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     display:function(){
//         // this == info
//         console.log(this.firstName + this.lastName)
//         let display2 = function(){
//             // this == window
//             console.log(this.firstName+ this.lastName)
//             // undefined + undefined ===> NaN
//         }
//         display2()
//     }
// }

// console.log(info.display)
// info.display()


// let person = {

//     firstName:"chinmay",
//     age:23,
//     rollNo:23,
//     display:function(){
//         // this == person
//         console.log(this.firstName) // chinmay
//         let display2 = ()=>{
//             // this == parent's this keyword
//             console.log(this.firstName) // chinmay
//         }
//         display2()
//     }

// }

// person.display()





// // this == window
// let person = {

//     firstName:"chinmay",
//     age:23,
//     rollNo:23,
//     display:()=>{
//         // this == parent's this keyword
//         console.log(this.firstName) // ram
//         let display2 = ()=>{
//             // this == parent's this keyword
//             console.log(this.firstName) // ram
//         }
//         display2()
//     }

// }
// person.display()


let amol = {
    firstName:"amol",
    lastName:"rao",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
amol.display() // "amolrao"

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
}
let fn = amol.display // method borrow
// let fn = function(){
//     console.log(this.firstName + this.lastName)
// }
// fn()
let fn2 = fn.bind(chinmay) // this == chinmay
// let fn2 = function(){
//     console.log(chinmay.firstName + chinmay.lastName)
// }

fn2()




// bind -- this -- manually set

// call  -- this -- manually set

// apply -- this -- manually set














// retrive 
// console.log(info.firstName)
// console.log(info['firstName'])
// // update 
// info.firstName = "poorva"
// info['firstName'] = "poorva"
// // add 
// info.city = "pune"
// info['city'] = "mumbai"
// // delete

// delete city.age