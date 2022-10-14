// inheritance (reuse the code)avoid the repitation

class Grandfather{
constructor(firstname,lastname)
{
    this.firstname=firstname
    this.lastname=lastname
}

display()
{
    console.log(this.firstname +" "+this.lastname)
}

}

class Father extends Grandfather{
    constructor(gfname,lastname,fname)
    {
    super(gfname,lastname)
    this.fname=fname
    }

    display()
    {
        super.display()
        console.log(this.fname +" "+this.lastname)
    }
}

// let sunil=new Father('bhausaheb','tajane','sunil')
// sunil.display()

class Son extends Father{

    constructor(gname,lastname,fname,sname)
    {
        super(gname,lastname,fname)
        this.sname=sname
    }
    display()
    {
       
        super.display()
        console.log(this.sname +" "+this.lastname)
        
    }
}
let supriya=new Son('bhau','tajane','sunil','supriya')
supriya.display()


class Parent{
    constructor(fname,lname,manme)
    {
        this.fname=fname
        this.lname=lname
        this.manme=manme
    }
    displayFather()
    {
        console.log(this.fname+" "+this.lname)
    }
    displayMother()
    {
        console.log(this.manme+" "+this.lname)
    }
}
class son extends Parent
{
    constructor(fname,lname,manme,sname)
    {
     super(fname,lname,manme)
     this.sname=sname
    }
    displaySon()
    {
        super.displayFather()
        super.displayMother()
        console.log(this.sname+" "+this.lname)
    }
}
class Daughter extends Parent
{
    constructor(fname,lname,manme,dname)
    {
  super(fname,lname,manme)
  this.dname=dname
    }
    displayDaugther()
    {
        super.displayFather()
        super.displayMother()
         console.log(this.dname+ " "+this.lname)
    }
}

let abhijit=new son('sunil','tajane','alka','abhijit')
abhijit.displaySon()

let supriya1=new Daughter('sunil','tajane','alka','supriya')
supriya1.displayDaugther()