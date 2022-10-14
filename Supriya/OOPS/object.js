// object creation method
//object literal

let person={
    firstName:"supriya",
    lastName:"tajane",
    age:22,
   display:function()
    {
        console.log(`first name is  ${ this.firstName}`)
    }

}
console.log(person)
person.display()

// function contructor
let Adda=function(name,color)
{
    this.name=name
    this.color=color
}
let bba=new Adda('abhi','orange')
console.log(bba)

// es6 class
class Employee
{
    constructor(name,desg,id)
    {
        this.name=name
        this.desg=desg
        this.id=id
    }
}
let emp=new Employee('sona','CEO',123)
console.log(emp)

//object create
let demo=Object.create({})
console.log(demo)
//
demo.firstName="rani"
demo.lastName="mukrjee"
demo.age=33
console.log(demo)
// object create method with prototype

let pros={
    display:function()
    {
        console.log(2022-1998)
    }
}

let pars=Object.create(pros)
console.log(pars)
pars.display()
console.log(pars.__proto__)

let pros2={
    cal:function()
    {
        console.log(2022-1999)
    },
init(name,lname,color)
{
    this.name=name
    this.lname=lname
    this.color=color
}
}
let rrr=Object.create(pros2)
console.log(rrr)
rrr.cal()
rrr.init('sara','kate','red')
console.log(rrr)


let randomNumber=Math.floor(Math.random()*6)+1
console.log(randomNumber)

let userInput=prompt('enter the no')

if(userInput==randomNumber)
{
    console.log('guess is correct')
}
else
{
    console.log('guess is incorrect')
}

//definite time (for loop)
 let randomNumber1=Math.floor(Math.random()*6)+1
 console.log(randomNumber1)

 let userInput1=prompt('enter the no')

 for(let i=0;i<4;i++)
 {
     let userInput1=prompt('enter the no')
     if(userInput1==randomNumber1)
     {
         console.log("guess is correct")
     }
     else {
         console.log('guess is incorrect')
     }
 }

 // until condition (while loop)

 let randomNumber2=Math.floor(Math.random()*6)+1
 console.log(randomNumber2)

 let userInput2=prompt('enter the no')
 while(userInput!=randomNumber)
 {
     let userInput2=prompt('enter the no')
     if(userInput2==randomNumber2)
     {
         console.log('guess is correct')
     }
     else{
         console.log('guess is incorrect')
     }
 }