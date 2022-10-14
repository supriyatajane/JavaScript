// object -- > 

// property and method

// object literals

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    calBirthYear:function(){
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
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    calBirthYear:function(){
        console.log(2022 - this.age)
    }
}

let amit = {
    firstName:"amit",
    lastName:"bhure",
    age:31,
    calBirthYear:function(){
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

let Person = function(fn,ln){
    this.firstName = fn
    this.lastName = ln
}

let poorva = new Person("poorva","vyas")
console.log(poorva)

poorva.firstName = "apoorva"
poorva.lastName = "avyas"
console.log(poorva)

//let a = [1,4,5]

// function contructor
let Person2 = function(fn,ln,ag,rn,skills){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn 
    this.skills = skills
}
let amol = new Person2("amol","dani",12,34,["python","java"])
let chinmay2 = new Person2("chinmay","deshpande",23,34,["html","css"])
console.log(amol)
console.log(chinmay2)

chinmay2.age = 44
// method


Person2 = function(fn,ln,ag,rn,skills){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn 
    this.skills = skills
    this.numberSkills = function(){
        console.log(this.skills.length)
    }

}
let ram = new Person2("ram","das",34,44,["python","javascript"])
let ram2 = new Person2("ram2","das2",3,4,["python3","javascript2"])
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

///-----------------------/ 
// Object - property and method
// Object ---> _proto_
// _proto_ == parent.Protype


// 7 am ===>  8 pm 
// 2 pm cypress
// 7am == 8 pm 
// shital
