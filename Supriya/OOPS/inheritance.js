// inheritance
//program one
class GrandFather
{
    constructor(fn,ln)
    {
        this.fn=fn
        this.ln=ln
    }
    display()
    {
        console.log(this.fn+ " "+this.ln)
    }
}
class Father extends GrandFather
{
    greet()
    {
        console.log("hello")
    }
}

let abhijit=new Father("sunil","tajane")
console.log(abhijit.fn)
console.log(abhijit.ln)
abhijit.display()

let sunil=new GrandFather("bahu","tajane")
sunil.display()
//sunil.greet() this will not working because father not acess child method


// program 2
class GrandFather1
{
    constructor(fname,lname)
    {
        this.gfatername=fname
        this.lastname=lname
    }
    display()
    {
        console.log(this.gfatername+" "+this.lastname)
    }
}

class father1 extends GrandFather1
{
    constructor(gfatername,lastname,ffirstname)
    {
        super(gfatername,lastname)
        this.ffirstname=ffirstname
    }
    display()
    {
        console.log(this.ffirstname+" "+this.lastname)
        super.display()
    }
}
let abhijit1=new father1("bahu","tajane","sunil")
console.log(abhijit1.ffirstname)
console.log(abhijit1.lastname)
console.log(abhijit1.gfatername)

abhijit1.display()

// program 3

class Student
{
    constructor(fn,ln)
    {
        this.firstName=fn
        this.lastName=ln
    }
    display()
    {
        console.log(this.firstName+ " "+this.lastName)

    }
}

class Teacher extends Student
{
    constructor(fn,ln,salary)
    {
        super(fn,ln)
        this.salary=salary
    }
    displaySalary()
    {
        console.log(this.salary)
    }
}
class Professor extends Teacher
{
    constructor(fn,ln,salary,spec)
    {
        super(fn,ln,salary)
        this.spec=spec
    }
    displaySpaec()
    {
        console.log(this.spec)
    }
}
let parth=new Professor("parth","shrma",20000,"it")
console.log(parth.spec)
console.log(parth.salary)
console.log(parth.firstName)
console.log(parth.lastName)

parth.displaySalary()
parth.displaySpaec()
parth.display()