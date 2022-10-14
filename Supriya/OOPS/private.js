// encapusulation
// object -----properties===>method only


class Person
{
    constructor(name ,age,salary)
    {
        this.name=name
        this.age=age
        this.salary=salary
    }
    updateName(nm)
    {
        this.name=nm
    }
    updateAge(ag)
    {
        this.age=ag
    }
    updateSalary(sa)
    {
        this.salary=sa
    }

    getname()
    {
        this.name
    }
    getage()
    {
        this.age
    }
    getsalary()
    {
        this.salary
    }
}
let amol=new Person("amol",22,2000)
console.log(amol)


const a = 123
if(true){
    let aa = 10
 }

 {
     let c = 11
 }
 console.log(a)
 //console.log(c)
 //console.log(aa)

 //function

 const printName2=function()
 {
     let firstName="supriya"
     let lastName="tajane"

     let printFullName=function()
     {
         console.log(firstName+" "+lastName)
     }
     return printFullName
 }
 printName2()()

 let aa=printName2.firstName
//  console.log(aa)---it is not acessible outside private scope

//closeure
function add()
{
    let a=10
    let b=20
    return function()
    {
        console.log(a)
        console.log(b)
    }
}
let b=add()
b(a)
// let dd=(add.a)
// console.log(dd)


// program 3
class Employee
{
    constructor(){
        let firstName="sarika"
        let lastName="pansare"
        this.display=function()
        {
            console.log(firstName+" "+lastName)
        }
    }
    
}
let abc=new Employee()
abc.display()
//console.log(abc.firstName)

// progarm 4
//_

class Employee1
{
    constructor(firstName,lastName)
    {
        this._firstName=firstName
        this._lastName=lastName
        this.display1=function()
        {
            return this._firstName+ " "+this._lastName
        }
    }
}
let abhi=new Employee1('abhi','tajane')
console.log(abhi.display1())