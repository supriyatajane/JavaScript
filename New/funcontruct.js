// Object -- property and method

// Object literal

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:12,
    rollNo:123,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:11,
    rollNo:111,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
chinmay.display()



// console.log(amol.firstName)
// console.log(amol.lastName)
// amol.display()

// // template ----> object creation 


// setting property value of object outside the class

class Person {

     firstName=undefined
     lastName= undefined
     rollNo=undefined
     age = undefined

     display(){
         console.log(this.firstName + this.lastName)
     }

 }

// let chinmay2 = new Person()
// console.log(chinmay2)

// chinmay2.age = 12
// chinmay2.lastName = "deshpande"
// chinmay2.rollNo = 33
// chinmay2.firstName = "chinmay"

// console.log(chinmay2)
// chinmay2.display()

// setting the property value of object at the time of object creation 


class Person1 {
    constructor(fn,ln,roll,age){
        this.firstName = fn
        this.lastName = ln
        this.roll = roll
        this.age = age

    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay3 = new Person1("chinmay3","deshpande3",22,44)
let harikesh = new Person1("harikesh","prasad",33,44)
let sarika = new Person1('sarika',"pansare",44,55)

console.log(chinmay3)
chinmay3.display()

sarika.lang = "hindi"
console.log(chinmay3)
console.log(sarika)