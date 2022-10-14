//function contructor
let Person=function(firstName,lastName,age)
{
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.display=function ()
    {
        console.log(`${firstName} ${lastName}`)
    }
}

let priya=new Person('priya','sharama',22)
let priya1=new Person('priya1','sharama',22)
let priya2=new Person('priya2','sharama',22)
let priya3=new Person('priya3','sharama',22)

console.log(priya)

priya.display()

let students=[priya,priya1,priya2,priya3]
console.log(students)

students.forEach(function(el){
    el.city="pune"
})
console.log(students)

students.forEach(function(el){
    el.display()
})

let Employee=function(firstName,lastName)
{
    this.firstName=firstName
    this.lastName=lastName
    // this.display=function()
    // {
    //     console.log(`${firstName} ${lastName}`)
    // }
}

let mayuri=new Employee('mayuri','galande')
let harshal=new Employee('harshal','galande')
console.log(mayuri)
console.log(harshal)


Employee.prototype.display=function()
{
    console.log(`${this.firstName} ${this.lastName}`)
}
mayuri.display()

//console.log(suraj._proto_ === Person2.prototype)
console.log(mayuri.__proto__===Employee.prototype)
console.log(harshal.__proto__===Employee.prototype)

Employee.prototype.lang="japanise"

console.log(mayuri.lang)


console.log(mayuri instanceof Employee)
console.log(mayuri.hasOwnProperty('lang'))
console.log(mayuri.hasOwnProperty('firstName'))

let a=['asha','disha','sss']
console.log(a.__proto__===Array.prototype)


// Es6 class
class Minister
{
    firstName=undefined
    lastName=undefined
    age=undefined
}
let shinde=new Minister()