//ES6 class
class Employee
{
    name='diya'
    desg='TESTER'
    display()
    {
        console.log(this.color)
    }

}

let emp=new Employee()
emp.display()
emp.color='Red'
console.log(emp)
emp.display()

//here problem is function write to in contructor ao attach every object
class Company{
    constructor(cnme,type)
    {
        this.cnme=cnme
        this.type=type

        this.display=function()
        {
            console.log(this.type)
        }
    }
}
let cm=new Company('Wipro','IT')
console.log(cm)
let cd=new Company('TCS','TESTING')
console.log(cd)
cd.display()

//setting the values using method
class Person{
    setFullname(fn)
    {
        this.fn=fn
    }
    getFullname()
    {
        return this.fn
    }
    setAge(ag)
    {
        this.ag=ag
    }
    getAge()
    {
        return this.ag
    }
}
let ps=new Person()
ps.setFullname('raksha')
console.log(ps.getFullname())
ps.setAge(20)
console.log(ps.getAge())

//using prtopety name we can acess get and set method
class world{
    set ag(word)
    {
    this.word=word
    }
    get ag()
    {
      return this.word
    }
    set name(nm)
    {
        this.nm=nm
    }
    get name()
    {
        return this.nm
    }

}
let nmm=new world()
nmm.ag=20
nmm.name='ram'
console.log(nmm.ag)
console.log(nmm.name)