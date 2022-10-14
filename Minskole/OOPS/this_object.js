 // let chinmay = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     printName: function () {
//         console.log(this.firstName + this.lastName)
//     }

// }

// chinmay.printName()
// //console.log(chinmay.printName)

// let printName2 = chinmay.printName;

// // let printName2 = function(){
// //     console.log(this.firstName + this.lastName)
// // }

// printName2();
// //console.log(undefined+undefined)



// // program 



// let chinmay2 = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     displayName: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// chinmay2.displayName()
// console.log(chinmay.displayName)

// // function(){
// //     console.log(this.firstName + this.lastName)
// // }

// let a = chinmay.displayName

// let ab = function () {
//     console.log(this.firstName + this.lastName)
// }

// ab()



let amol2 = {
    firstName: "chinmay",
    lastName: "deshpande"
}
let ram = {
    firstName: "ram",
    lastName: "dani"
}


let displayName = function(){
    console.log(this.firstName +" "+this.lastName)
}

let fn = displayName.bind(ram)
fn()

displayName.bind(amol2)()
function add(){
    return function(){
        console.log('hello')
    }
}

add()()

// program 3

function displayName3(){
    console.log(`Hi ${this.firstName} ${this.lastName}`)
}

let poorva = {
    firstName:"poorva",
    lastName:"vyas"
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare"
}

displayName3.call(poorva)
displayName3.call(sarika)

// apply


let display4 = function(greet){
    console.log(`${greet} ${this.firstName}  ${this.lastName}`)
}

let rohit = {
    firstName:"rohit",
    lastName:"vyas"
}

let navnath = {
    firstName:"navnath",
    lastName:"kalyankar"
}

display4.apply(rohit,['Good morning'])



//  bind apply call??



// program 2


let b = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this)
        console.log(this.firstName , this.lastName)
    }
}

b.displayName()


let c = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:()=>{
        console.log(this)
        console.log(this.firstName + this.lastName)
    }
}

c.displayName()
