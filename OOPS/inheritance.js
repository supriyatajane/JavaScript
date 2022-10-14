//inheritance ----reuse the code 
//inherited propreties and method to their child class
//use the inhertad class using extend keyword

class GarandFather{
    constructor(Gname,lname)
    {
        this.Gname=Gname
        this.lname=lname
    }
    dislay()
    {
        console.log(`${this.Gname}${this.lname}`)
    }
}


class Father extends GarandFather{
    constructor(Gname,lname,Fname)
    {
        super(Gname,lname)
        this.Fname=Fname
    }
    dislay()
    {
        super.dislay()
        console.log(`${this.Fname}`)
    }

}

class Son extends Father{
    constructor(Gname,lname,Fname,Sname)
    {
        super(Gname,lname,Fname)
        this.Sname=Sname
    }
    dislay()
    {
        super.dislay()
        console.log(`${this.Sname}`)
    }
}

let son1=new Son('Bahusaheb','Tajane','Sunil','Abhijit')
son1.dislay()


// multilevel inheritance

class Parents{
    constructor(Pname,Mname)
    {
        this.Pname=Pname
        this.Mname=Mname
    }
    display()
    {
        console.log(`${this.Pname} ${this.Mname}`)
    }
}

class Sons extends Parents{
    constructor(Pname,Mname,Sname)
    {
        super(Pname,Mname)
        this.Sname=Sname
    }
    display()
    {
        super.display()
        console.log(`${this.Sname}`)
    }
}

class Daughter extends Parents{
    constructor(Pname,Mname,Dname)
    {
        super(Pname,Mname)
        this.Dname=Dname
    }
    display()
    {
        super.display()
        console.log(`${this.Dname}`)
    }

}

let ss1=new Sons('Sunil','Dipa','Abhii')
let dd1=new Daughter('Sunil','Dipa','Supriya')
ss1.display()
dd1.display()