//object creation ways in (oops) methods

// object literal
// Different ways to create object 

//1 object literal 
//2 function constructor
//3 Es6 class 
//4 Object.create()

// 1 object literal
let person={
    name:"supriya",
    lname:"tajane",
    age:22,
     calBirthYear:function()
     {
         console.log(2022-this.age)
     }
}

console.log(person.name)

person.lname="shrma"
console.log(person)
person.calBirthYear()


let student={
    name:"rutuja",
    lname:"varpe",
    age:33,
    calBirth:function()
    {
        console.log(2022-this.age)
    }
}

for(let key in student)
{
    console.log(key,student[key])
}
console.log(student.age)
student.skill=["phython","css"]
student.lang="english"
console.log(student)
student.calBirth()
delete student.skill

console.log(student)


// object creation types
// 2 function constructor

let Morya= function(fn,ln)
{
    this.fname=fn
    this.lname=ln
}
let priya=new Morya("priya","jadav")
let riya=new Morya("riya","sharma")
console.log(priya)
console.log(riya)

// 
let Morya1=function(fn,ln,rl,ag,sk)
{
    this.fname=fn
    this.lname=ln
    this.rollno=rl
    this.age=ag
    this.skill=sk
}
let gunjan=new Morya1("gunjan","jadav",22,44,["phython","css"])
let sujata=new Morya1("sujata","deshmukh",33,55,["css","java"])
console.log(gunjan)
console.log(sujata)

console.log(sujata.fname)
console.log(gunjan.skill)

let Morya2=function(fn,ln,rl,ag,sk)
{
    this.fname=fn
    this.lname=ln
    this.rollno=rl
    this.age=ag
    this.skill=sk
  this.calLength=function()
    {
     console.log(this.skill.length)
     console.log(typeof(ag))

    }
}
let rani=new Morya2("rani","mukrjie",22,33,["ds","cpp"])
let dk=new Morya2("diya","rahane",22,11,["php","dss"])


console.log(rani)
console.log(dk)
rani.calLength()

console.log(rani instanceof Morya2)
console.log(dk instanceof Morya2)

console.log(rani.__proto__===Morya2.prototype)
console.log(dk.__proto__===Morya2.prototype)