// object methods
//1 object literal
//2 function contructor
//3  Es6 class


let WorldBank=class
{
    constructor(accName,accNo,city)
    {
        this.accName=accName
        this.accNo=accNo
        this.city=city
    }
    depoist(){
        console.log(' depoist world bank')
        
    }

    withdrawl(){
        console.log('withdrawl world bank')
    }


    }


class SBI extends WorldBank
{
    constructor(accName,accNo,city,IFSC)
    {
        super(accName,accNo,city)
        this.IFSC=IFSC
    }
    depoist()
    {
        
        console.log("deposit of SBI")
        super.depoist()
    }
    withdrawl()
    {
        console.log("withdrawl of SBI")
       super.depoist()
    }
}

class PNB extends WorldBank
{
constructor(accName,accNo,city,IFSC)
{
    super(accName,accNo,city)
    this.IFSC=IFSC
}
depoist()
{
    console.log("deposit of PNB")
    super.depoist()
}
withdrawl()
{
    console.log("withdrawl of PNB")
    super.depoist()
}
}

let states=new SBI("supriya",123,"mumbai",0004)
let states1=new PNB("abhi",998,"pune",0006)

console.log(states)
console.log(states1)

console.log("-------")
states.depoist()
states1.depoist()
 
console.log("-------withdrawl-----")
states.withdrawl()
states1.withdrawl()

console.log("--------------------------")
console.log(states.accName)
console.log(states1.accName)
console.log(states.city)
console.log(states1.city)

//console.log(states.deposit())

//overloading // same class , same method name,different signature

console.log("------function ovrloading-------")

function multiA(x,y,z,a)
{
    if(x!==undefined && y!==undefined && z!==undefined && a!==undefined)
    {
        console.log(x*y*z*a)
    }
    else if(x!==undefined && y!==undefined && z!==undefined)
    {
        console.log(x*y*z)
    }
    else if(x!=undefined && y!==undefined)
    {
        console.log(x*y)
    }
}
multiA(1,2,3,4)
multiA(1,2,3)
multiA(1,2)

//
console.log("-------class in overloading------")

class Mass
{
additionA(x,y,z,a)
{
    if(x!==undefined && y!==undefined && z!==undefined && a!==undefined) 
    {
        console.log(x+y+z+a)
    }
    else if(x!==undefined && y!==undefined && z!==undefined)
    {
        console.log(x+y+z)
    }
    else if(x!==undefined && y!==undefined)
    {
        console.log(x+y)
    }
}
}
let sum=new Mass
sum.additionA(1,2,3,4)
sum.additionA(1,2,3)
sum.additionA(1,2)

    console.log("------overriding----------")

    // different class, same method ,same signature
class Demo
{
    display(greet)
    {
        console.log(`welcome to greet ${ greet}`)
    }
}
class Test extends Demo
{
    display(greet)
    {
        console.log(`welcome to greet ${greet}`)
    }
}
let sa=new Test()
sa.display(" India")

