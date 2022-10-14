//closure 
function coun()
{
    let count=1
    return function add()
    {
        count=count+1
        console.log(count)
    }
}

// coun()()
// coun()()
let aa=coun()
aa()
aa()


// {
//    // let s=10
//     let b=10
//     var c=90
// }
// //console.log(s)
// console.log(c)

console.log("=============================")

class Students{
    constructor()
    {
        let marks=10
        let age=22

        this.getmark=function()
        {
            this.marks=marks
            console.log(marks)
        }
        
        this.getage=function()
        {
            this.age=age
            console.log(age)
        }
    }
}

let supriya=new Students()
supriya.getage()
supriya.getmark()

console.log(supriya.age)

class Student2{

    constructor(firstname,lastname,age,mark)
    {
        this._firstname=firstname
        this._lastname=lastname
        this._age=age
        this._mark=mark
    }

    getagee()
    {
        console.log(this._age)
    }

    getmarkk()
    {
        console.log(this._mark)
    }
    getlastname()
    {
        console.log(this._lastname)
    }
}
let abhii=new Student2('abhii','tajane',22,33)
abhii.getagee()
abhii.getmarkk()
abhii.getlastname()


class Employee{
    constructor(firstname,lastname,age,basics)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
        this.basicsalary=basics
        this.bonus=500
    }
    updatedSalary()
    {
        totalsalry=this.basicsalary+this.bonus
    }

    getTotalSalary()
    {
        console.log(this.totalsalry)
    }


}

let HDFC=new Employee('sara','sharma',22,2000)
// HDFC.getTotalSalary()
HDFC.bonus=5000
HDFC.updatedSalary=function()
{
    this.totalsalry=this.basicsalary+this.bonus+this.basicsalary
}

HDFC.updatedSalary()
HDFC.getTotalSalary()