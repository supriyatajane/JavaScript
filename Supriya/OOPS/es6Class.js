//
//function contructor
let Pet=function(fn,ln,ag)
{
    this.fname=fn
    this.lname=ln
    this.age=ag
}

Pet.prototype.display=function()
{
    console.log(this.fname)
}

let jjj=new Pet("tiger","tg",12)
let rjj=new Pet("moti","mo",22)
console.log(jjj)
console.log(rjj)

jjj.display()
rjj.display()

console.log(jjj.__proto===Pet.__prototype)
console.log(rjj.__proto===Pet.__prototype)

//Es6 class
class Demo
{
    constructor(fname,lname,age)
    {
        this.fname=fname
        this.lname=lname
        this.age=age

    }

    display()
    {
        console.log(this.fname)
    }
}

let wqq=new Demo("suryakumar","yadav",22)
console.log(wqq)
wqq.display()

// setting the property current calling object
// out of the class

class Employee{
    ename=undefined
    desg=undefined
    code=undefined 
}
let gff=new Employee()
console.log(gff)
gff.ename="sudar"
gff.desg="ceo"
code=666
console.log(gff)

//setting the property at object creation(contructor)
class Employee1{
    constructor(lname,desg,code)
    {
        this.lname=lname
        this.desg=desg
        this.code=code
    }
} 
let yyx=new Employee1("amol","manager",11)
console.log(yyx)
let xxy=new Employee1("pooja","HR",66)
console.log(xxy)

// object creation using set method
class Employee2
{
    setColor(cl)
    {
        this.cl=cl
    }
    setType(type)
    {
        this.type=type
    }
}
let rrs=new Employee2()
rrs.cl="red"
rrs.type="new"
console.log(rrs)

class Bank{
    constructor(accName,accNo,city,bal)
    {
        this.accName=accName
        this.accNo=accNo
        this.city=city
        this.bal=bal
      this.transaction=[]

    }
    deposit(amount)
    {
        this.bal=this.bal+amount
       //this.transaction.push[amount]
       this.transaction.push(amount)
        console.log("the upadate balance is "  +this.bal)
        return this.bal
    }
    withdraw(amount)
    {
        if(this.bal>amount)
        {
          this.transaction.push(-amount)
            this.bal=this.bal-amount
            console.log("the upadate bal" + this.bal)
            return this.bal
        }
        else{
            console.log("insufficient bal")
        }
    }
     lastFiveTranscation()
     {
         console.log(this.transaction.slice(-5))
     }

}
let rry=new Bank("ram",333,"pune",1000)
console.log(rry)
rry.deposit(1000)
rry.withdraw(200)
rry.deposit(5000)
rry.withdraw(100)
rry.deposit(10000)
rry.withdraw(600)

rry.lastFiveTranscation()
