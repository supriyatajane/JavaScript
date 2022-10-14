//  over loading and overriding 
// overloading --- same class class method , different signature
// overriding ---  different class , same method name and same signture


class Addition
{
    add(a,b,c,d)
    {
        if(a!=undefined && b!=undefined && c!=undefined && d!=undefined)
        {
            console.log(a+b+c+d)
        }
        else if(a!=undefined && b!=undefined && c!=undefined )
        {
            console.log(a+b+c)
        }
        else if(a!=undefined && b!=undefined)
        {
            console.log(a+b)
        }
    }
}
let aa=new Addition()
aa.add(1,2,3,4)
aa.add(1,2,3)
aa.add(1,2)


//ovveriding
// overriding ---  different class , same method name and same signture
class WorldBank{
    save()
    {
        console.log('worldBank Save')
    }
    loan()
    {
        console.log('WorldBank loan')
    }
}

class SBI extends WorldBank{
    save()
    {   
        super.save()
        console.log('SBI Save')
    }
    loan()
    {
        super.loan()
        console.log('SBI loan')
    }
}

let sb=new SBI()
sb.save()
sb.loan()


//Encapsulation

//we dont acess outside achive the privcy
class Demo{
    constructor(fn,ln)
    {
        let firstname=fn
        let lastname=ln
        this.display=function()
        {
            console.log(firstname+lastname)
        }
    }
}

let person=new Demo('supriya','Tajane')
person.display()
console.log(person.firstname)


function adds()
{
    let x=10
    let y=20
    return[x,y]
}

let ad=adds()
console.log(ad[0])
console.log(ad[1])

class vehicle{
    static color='red'
    static displayColor=function()
    {
        console.log(vehicle.color)
    }
}

vehicle.displayColor()

console.log(vehicle.color)