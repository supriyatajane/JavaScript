 // object literal
let amol = {
    firstName: "chinmay",
    lastName: "deshpande",
    rollNo: 123,
    age: 23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

// function contructor

let Person = function(firstName,lastName,rollNo,age){
    this.firstName = firstName
    this.lastName = lastName
    this.rollNo = rollNo
    this.age = age
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }

}

let amol1  = new Person("amol1","rao1",23,34)
let amol2  = new Person("amol2","rao2",23,34)
// console.log(amol1)
// console.log(amol2)


// Object _proto_  === Person.prototype
console.log(amol1._proto_ === Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.lang = "Hindi"

amol1.display()
amol2.display()

console.log(amol1 instanceof Person)
console.log(amol1.hasOwnProperty('firstName'))
console.log(amol1.lang)
console.log(amol1.hasOwnProperty('lang'))

// Protype inheritance 

// Es6 class 

// Setting the property of object outside the class
class Person2 {
    firstName = undefined
    lastName = undefined
    rollNo = undefined
    age =  undefined
}

let amol5 =  new Person2()