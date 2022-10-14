 // object -- > 

// property and method

// object literals

let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 32,
    calBirthYear: function () {
        console.log(2022 - this.age)
    }
}
// .dot notation and bracket notation 

console.log(chinmay.firstName)
chinmay.age = 33
chinmay.city = "pune"
delete chinmay.city

console.log(chinmay['firstName'])
chinmay['age'] = 33
chinmay['city'] = "pune"
delete chinmay['city']
console.log(chinmay)

chinmay.calBirthYear()

chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 32,
    calBirthYear: function () {
        console.log(2022 - this.age)
    }
}

let amit = {
    firstName: "amit",
    lastName: "bhure",
    age: 31,
    calBirthYear: function () {
        console.log(2022 - this.age)
    }
}
amit.calBirthYear()

// object literal
// Different ways to create object 

//1 object literal 
//2 function constructor
//3 Es6 class 
//4 Object.create()


// function constructor 

let Person = function (fn, ln) {
    this.firstName = fn
    this.lastName = ln
}

let poorva = new Person("poorva", "vyas")
console.log(poorva)

poorva.firstName = "apoorva"
poorva.lastName = "avyas"
console.log(poorva)

//let a = [1,4,5]

// function contructor
let Person2 = function (fn, ln, ag, rn, skills) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
    this.skills = skills
}
let amol = new Person2("amol", "dani", 12, 34, ["python", "java"])
let chinmay2 = new Person2("chinmay", "deshpande", 23, 34, ["html", "css"])
console.log(amol)
console.log(chinmay2)

chinmay2.age = 44
// method


Person2 = function (fn, ln, ag, rn, skills) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
    this.skills = skills
    this.numberSkills = function () {
        console.log(this.skills.length)
    }

}
let ram = new Person2("ram", "das", 34, 44, ["python", "javascript"])
let ram2 = new Person2("ram2", "das2", 3, 4, ["python3", "javascript2"])
console.log(ram.firstName)
console.log(ram.lastName)
console.log(ram.age)
console.log(ram.rollNo)
console.log(ram.skills)
ram.numberSkills()
console.log(ram)
console.log(ram2)

console.log(ram2 instanceof Person2)
console.log(ram instanceof Person2)
console.log(ram._proto_ === Person2.prototype)

//-----------------------/
// Object - property and method
// Object ---> _proto_
// _proto_ == parent.Protype


// 7 am ===>  8 pm 
// 2 pm cypress
// 7am == 8 pm 
// shital


let ramOne = {
    fullname: "ram prasad",
    age: 34,
    city: "pune",
    skills: ["python", "javascript"]

}

let ramTwo = {
    fullname: "ram2 prasad",
    age: 32,
    city: "pune",
    skills: ["python3", "javascript", "html"]

}
// function constructor 
// es6 class 
// Object create 

console.log("-----------------------------------------------------------------------")

let Person5 = function(fn,ag,cy,sks){
    this.fullname = fn
    this.age = ag 
    this.city = cy
    this.skills = sks
}

let ram3 = new Person5("ram3 prasad",33,"pune",["css","java","ruby"])
let ram4 = new Person5("ram4 prasad",34,"pune",["css3","javascript","rails"])

console.log(ram3)
console.log(ram4)

// object ---- property and method  


// program 2 


// let Vehicle =  function(color,regNo,city,type){
//     this.color = color
//     this.regNo = regNo
//     this.city = city 
//     this.type = type
//     this.colorDisplay = function(){
//         console.log(`Car's color is ${this.color} `)
//     }
// }

// let audi  = new Vehicle('red',"123","pune","sedane")
// let bwm  = new Vehicle('black',"678","banglore","SUV")

// console.log(audi)
// console.log(bwm)

// // Object ===> 
// //syntax ==> obj._proto_  ===> parent.protype
// console.log(audi._proto_ === Vehicle.prototype)
// console.log(audi instanceof Vehicle)

// solution

let Vehicle =  function(color,regNo,city,type){
    this.color = color
    this.regNo = regNo
    this.city = city 
    this.type = type
    // this.displayColor = function(){
    //     console.log(this.color)
    // }
}

Vehicle.prototype.displayColor = function(){
    console.log(this.color)
}
let audi  = new Vehicle('red',"123","pune","sedane")
let bwm  = new Vehicle('black',"678","banglore","SUV")

console.log(audi)
console.log(bwm)

audi.displayColor()
bwm.displayColor()


// obj ---->  obj._proto_ === parent.prototype
// prototype inheritance 
//audi._proto_ === Vehicle.prototype
// console.log(audi)
console.log(Vehicle.prototype)

// Array 

let names = ["chinmay","ram","sham","satish"]
let city = ["pune","nagpur","kolkata","banglore"]

// Array
console.log(names.pop())
console.log(city)
console.log(names._proto_ === Array.prototype)
// names._proto_.displayColor = function(){
//     console.log('hello')
// }
// names.dis()
// console.log(names._proto_ === Array.prototype)
// console.log(Array.prototype)
// function constructor 

let Animal = function(name,legs){
    this.name = name 
    this.legs = legs
}
Animal.prototype.color = function(){
    console.log('black')
}
Animal.prototype.country = "India"

let tiger = new  Animal("tiger",4)
let spider = new  Animal("spider",8)

console.log(tiger.hasOwnProperty('name'))
console.log(tiger.hasOwnProperty('country'))

console.log(tiger)
console.log(spider)
console.log(tiger.country)
console.log(spider.country)

console.log(tiger.hasOwnProperty('name'))
console.log(tiger.hasOwnProperty('country'))
// Function constructor 




//  Es6 class