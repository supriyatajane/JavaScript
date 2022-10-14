// function constructor 

let Person = function(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln 
    this.age  = ag
    this.rn = rn
    this.display =function(){
        console.log(this.firstName , this.lastName)
    }
}

let amol2 = new Person("amol2","rao2",13,44)
let amol3 = new Person("amol3","rao2",13,44)
let amol4 = new Person("amol4","rao2",13,44)
let amol5 = new Person("amol5","rao2",13,44)
let amol6 = new Person("amol6","rao2",13,44)
// console.log(amol2)
let students= [amol2,amol3,amol4,amol5,amol6]
console.log(students)

// city -- pune
students.forEach(function(el){
    el.city = "pune"
})
console.log(students)

students.forEach(function(el){
    el.display()
})


// ------------------


let Person2 = function(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}


let suraj = new Person2("suraj","sharma")
let samer = new Person2('samer',"verma")

// object --->  _proto_
// let suraj = new Person2("suraj","sharma")
// let samer = new Person2('samer',"verma")

// suraj.displayName()
// samer.displayName()

console.log(suraj._proto_ === Person2.prototype)
console.log(samer._proto_ === Person2.prototype)

Person2.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person2.prototype.language = "Hindi"
suraj.displayName()
samer.displayName()
console.log(suraj)
console.log(samer)

console.log(samer.language)
console.log(suraj.language)


let names = ["chinmay","sarika","poorva"]
console.log(names)

names.length
names.push('abhisha')
console.log(names._proto_ === Array.prototype)



// javascript ----> 8:15 pm 
// javascript -- 9.00 am
// cypress -- 7 .00 am / 7:30 pm
// javascript ---- 9:15 pm projects
// Typescript





















