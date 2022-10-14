// polymorphism 
//same class,same method,different signature(overloading)
//differen class ,same method,same signature(overiding)

class Addition{
    calculator(a,b,c)
    {
        if(a!=undefined && b!=undefined && c!=undefined)
        {
            console.log(a+b+c)
        }
        else if(a!=undefined && b!=undefined)
        {
            console.log(a+b)
        }
        else{
            console.log('please provide correct input')
        }


    }
}
let s=new Addition()
s.calculator(2,3,4)
s.calculator(2,3)
s.calculator(1)

class WorldBank{
    save()
    {
        console.log('worldbank save method 10%')
    }
    loan()
    {
        console.log('worldbank loan method 2%')
    }
}
class SBI extends WorldBank
{
    save()
    {
        console.log('SBI save method 10%')
    }
    loan()
    {
        console.log('SBI loan method 2%')
    }
}

let sss=new SBI
sss.save()
sss.loan()